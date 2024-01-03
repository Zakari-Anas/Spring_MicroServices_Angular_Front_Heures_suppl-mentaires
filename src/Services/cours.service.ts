import { HttpHeaders, HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Employe } from "src/Models/employe";

@Injectable({
  providedIn: 'root'
})

export class CoursService {
  private baseUrl = 'http://localhost:8090/api/Cours';
  // private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});


  constructor(private HttpClient: HttpClient) { }

    addCours(cours: Object): Observable<Object> {

      return this.HttpClient.post(`${this.baseUrl}/New`, cours);
    }
    deleteCours(id: number): Observable<any> {
      const baseUrl = 'http://localhost:8090/api/Cours/';
      return this.HttpClient.delete(baseUrl + id);
    }

  getEmployeeList():Observable<Employe[]>{
      const baseUrl = 'http://localhost:8088/api/Employees/';
      return this.HttpClient.get<Employe[]>(baseUrl);
    }




}
