import { Component, OnInit } from '@angular/core';
import { Employe } from '../../../Models/employe';
import { EmployeeService } from '../../../Services/employee.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  employees!: Employe [];

  constructor(private EmployeeService:EmployeeService,private router:Router) { }

   ngOnInit(): void {
    this.getEmployees();
   }
    private getEmployees(){
      this.EmployeeService.getEmployeeList().subscribe(data => {
        this.employees = data;
      });
    }
    updateEmployee(id: number) {
      this.router.navigate(['Employee/Update', id]);
    }
    DeleteEmployee(id: number) {
      this.EmployeeService.DeleteEmploye(id).subscribe(data => {
        console.log(data);
        this.getEmployees();
      });
    }
}
