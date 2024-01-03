import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employe } from '../Models/employe';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {


    constructor(private HttpClient:HttpClient) { }


    createEmployee(employe: Employe): Observable<any> {
      const createUrl = 'http://localhost:8088/api/Employees/New';
      return this.HttpClient.post(createUrl, employe);
    }


    getEmployeeList():Observable<Employe[]>{
      const baseUrl = 'http://localhost:8088/api/Employees/';
      return this.HttpClient.get<Employe[]>(baseUrl);
    }


    getOneEmploye(id: number): Observable<Employe> {
      const OneEmploye = `http://localhost:8088/api/Employees/${id}`;
      return this.HttpClient.get<Employe>(OneEmploye);
    }


    UpdateEmploye(id: number,employe: Employe): Observable<Employe> {
      const updateEmploye = `http://localhost:8088/api/Employees/${id}`
      return this.HttpClient.put<Employe>(updateEmploye, employe);
    }

    DeleteEmploye(id: number): Observable<Employe> {

      const deleteEmploye = `http://localhost:8088/api/Employees/${id}`
      return this.HttpClient.delete<Employe>(deleteEmploye);
    }


}
