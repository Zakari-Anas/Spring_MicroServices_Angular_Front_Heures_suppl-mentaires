import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PaiemementService {

    constructor(private HttpClient: HttpClient) { }

    public getAllPaiement(): Observable<any> {
       const baseUrl = 'http://localhost:8093/api/Paiement/';
      return this.HttpClient.get(baseUrl);
    }

    public addPaiement(paiement: any): Observable<any> {

      const baseUrl = 'http://localhost:8093/api/Paiement/New';
      return this.HttpClient.post(baseUrl, paiement);
    }

    public deletePaiement(id: number): Observable<any> {
      const baseUrl = 'http://localhost:8093/api/Paiement/';
      return this.HttpClient.delete(baseUrl + id);
    }

    public getAllEtudiant(): Observable<any> {
      const baseUrl = 'http://localhost:8091/api/Etudiants/';
      return this.HttpClient.get(baseUrl);
    }

}
