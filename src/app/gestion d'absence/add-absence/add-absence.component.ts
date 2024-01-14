import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Absence } from 'src/Models/Absence';
import { AbsenceDetails } from 'src/Models/AbsenceDetails';
import { Cour } from 'src/Models/cours';
import { EtudiantDetails } from 'src/Models/etudiantDetails';
import { group } from 'src/Models/groupe';
import { AbsenceService } from 'src/Services/AbsenceService';

@Component({
  selector: 'app-add-absence',
  templateUrl: './add-absence.component.html',
  styleUrls: ['./add-absence.component.scss']
})
export class AddAbsenceComponent {

  groups:group[]=[];
  students:EtudiantDetails[]=[];
  courses:Cour[]=[];

  constructor(private router:Router,private absenceService:AbsenceService,public absence:Absence) { }


    ngOnInit(): void {
      this.getAllEtudiants()
      this.getAllGroups();
      this.getAllCours();
  }
  saveAbsence(){
    this.absenceService.createAbsence(this.absence).subscribe(data => {
      this.router.navigate(['Absence']);
    });
  }

  getAllEtudiants(){
    this.absenceService.getEtudiantDetailsList().subscribe(data => {
      this.students = data;
      console.log(data);
    });
  }

  getAllGroups(){
    this.absenceService.getAllGroups().subscribe(data => {
      this.groups = data;
      console.log(data);
    });
  }

  getAllCours(){
    this.absenceService.getAllCours().subscribe(data => {
      this.courses = data;
      console.log(data);
    });
  }
}
