import { HttpHeaders, HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Cour } from "src/Models/cours";
import { Employe } from "src/Models/employe";

@Injectable({
  providedIn: 'root'
})

export class CoursService {
  private baseUrl = 'http://localhost:8090/api/Cours';
  // private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});


  constructor(private HttpClient: HttpClient) { }

    addCours(cours: Object): Observable<Object> {

      return this.HttpClient.post(`http://localhost:8090/api/Cours/New`, cours);
    }
    deleteCours(id: number): Observable<any> {
      const baseUrl = 'http://localhost:8090/api/Cours/';
      return this.HttpClient.delete(baseUrl + id);
    }

  getEmployeeList():Observable<Employe[]>{
      const baseUrl = 'http://localhost:8088/api/Employees/';
      return this.HttpClient.get<Employe[]>(baseUrl);
    }

    updateCours(id: number, cour: Object): Observable<Object> {
      return this.HttpClient.put(`${this.baseUrl}/${id}`, cour);

    }




}
