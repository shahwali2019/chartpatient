import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SystemadminComponent } from './systemadmin/systemadmin.component';
import { PatientsComponent } from './patients/patients.component';
import { SummarychartComponent } from './summarychart/summarychart.component';
import { ScheduleComponent } from './schedule/schedule.component';



const routes: Routes = [
  { path: 'system', component: SystemadminComponent },
  { path: 'patient', component: PatientsComponent },
  { path: 'summary', component: SummarychartComponent },
  { path: 'schedule', component: ScheduleComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  SystemadminComponent,
  PatientsComponent,
  SummarychartComponent,
  ScheduleComponent]

