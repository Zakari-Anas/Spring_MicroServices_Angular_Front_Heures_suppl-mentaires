import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { courDetails } from "src/Models/courDetails";

@Injectable({
  providedIn: 'root'
})

export class courDetailsService{



   constructor(private HttpClient:HttpClient) { }


      getAllCours(): Observable<any> {
         const baseUrl = 'http://localhost:8090/api/Cours/';
        return this.HttpClient.get(baseUrl);
    }

}
