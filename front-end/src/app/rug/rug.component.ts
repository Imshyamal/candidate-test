import { Component, OnInit } from '@angular/core';
import {Rug} from './../rug';
import { RugService } from './../rug.service';
import {Router} from '@angular/router';



@Component({
  selector: 'app-rug',
  templateUrl: './rug.component.html',
  styleUrls: ['./../app.component.css']
})
export class RugComponent implements OnInit {
  rugs: Rug[];
  
    constructor(private router: Router,
      private rugService: RugService) {
    }
  
  
    getRugs(): void {
      this.rugService.getRugs()
       .then(rugs => {
        this.rugs = rugs;
      });
    }
  
  
  
  
  
  
    ngOnInit() {
      this.getRugs();
    }
  
    update(id: string): void {
      this.router.navigate(['/update', id]);
    }
  
    remove(id: string): void {
      this.rugService.remove(id)
        .then(() => {
          this.getRugs();
        });
    }
  
    viewDetail(id: string): void {
      this.router.navigate(['/detail', id]);
    }
  
  
  
  
    
  }
  