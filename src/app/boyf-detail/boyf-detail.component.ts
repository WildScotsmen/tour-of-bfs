import { Component, OnInit, Input } from '@angular/core';
import { Boyf } from '../boyf';

@Component({
  selector: 'app-boyf-detail',
  templateUrl: './boyf-detail.component.html',
  styleUrls: ['./boyf-detail.component.css']
})
export class BoyfDetailComponent implements OnInit {

  @Input() boyf: Boyf;

  constructor() { }

  ngOnInit() {
  }

}
