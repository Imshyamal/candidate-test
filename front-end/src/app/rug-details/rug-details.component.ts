import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/switchMap';
import {Rug} from './../rug';
import {ActivatedRoute, Params} from '@angular/router';
import {Location} from '@angular/common';
import { RugService } from './../rug.service';



@Component({
  selector: 'app-rug-details',
  templateUrl: './rug-details.component.html',
  styleUrls: ['./../app.component.css']
})

export class RugDetailsComponent implements OnInit {
  rug: Rug;
  
    constructor(
      private rugService: RugService,
      private route: ActivatedRoute,
      private location: Location
    ){};
  
    ngOnInit(): void{
      this.route.params
        .switchMap((params: Params) => this.rugService.getRug(params['id']))
        .subscribe(user => this.rug = user);
    }
  
    goBack(): void{
      this.location.back();
    }
}
  