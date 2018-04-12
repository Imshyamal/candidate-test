import {NgModule}             from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {RugDashboardComponent}   from './rug-dashboard/rug-dashboard.component';
import {RugComponent}      from './rug/rug.component';
import {RugDetailsComponent}  from './rug-details/rug-details.component';
import {RugAddComponent} from './rug-add/rug-add.component';
import {RugUpdateComponent} from './rug-update/rug-update.component';


const routes: Routes = [
    {path:'',redirectTo: '/rugs', pathMatch:'full'},
    //{path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    {path: 'dashboard', component: RugDashboardComponent},
    {path: 'detail/:id', component: RugDetailsComponent},
    {path: 'update/:id', component: RugUpdateComponent},
    {path: 'rugs', component: RugComponent},
    {path: 'add', component: RugAddComponent}
  ];
  

  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule {
  }
  