import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EtudiantDetails } from 'src/Models/etudiantDetails';
import { EtudiantDetailsService } from 'src/Services/EtudiantDetails-service';

@Component({
  selector: 'app-carte-etudiant',
  templateUrl: './carte-etudiant.component.html',
  styleUrls: ['./carte-etudiant.component.scss']
})
export class CarteEtudiantComponent {

  id!: number;
  etudiantDetails:EtudiantDetails=new EtudiantDetails();
  constructor(private etudiantDetailsService:EtudiantDetailsService ,private router:ActivatedRoute)  { }

  ngOnInit(): void {
    this.id= this.router.snapshot.params['id'];
    this.loadEtudiantDetails();
  }
  loadEtudiantDetails() {
    this.etudiantDetailsService.getEtudiantById(this.id).subscribe(data => {
      this.etudiantDetails = data;
    });
  }
}
