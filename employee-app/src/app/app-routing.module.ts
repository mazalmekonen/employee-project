import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { EmployeesComponent } from './employees/employees.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';

const routes: Routes = [
 { path: 'detail/:id', component: EmployeeDetailComponent },
{ path: 'dashboard', component: DashboardComponent },
{ path: 'employees', component: EmployeesComponent }
// { path: '', redirectTo: '/dashboard', pathMatch: 'full' },

];

@NgModule({

imports: [RouterModule.forRoot(routes)],

exports: [RouterModule]

})

export class AppRoutingModule { }
