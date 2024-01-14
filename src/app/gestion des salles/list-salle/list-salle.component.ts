import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Salle } from 'src/Models/Salle';
import { SalleService } from 'src/Services/SalleService';

@Component({
  selector: 'app-list-salle',
  templateUrl: './list-salle.component.html',
  styleUrls: ['./list-salle.component.scss']
})
export class ListSalleComponent {

    constructor(public salle:Salle,private salleService:SalleService,private router:Router) { }
    public Salles:Salle[]=[];
    ngOnInit(): void {

      this.getAllSalle();

    }

    getAllSalle(){
      this.salleService.getAllSalle().subscribe(data => {
        this.Salles = data;
      });
    }

    deleteSalle(id:number){
      this.salleService.deleteSalle(id).subscribe(data => {
        this.getAllSalle();
      });
    }

    updateSalle(id:number){
      this.router.navigate(['salle/Update/',id]);
    }


}
