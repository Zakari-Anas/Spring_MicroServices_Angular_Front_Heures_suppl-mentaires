import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Reservation } from 'src/Models/Reservation';
import { Salle } from 'src/Models/Salle';
import { Employe } from 'src/Models/employe';
import { ReservationService } from 'src/Services/Reservation.service';
import { ReservationDetailService } from 'src/Services/ReservationDetail.service';

@Component({
  selector: 'app-update-reservation',
  templateUrl: './update-reservation.component.html',
  styleUrls: ['./update-reservation.component.scss']
})
export class UpdateReservationComponent {
  profs:Employe[]=[];
  salles:Salle[]=[];
  id!: number;
  constructor( private reservationDetailService:ReservationDetailService,private router:ActivatedRoute,private route:Router,public reservation:Reservation){}
  ngOnInit(): void {
    this.id=this.router.snapshot.params['id'];
    this.getAllProf();
    this.getAllSalle();
  }
  saveReservation(){
    this.reservationDetailService.updateReservationDetail(this.id,this.reservation).subscribe(data => {
      this.route.navigate(['reservation']);
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
