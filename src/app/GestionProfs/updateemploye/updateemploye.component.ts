import { Component, OnInit } from '@angular/core';
import { Employe } from '../../../Models/employe';
import { EmployeeService } from '../../../Services/employee.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-updateemploye',
  templateUrl: './updateemploye.component.html',
  styleUrls: ['./updateemploye.component.scss']
})


export class UpdateemployeComponent implements OnInit {
  id!: number;
  employe: Employe = new Employe();

  constructor(private employeeService: EmployeeService, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
      this.id = this.route.snapshot.params['id'];
      this.loadEmployeDetails();

  }

  loadEmployeDetails() {
    this.employeeService.getOneEmploye(this.id).subscribe(data => {
      this.employe = data;
    });
  }

  submitForm() {
    this.employeeService.UpdateEmploye(this.id,this.employe).subscribe(data => {
        console.log(data);
    });
  }





}
