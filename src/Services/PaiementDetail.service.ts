import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Paiement } from 'src/Models/paiement';


@Injectable({
  providedIn: 'root'
})

export class PaiemementDetilService {

    constructor(private HttpClient: HttpClient) { }

    public getAllPaiementDetail(): Observable<any> {

          const baseUrl = 'http://localhost:8093/api/Paiement/';
          return this.HttpClient.get(baseUrl);
    }

    public updatePaiementDetail(id: number, paiment: Paiement): Observable<any> {

          const baseUrl = 'http://localhost:8093/api/Paiement/';
          return this.HttpClient.put(baseUrl + id, paiment);
    }

    public getOnePaiementDetail(id: number): Observable<any> {

          const baseUrl = 'http://localhost:8093/api/Paiement/';
          return this.HttpClient.get(baseUrl + id);
    }


}
