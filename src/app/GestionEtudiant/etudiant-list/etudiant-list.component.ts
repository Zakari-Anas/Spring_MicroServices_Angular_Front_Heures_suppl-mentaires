import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Etudiant } from 'src/Models/etudiant';
import { EtudiantDetails } from 'src/Models/etudiantDetails';
import { group } from 'src/Models/groupe';
import { EtudiantDetailsService } from 'src/Services/EtudiantDetails-service';
import { EtudiantService } from 'src/Services/etudiant.service';

@Component({
  selector: 'app-etudiant-list',
  templateUrl: './etudiant-list.component.html',
  styleUrls: ['./etudiant-list.component.scss']
})
export class EtudiantListComponent {

  etudiantDetails!:EtudiantDetails[];
  etudiant!:Etudiant;
  id!: number;



  constructor(private etudiantService:EtudiantService,private etudiantDetailsService:EtudiantDetailsService ,private router:Router) { }

  ngOnInit(): void {
    this.getEtudiantDetails();
  }
    private getEtudiantDetails(){
      this.etudiantDetailsService.getEtudiantDetailsList().subscribe(data => {
        this.etudiantDetails = data;
      });
    }
    updateEtudiant(id: number) {
      this.router.navigate(['Etudiant/Update', id]);
    }

    DeleteEtudiant(id: number) {
      this.etudiantService.deleteEtudiant(id).subscribe(data => {
        console.log(data);
        this.getEtudiantDetails();
      });
    }

    findEtudiantById(id:number){
       this.router.navigate(['Etudiant/Show', id]);
      // this.etudiantDetailsService.getEtudiantById(id).subscribe(data => {
      //   this.etudiant = data;

      // });
    }

 filterStudentsByGroup(event: Event) {
    const target = event.target as HTMLInputElement;
    const groupId = parseInt(target.value, 10); // Parse input value to a number
    if (!isNaN(groupId)) {
      this.etudiantDetailsService.getEtudiantByGroupe(groupId).subscribe(data => {
        this.etudiantDetails = data;
      });
    } else {
      this.getEtudiantDetails();
    }
  }



}
