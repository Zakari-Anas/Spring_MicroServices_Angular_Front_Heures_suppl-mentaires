  import { Component } from '@angular/core';
  import { ActivatedRoute, Route, Router } from '@angular/router';
  import { Reservation } from 'src/Models/Reservation';
  import { ReservationDetails } from 'src/Models/ReservationDetails';
  import { ReservationDetailService } from 'src/Services/ReservationDetail.service';

  @Component({
    selector: 'app-list-reservation',
    templateUrl: './list-reservation.component.html',
    styleUrls: ['./list-reservation.component.scss']
  })
  export class ListReservationComponent {


      public reservationsDetails:ReservationDetails[]=[];
      constructor(public reservation:Reservation,private reservationDetailService:ReservationDetailService,private router:Router) {}
      ngOnInit(): void {
        this.getAllReservation();
      }


      getAllReservation(){
        this.reservationDetailService.getAllReservationDetail().subscribe(data => {
          this.reservationsDetails = data;
          console.log(data);
        });
      }

      updateReservation(id:number){
        this.router.navigate(['reservation/Update/',id]);
      }


      DeleteReservation(id:number){
        this.reservationDetailService.DeleteReservationDetail(id).subscribe(data => {
          this.getAllReservation();
        });
      }
  }
