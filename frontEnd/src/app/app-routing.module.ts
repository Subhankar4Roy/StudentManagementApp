import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {StudentComponent} from './components/student/student.component';


const routes: Routes = [
  { path: '',   redirectTo: '/dashboard', pathMatch: 'full' },
  {path:'dashboard', component:DashboardComponent},
  {path:'students', component:StudentComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
