import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class  EmploiDetailService{

    private baseUrl = 'http://localhost:8092/api/Extra/';
    constructor(private HttpClient: HttpClient) { }


    public getAllEmploi(): Observable<any> {
      return this.HttpClient.get(`${this.baseUrl}`);
    }

    public getAllGroups():Observable<any>{
        const baseUrl = 'http://localhost:8089/api/Groupe/';
        return this.HttpClient.get(baseUrl);
      }

    public getAllCours(): Observable<any> {
         const baseUrl = 'http://localhost:8090/api/Cours/';
        return this.HttpClient.get(baseUrl);
    }

    public getEmploiById (id: number): Observable<any> {
      return this.HttpClient.get(`${this.baseUrl}${id}`);
    }

    public getGroupeById (id: number): Observable<any> {
      const baseUrl = 'http://localhost:8089/api/Groupe/';
      return this.HttpClient.get(`${baseUrl}`+id);
    }
}
