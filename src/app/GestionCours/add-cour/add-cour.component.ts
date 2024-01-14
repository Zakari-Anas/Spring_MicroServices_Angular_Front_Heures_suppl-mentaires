import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Cour } from 'src/Models/cours';
import { Employe } from 'src/Models/employe';
import { CoursService } from 'src/Services/cours.service';

@Component({
  selector: 'app-add-cour',
  templateUrl: './add-cour.component.html',
  styleUrls: ['./add-cour.component.scss']
})
export class AddCourComponent {

        cours:Cour = new Cour();
        employe:Employe[]=[];


        constructor( private coursService:CoursService , private router:Router) { }

        ngOnInit(): void{
          this.getAllProfesseurs();
        }
        onSubmit(){
          this.saveCours();

        }

        saveCours(){
          this.coursService.addCours(this.cours).subscribe(data => {
            console.log(data);
            // this.goToCoursList();
            this.router.navigate(['/Cours']);
          });

        }

      getAllProfesseurs(){
          this.coursService.getEmployeeList().subscribe(data => {
            this.employe = data;
            console.log(data);
          }
          );
        }

}
