import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
 import { EtudiantDetails } from 'src/Models/etudiantDetails';

@Injectable({
  providedIn: 'root'
})
export class EtudiantDetailsService {

  constructor(private HttpClient:HttpClient) { }

      getEtudiantDetailsList():Observable<EtudiantDetails[]>{
      const baseUrl = 'http://localhost:8091/api/Etudiants/';
      return this.HttpClient.get<EtudiantDetails[]>(baseUrl);

      }

      getEtudiantById(id: number): Observable<any> {
        const baseUrl = 'http://localhost:8091/api/Etudiants/';
        return this.HttpClient.get(baseUrl + id);
      }

      getAllGroups():Observable<any>{
        const baseUrl = 'http://localhost:8091/api/Etudiants/Groupes';
        return this.HttpClient.get(baseUrl);
      }
      getEtudiantByGroupe(id: number): Observable<any> {
        const baseUrl = 'http://localhost:8091/api/Etudiants/Groupe/';
        return this.HttpClient.get(baseUrl + id);
      }
}
