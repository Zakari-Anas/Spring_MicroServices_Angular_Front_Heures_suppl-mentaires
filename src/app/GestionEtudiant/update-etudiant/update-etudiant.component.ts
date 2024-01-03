import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { courDetails } from 'src/Models/courDetails';
import { Employe } from 'src/Models/employe';
import { Etudiant } from 'src/Models/etudiant';
import { group } from 'src/Models/groupe';
import { EtudiantDetailsService } from 'src/Services/EtudiantDetails-service';
import { EtudiantService } from 'src/Services/etudiant.service';


@Component({
  selector: 'app-update-etudiant',
  templateUrl: './update-etudiant.component.html',
  styleUrls: ['./update-etudiant.component.scss']
})



export class UpdateEtudiantComponent {

        id!: number;
        etudiant:Etudiant=new Etudiant();
        groupes: group[] = [];

        constructor( private etudiantService:EtudiantService , private router:ActivatedRoute,private etudiantDetailsService:EtudiantDetailsService) { }

        ngOnInit(): void {
          this.id= this.router.snapshot.params['id'];
          this.loadEtudiantDetails();
          this.getAllgroupes();
        }

        updateEtudiant(){
          if( this.etudiant.firstName !== "" &&
              this.etudiant.lastName !== "" &&
              this.etudiant.email !== "" &&
              this.etudiant.id_Groupe != null &&
              this.etudiant.niveau !== ""
            ){
            this.etudiantService.UpdateEtudiant(this.id,this.etudiant).subscribe(data => {
                  console.log(data);
                });
          }else{
            alert("Veuillez remplir tous les champs");
          }

        }



        loadEtudiantDetails() {
          this.etudiantService.getOneEtudiant(this.id).subscribe(data => {
            this.etudiant = data;
          });


        }



        getAllgroupes(){
            this.etudiantDetailsService.getAllGroups().subscribe(data => {
              this.groupes = data;
              console.log(data);
            }
            );
        }



  }




