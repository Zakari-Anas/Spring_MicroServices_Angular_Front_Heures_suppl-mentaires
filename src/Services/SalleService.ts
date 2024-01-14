import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Salle } from 'src/Models/Salle';



@Injectable({
  providedIn: 'root'
})

export class SalleService{

  constructor(private HttpClient: HttpClient) { }

  public getAllSalle(): Observable<any> {

        const baseUrl = 'http://localhost:8094/api/Salle/';
        return this.HttpClient.get(baseUrl);
  }

  public addSalle(salle:any): Observable<any> {

    const baseUrl = 'http://localhost:8094/api/Salle/New';
    return this.HttpClient.post(baseUrl,salle);
  }

  public deleteSalle(id:number): Observable<any> {

      const baseUrl = 'http://localhost:8094/api/Salle/'+id;
      return this.HttpClient.delete(baseUrl);
  }

  public getSalleById(id:number): Observable<any> {

      const baseUrl = 'http://localhost:8094/api/Salle/'+id;
      return this.HttpClient.get(baseUrl);
  }

  public updateSalle(id:number,salle:Salle): Observable<any> {

      const baseUrl = 'http://localhost:8094/api/Salle/'+id;
      return this.HttpClient.put(baseUrl,salle);
  }
}
