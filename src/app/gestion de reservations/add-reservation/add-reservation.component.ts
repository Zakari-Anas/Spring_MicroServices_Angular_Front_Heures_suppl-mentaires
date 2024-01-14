import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Reservation } from 'src/Models/Reservation';
import { Salle } from 'src/Models/Salle';
import { Employe } from 'src/Models/employe';
import { ReservationDetailService } from 'src/Services/ReservationDetail.service';

@Component({
  selector: 'app-add-reservation',
  templateUrl: './add-reservation.component.html',
  styleUrls: ['./add-reservation.component.scss']
})
export class AddReservationComponent {


  profs:Employe[]=[];
  salles:Salle[]=[];
  id!: number;
  constructor( private reservationDetailService:ReservationDetailService,private router:Router,public reservation:Reservation){}
  ngOnInit(): void {
    this.getAllProf();
    this.getAllSalle();
  }
  saveReservation(){
    this.reservationDetailService.addReservation(this.reservation).subscribe(data => {
      this.router.navigate(['reservation']);
    });
  }

  getAllProf(){
    this.reservationDetailService.getAllProfs().subscribe(data => {
      this.profs = data;

    });
  }

  getAllSalle(){
    this.reservationDetailService.getAllSalle().subscribe(data => {
      this.salles = data;

    });
  }
}
