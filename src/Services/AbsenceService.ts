import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Absence } from "src/Models/Absence";
import { AbsenceDetails } from "src/Models/AbsenceDetails";
import { courDetails } from "src/Models/courDetails";
import { EtudiantDetails } from "src/Models/etudiantDetails";

@Injectable({
  providedIn: 'root'
})

export class AbsenceService{

  constructor(private HttpClient:HttpClient) { }

  getAllAbsence():Observable<AbsenceDetails[]>{
    return this.HttpClient.get<AbsenceDetails[]>('http://localhost:8096/api/Absence/');
  }

  createAbsence(absence: Object): Observable<Absence> {

    return this.HttpClient.post<Absence>('http://localhost:8096/api/Absence/Add', absence);
  }

   getAllCours(): Observable<any> {
         const baseUrl = 'http://localhost:8090/api/Cours/';
        return this.HttpClient.get(baseUrl);
    }
    getEtudiantDetailsList():Observable<any>{
      const baseUrl = 'http://localhost:8091/api/Etudiants/';
      return this.HttpClient.get(baseUrl);

      }
    getAllGroups():Observable<any>{
        const baseUrl = 'http://localhost:8091/api/Etudiants/Groupes';
        return this.HttpClient.get(baseUrl);
    }

    deleteAbsence(id: number): Observable<any> {
      const baseUrl = 'http://localhost:8096/api/Absence/';
      return this.HttpClient.delete(baseUrl + id);
    }
    updateAbsence(id: number, absence: any): Observable<any> {
      const updateUrl = 'http://localhost:8096/api/Absence/' + id;
      return this.HttpClient.put(updateUrl, absence);
    }

    findById(id: number): Observable<any> {

       const baseUrl = 'http://localhost:8096/api/Absence/';
       return this.HttpClient.get(baseUrl + id);
    }

}
