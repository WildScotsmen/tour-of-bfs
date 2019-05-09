import { Component, OnInit } from '@angular/core';
import { BOYFS } from '../mock-boyfs';
import { Boyf } from '../boyf';

@Component({
  selector: 'app-boyfs',
  templateUrl: './boyfs.component.html',
  styleUrls: ['./boyfs.component.css']
})
export class BoyfsComponent implements OnInit {

  boyfs = BOYFS;

  selectedBoyf: Boyf;

  constructor() { }

  ngOnInit() { }

  onSelect(boyf: Boyf): void {
    this.selectedBoyf = boyf;
  }

}