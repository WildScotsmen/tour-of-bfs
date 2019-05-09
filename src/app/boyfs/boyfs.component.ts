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

  add(name: string): void {
    const today = new Date();

    name = name.trim();

    if (!name) {
      return;
    }

    this.boyfService.addBoyf(
      { name: name, anniversary: today } as Boyf).subscribe(
        boyf => { this.boyfs.push(boyf) }
      );
  }

  delete(boyf: Boyf): void {
    this.boyfs = this.boyfs.filter(b => b !== boyf);
    this.boyfService.deleteBoyf(boyf).subscribe();
  }

}