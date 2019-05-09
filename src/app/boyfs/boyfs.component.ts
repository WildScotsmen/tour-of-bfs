import { Component, OnInit } from '@angular/core';
import { BoyfService } from '../boyf.service';
import { Boyf } from '../boyf';

@Component({
  selector: 'app-boyfs',
  templateUrl: './boyfs.component.html',
  styleUrls: ['./boyfs.component.css']
})
export class BoyfsComponent implements OnInit {

  boyfs: Boyf[];

  constructor(private boyfService: BoyfService) { }

  ngOnInit() {
    this.getBoyfs();
  }

  getBoyfs(): void {
    this.boyfService.getBoyfs().subscribe(
      boyfs => this.boyfs = boyfs
    );
  }

}