import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { BoyfService } from '../boyf.service'
import { Boyf } from '../boyf';

@Component({
  selector: 'app-boyf-detail',
  templateUrl: './boyf-detail.component.html',
  styleUrls: ['./boyf-detail.component.css']
})
export class BoyfDetailComponent implements OnInit {

  @Input() boyf: Boyf;

  constructor(
    private route: ActivatedRoute,
    private boyfService: BoyfService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.boyfService.getBoyf(id).subscribe(
      boyf => this.boyf = boyf
    );
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.boyfService.updateBoyf(this.boyf).subscribe(
      () => this.goBack()
    );
  }

}
