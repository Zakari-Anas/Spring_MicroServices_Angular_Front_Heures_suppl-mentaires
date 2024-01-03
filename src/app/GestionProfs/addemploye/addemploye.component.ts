import { Component, OnInit } from '@angular/core';
import { Employe } from '../../../Models/employe';
import { EmployeeService } from '../../../Services/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addemploye',
  templateUrl: './addemploye.component.html',
  styleUrls: ['./addemploye.component.scss']
})
export class AddemployeComponent implements OnInit {


      employe:Employe=new Employe();

      constructor(private employeeService: EmployeeService, private router:Router) {

      }

      submitForm() {
        this.employeeService.createEmployee(this.employe).subscribe(data => {
            this.router.navigate(['/Employees']);
          });
      }

      ngOnInit(): void {

      }


}
