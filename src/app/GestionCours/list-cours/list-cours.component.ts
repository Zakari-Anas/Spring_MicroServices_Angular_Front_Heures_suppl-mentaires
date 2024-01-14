import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { courDetails } from 'src/Models/courDetails';
import { courDetailsService } from 'src/Services/CourDetail.service';
import { CoursService } from 'src/Services/cours.service';

@Component({
  selector: 'app-list-cours',
  templateUrl: './list-cours.component.html',
  styleUrls: ['./list-cours.component.scss']
})
export class ListCoursComponent {

  id!: number;
  CourDetails!:courDetails[];
  constructor(private courservice:CoursService ,private CourDetailsService:courDetailsService, private router:Router) { }

  ngOnInit(): void {
    this.getCourDetails();
  }

   getCourDetails(){
    this.CourDetailsService.getAllCours().subscribe(data => {
      this.CourDetails = data;
    });
  }
  deleteCour(id: number) {
    this.courservice.deleteCours(id).subscribe(data => {
      console.log(data);
      this.getCourDetails();
    });
  }

   updateCour(id: number) {
    this.router.navigate(['Cours/Update', id]);
  }

}
