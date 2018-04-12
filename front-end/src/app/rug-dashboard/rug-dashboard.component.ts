import { Component, OnInit } from '@angular/core';
import {RugService} from "./../rug.service";


@Component({
  selector: 'app-rug-dashboard',
  templateUrl: './rug-dashboard.component.html',
  styleUrls: ['./../app.component.css']
})
export class RugDashboardComponent implements OnInit {
  
  totalRugs: number;
  constructor(private rugService: RugService){};

  ngOnInit():void{
    this.rugService.getRugs()
      .then(response => this.totalRugs = response.length);
  }

}
