import { Component, OnInit } from '@angular/core';
import { BoyfService } from '../boyf.service';
import { Boyf } from '../boyf';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

boyfs: Boyf[] = [];

  constructor(private boyfService: BoyfService) { }

  ngOnInit() {
      this.getBoyfs();
  }

  getBoyfs() : void {
      this.boyfService.getBoyfs().subscribe(
          boyfs => this.boyfs = boyfs.slice(0, 3)
      );
  }

}
