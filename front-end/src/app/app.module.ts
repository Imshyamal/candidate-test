
//Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AppRoutingModule} from './app-routing.module';
import {FilterPipeModule} from 'ngx-filter-pipe';


//Components

import { AppComponent } from './app.component';
import { RugComponent } from './rug/rug.component';
import { RugDetailsComponent } from './rug-details/rug-details.component';
import { RugAddComponent } from './rug-add/rug-add.component';
import { RugUpdateComponent } from './rug-update/rug-update.component';
import { RugDashboardComponent } from './rug-dashboard/rug-dashboard.component';

//Services
import { RugService } from './rug.service';


@NgModule({
  declarations: [
    AppComponent,
    RugComponent,
    RugDetailsComponent,
    RugAddComponent,
    RugUpdateComponent,
    RugDashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    FilterPipeModule
  ],
  providers: [RugService],
  bootstrap: [AppComponent]
})
export class AppModule { }
