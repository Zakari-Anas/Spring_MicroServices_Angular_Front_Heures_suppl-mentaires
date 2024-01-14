import { Component } from '@angular/core';
import { emploi } from 'src/Models/Emploi';
import { EmploiDetails } from 'src/Models/EmploiDetails';
import { courDetails } from 'src/Models/courDetails';
import { group } from 'src/Models/groupe';
import { EmploiService } from 'src/Services/Emploi.service';
import { EmploiDetailService } from 'src/Services/EmploiDetail.service';

@Component({
  selector: 'app-add-emploi',
  templateUrl: './add-emploi.component.html',
  styleUrls: ['./add-emploi.component.scss']
})
export class AddEMploiComponent {
  id!: number;
  groupes: group[] = [];
  coursDetails:courDetails[]=[];
  constructor(public Emploi:emploi,public emploiDetail:EmploiDetails,private emploiService:EmploiService,private emploiDetailSerivce:EmploiDetailService) { }

  ngOnInit(): void {
    this.getEmploiById();
    this.getAllgroupes();
    this.getAllCours();
  }

  getEmploiById(){
    this.emploiDetailSerivce.getEmploiById(this.id).subscribe(data => {
      this.emploiDetail = data;
      // console.log(data);
    });
  }
  submitForm(){

    this.emploiService.CreateEmploi(this.Emploi).subscribe(data => {
      console.log(data);
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
}
