import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class  EmploiService{


    private baseUrl = 'http://localhost:8092/api/Extra/';
    constructor(private HttpClient: HttpClient) { }


    public UpdateEmploi(id: number, emploi: any): Observable<any> {
      return this.HttpClient.put(`${this.baseUrl}update/${id}`, emploi);
    }

    public CreateEmploi(emploi: any): Observable<any> {
      return this.HttpClient.post(`${this.baseUrl}New`, emploi);
    }


}
