import { Component, OnInit } from '@angular/core';
import { Boyf } from '../boyf';

@Component({
  selector: 'app-boyfs',
  templateUrl: './boyfs.component.html',
  styleUrls: ['./boyfs.component.css']
})
export class BoyfsComponent implements OnInit {

  boyf: Boyf = {
    id: 0,
    name: "Wolf O'Donnell",
    anniversary: new Date()
  };

  constructor() { }

  ngOnInit() {
  }

}
