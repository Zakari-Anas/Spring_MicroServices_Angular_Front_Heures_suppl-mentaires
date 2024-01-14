import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Absence } from 'src/Models/Absence';
import { Cour } from 'src/Models/cours';
import { EtudiantDetails } from 'src/Models/etudiantDetails';
import { group } from 'src/Models/groupe';
import { AbsenceService } from 'src/Services/AbsenceService';

@Component({
  selector: 'app-updat-absence',
  templateUrl: './updat-absence.component.html',
  styleUrls: ['./updat-absence.component.scss']
})
export class UpdatAbsenceComponent {
groups:group[]=[];
  students:EtudiantDetails[]=[];
  courses:Cour[]=[];
  id!:number;
  constructor(private router:ActivatedRoute,private route:Router,private absenceService:AbsenceService,public absence:Absence) { }


    ngOnInit(): void {
      this.getAllEtudiants()
      this.getAllGroups();
      this.getAllCours();
      this.id=this.router.snapshot.params['id'];
      this.getById(this.id);
  }
    UpdateAbsence(){
    this.absenceService.updateAbsence(this.id,this.absence).subscribe(data => {
      this.route.navigate(['Absence']);
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
     getById(id:number){
        this.absenceService.findById(id).subscribe(data => {
          this.absence = data;
          console.log(data);
        });

      }
}
