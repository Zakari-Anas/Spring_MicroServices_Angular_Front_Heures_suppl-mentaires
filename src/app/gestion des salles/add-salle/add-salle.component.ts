import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Salle } from 'src/Models/Salle';
import { SalleService } from 'src/Services/SalleService';

@Component({
  selector: 'app-add-salle',
  templateUrl: './add-salle.component.html',
  styleUrls: ['./add-salle.component.scss']
})
export class AddSalleComponent {

  constructor(public salle:Salle,private salleService:SalleService,private router:Router) { }

  ngOnInit(): void {
  }

  addSalle(){
    this.salleService.addSalle(this.salle).subscribe(data => {
      this.router.navigate(['salle']);
    });
  }
}
