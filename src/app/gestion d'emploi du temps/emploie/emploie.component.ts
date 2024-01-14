import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EmploiDetails } from 'src/Models/EmploiDetails';
import { EmploiDetailService } from 'src/Services/EmploiDetail.service';

@Component({
  selector: 'app-emploie',
  templateUrl: './emploie.component.html',
  styleUrls: ['./emploie.component.scss']
})
export class EmploieComponent {

  EmploiList !:EmploiDetails[];
  constructor( private emploiDetailService:EmploiDetailService ,private router:Router) { }

  ngOnInit(): void {
    this.getAllEmploi();
  }

  getAllEmploi(){
    this.emploiDetailService.getAllEmploi().subscribe(data => {
      this.EmploiList = data;
    });
  }

  updateCour(id: number) {
    this.router.navigate(['Emploi/Update', id]);
  }
  deleteCour(id: number) {}

}
