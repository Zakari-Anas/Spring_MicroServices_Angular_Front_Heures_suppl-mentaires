import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cour } from 'src/Models/cours';
import { Employe } from 'src/Models/employe';
import { CoursService } from 'src/Services/cours.service';

@Component({
  selector: 'app-update-cour',
  templateUrl: './update-cour.component.html',
  styleUrls: ['./update-cour.component.scss']
})
export class UpdateCourComponent {
       cours:Cour = new Cour();
       public employe:Employe[]=[];
        id!: number;

        constructor( private coursService:CoursService , private router:Router,private route:ActivatedRoute) { }

        ngOnInit(): void{
          this.getAllProfesseurs();
          this.getAllProfesseurs();
          this.id = this.route.snapshot.params['id'];
        }
        onSubmit(){
          this.saveCours();


        }

        saveCours(){
          this.coursService.addCours(this.cours).subscribe(data => {
            console.log(data);
            // this.goToCoursList();
            this.router.navigate(['/Cours']);
          },
          error => console.log(error));
        }

      getAllProfesseurs(){
          this.coursService.getEmployeeList().subscribe(data => {
            this.employe = data;
            console.log(data);
          }
          );
        }

          UpdateProfesseurs(){
          this.coursService.updateCours(this.id,this.cours.id).subscribe(data => {

          });
      }
}
