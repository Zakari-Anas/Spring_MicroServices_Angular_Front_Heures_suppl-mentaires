import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmploiDetails } from 'src/Models/EmploiDetails';
import { emploi } from 'src/Models/Emploi';
import { courDetails } from 'src/Models/courDetails';
import { Cour } from 'src/Models/cours';
import { group } from 'src/Models/groupe';
import { EmploiService } from 'src/Services/Emploi.service';
import { EmploiDetailService } from 'src/Services/EmploiDetail.service';

@Component({
  selector: 'app-update-emploi',
  templateUrl: './update-emploi.component.html',
  styleUrls: ['./update-emploi.component.scss']
})
export class UpdateEMploiComponent {

  id!: number;
  groupes: group[] = [];
  coursDetails:courDetails[]=[];
  constructor(public emploi:emploi,public emploiDetail:EmploiDetails,private router:Router,private route:ActivatedRoute,private emploiService:EmploiService,private emploiDetailSerivce:EmploiDetailService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getEmploiById();
    this.getAllgroupes();
    this.getAllCours();
  }

  getEmploiById(){
    this.emploiDetailSerivce.getEmploiById(this.id).subscribe(data => {
      this.emploi = data;
      // console.log(data);
    });
  }
  submitForm(){

    this.emploiService.UpdateEmploi(this.id,this.emploi).subscribe(data => {
      console.log(data);
      this.router.navigate(['/Emploi']);
    });
  }

  getAllgroupes(){
    this.emploiDetailSerivce.getAllGroups().subscribe(data => {
      this.groupes = data;
      console.log(data);
    });
  }
  getAllCours(){
    this.emploiDetailSerivce.getAllCours().subscribe(data => {
      this.coursDetails = data;
    });
  }

  getGroupeById(){
      this.emploiDetailSerivce.getGroupeById(this.emploi.groupe_id).subscribe(data => {
        this.emploi= data;
        // this.groupes = data;
        console.log(data);
      });
  }
}
