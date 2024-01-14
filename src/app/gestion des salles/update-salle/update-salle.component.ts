import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Salle } from 'src/Models/Salle';
import { courDetails } from 'src/Models/courDetails';
import { SalleService } from 'src/Services/SalleService';


@Component({
  selector: 'app-update-salle',
  templateUrl: './update-salle.component.html',
  styleUrls: ['./update-salle.component.scss']
})
export class UpdateSalleComponent {

    id!: number;
    public salle:Salle=new Salle();
    constructor(private salleService:SalleService,private router:ActivatedRoute) { }

    ngOnInit(): void {
      this.id=this.router.snapshot.params['id'];
      this.getSalleDetails();
    }

     getSalleDetails(){
        this.salleService.getSalleById(this.id).subscribe(data => {
          this.salle = data;
          console.log(data);
        });
      }
    updateSalle(){
      this.salleService.updateSalle(this.id,this.salle).subscribe(data => {

        console.log(data);
      });
    }
}
