import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/switchMap';
import {Rug} from './../rug';
import {Router} from '@angular/router';
import { RugService } from './../rug.service';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Location} from "@angular/common";

@Component({
  selector: 'app-rug-add',
  templateUrl: './rug-add.component.html',
  styleUrls: ['./../app.component.css']
})
export class RugAddComponent {
  rugAddForm: FormGroup;
  rug = new Rug();

  constructor(private rugService: RugService,
              private router: Router,
              private location: Location,
              private formBuilder: FormBuilder) {
    this.buildForm();
  };

  buildForm(): void {
    this.rugAddForm = this.formBuilder.group({
      rugName: ['', Validators.required],
      rugPrice: ['', Validators.required],
      rugDescr: ['', Validators.required],
      rugImgURL: ['', Validators.required],
    });
  }

  add(): void {
    let rug = this.rugAddForm.value as Rug;
    this.rugService.add(rug)
      .then(response => {
        console.log('response', response);
        this.router.navigate(['/rugs']);
      })
  }

  goBack(): void {
    this.location.back();
  }
}
