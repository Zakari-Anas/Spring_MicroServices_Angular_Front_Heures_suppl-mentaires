import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Etudiant } from  '../Models/etudiant';
import { Reservation } from 'src/Models/Reservation';
@Injectable({
  providedIn: 'root'
})

export class ReservationDetailService{

  constructor(private httpClient:HttpClient){}
  ngOnInit(): void {}

  public getAllReservationDetail(): Observable<any> {

        const baseUrl = 'http://localhost:8095/api/reservation/';
        return this.httpClient.get(baseUrl);
  }

  public DeleteReservationDetail(id:number): Observable<any> {
     const baseUrl = 'http://localhost:8095/api/reservation/';
      return this.httpClient.delete(baseUrl + id);
  }

  public updateReservationDetail(id:number,reservation:Reservation): Observable<any> {
    const baseUrl = 'http://localhost:8095/api/reservation/';
    return this.httpClient.put(baseUrl + id,reservation);
  }

  public addReservation(reservation:Reservation): Observable<any> {
    const baseUrl = 'http://localhost:8095/api/reservation/New';
     return this.httpClient.put(baseUrl ,reservation);
  }

  public getAllProfs(): Observable<any> {
     const baseUrl = 'http://localhost:8088/api/Employees/';
     return this.httpClient.get(baseUrl);
  }
  public getAllSalle(): Observable<any> {

        const baseUrl = 'http://localhost:8094/api/Salle/';
        return this.httpClient.get(baseUrl);
  }

}
