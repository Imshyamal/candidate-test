import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/switchMap';
import {Rug} from './../rug';
import {ActivatedRoute, Params, Router} from '@angular/router';
import { RugService } from './../rug.service';
import {Location} from '@angular/common';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';


@Component({
  selector: 'app-rug-update',
  templateUrl: './rug-update.component.html',
  styleUrls: ['./../app.component.css']
})
export class RugUpdateComponent implements OnInit {
  rugUpdateForm: FormGroup;
  rug: Rug;

  constructor(private rugService: RugService,
              private router: Router,
              private route: ActivatedRoute,
              private location: Location,
              private formBuilder: FormBuilder) {
  };

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.rugService.getRug(params['id']))
      .subscribe(rug => {
        this.rug = rug;
        this.buildForm();
      });
  }

  buildForm(): void {
    this.rugUpdateForm = this.formBuilder.group({
      rugName: [this.rug.rugName, Validators.required],
      rugPrice: [this.rug.rugPrice, Validators.required],
      rugDescr: [this.rug.rugDescr,Validators.required],
      _id: [this.rug._id],
      rugImgURL: [this.rug.rugImgURL, Validators.required],
    });
  }

  update(): void {
    let rug = this.rugUpdateForm.value as Rug;
    this.rugService.update(rug)
      .then(() => {
        this.router.navigate(['/rugs']);
      })
  }

  goBack(): void {
    this.location.back();
  }
}
