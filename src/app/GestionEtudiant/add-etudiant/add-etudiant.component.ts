import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Etudiant } from 'src/Models/etudiant';
import { group } from 'src/Models/groupe';
import { EtudiantDetailsService } from 'src/Services/EtudiantDetails-service';
import { EtudiantService } from 'src/Services/etudiant.service';

@Component({
  selector: 'app-add-etudiant',
  templateUrl: './add-etudiant.component.html',
  styleUrls: ['./add-etudiant.component.scss']
})
export class AddEtudiantComponent {

    etudiant:Etudiant=new Etudiant();
    groupes: group[] = [];
    etududiant:Etudiant=new Etudiant();
    constructor(private etudiantService: EtudiantService, private router:Router,private etudiantDetailsService:EtudiantDetailsService) {}

    ngOnInit(): void {
      this.getAllgroupes();
    }
     submitForm() {
        this.etudiantService.createEtudiant(this.etudiant).subscribe(data => {
            this.router.navigate(['/Etudiants']);
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
