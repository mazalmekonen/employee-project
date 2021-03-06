import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../employee';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { EmployeeService } from '../employee.service';


@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {
  @Input() employee?: Employee;

  constructor(
    private route: ActivatedRoute,
    private employeeService: EmployeeService,
    private location: Location

<<<<<<< HEAD
     ) {}
     selectedEmployee?:Employee;
     employees:Employee[] = [];

     onselect(employee :Employee):void{
       this.selectedEmployee=employee;
     }
=======
  constructor(
    private route: ActivatedRoute,
    private employeeService: EmployeeService,
    private location: Location
     ) {}
>>>>>>> 0ec57462bb1b7f37048cdef1b44071fed185e6ca
    

  ngOnInit(): void {
    this.getEmployee();
  }
  @Input() employee?: Employee;

  getEmployee(): void {
   const id = Number(this.route.snapshot.paramMap.get('id'));
    this.employeeService.getEmployee(id) //get employees detials from service
    .subscribe(employee => this.employee = employee);
   }
  
   goBack(): void {
     this.location.back();
     }
    
   save(): void {
    if (this.employee) {
      this.employeeService.updateEmployee(this.employee)
        .subscribe(() => this.goBack());
    }
  }
}
