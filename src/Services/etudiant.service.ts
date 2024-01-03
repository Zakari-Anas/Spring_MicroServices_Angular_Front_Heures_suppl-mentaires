import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Etudiant } from  '../Models/etudiant';
@Injectable({
  providedIn: 'root'
})

export class EtudiantService{

  constructor(private HttpClient:HttpClient) { }

    createEtudiant(etudiant : Etudiant): Observable<any> {
      const createUrl = 'http://localhost:8091/api/Etudiants/New';
      return this.HttpClient.post(createUrl, etudiant);

    }
    UpdateEtudiant(id: number, etudiant: Etudiant): Observable<any> {
      const updateUrl = 'http://localhost:8091/api/Etudiants/update/' + id;
      return this.HttpClient.put(updateUrl, etudiant);
    }
    getOneEtudiant(id: number): Observable<any> {
      const baseUrl = 'http://localhost:8091/api/Etudiants/';
      return this.HttpClient.get(baseUrl + id);
    }

    deleteEtudiant(id: number): Observable<any> {
      const baseUrl = 'http://localhost:8091/api/Etudiants/';
      return this.HttpClient.delete(baseUrl + id);
    }
}
