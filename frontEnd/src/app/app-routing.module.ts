import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {StudentComponent} from './student/student.component';


const routes: Routes = [
  {path:'dashboard', component:DashboardComponent},
  {path:'students', component:StudentComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
