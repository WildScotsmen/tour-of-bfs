import { Component, OnInit } from '@angular/core';
import { BOYFS } from '../mock-boyfs';

@Component({
  selector: 'app-boyfs',
  templateUrl: './boyfs.component.html',
  styleUrls: ['./boyfs.component.css']
})
export class BoyfsComponent implements OnInit {

  boyfs = BOYFS;

  constructor() { }

  ngOnInit() { }

}
