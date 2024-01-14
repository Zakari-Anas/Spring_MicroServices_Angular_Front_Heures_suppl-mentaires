import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AbsenceDetails } from 'src/Models/AbsenceDetails';
import { AbsenceService } from 'src/Services/AbsenceService';

@Component({
  selector: 'app-list-absence',
  templateUrl: './list-absence.component.html',
  styleUrls: ['./list-absence.component.scss']
})
export class ListAbsenceComponent {

  absencesDetails: AbsenceDetails[] = [];
  constructor(private router: Router, private absenceService: AbsenceService) { }

  ngOnInit(): void {
    this.getAbsencesDetails();
  }

    getAbsencesDetails(): void {
    this.absenceService.getAllAbsence().subscribe(data=> {
      this.absencesDetails = data;
      console.log(data);
    }

    );
  }

    updateAbsence(id: number): void {

    this.router.navigate(['Absence/Update/', id]);
  }

  deleteAbsence(id: number): void {
      this.absenceService.deleteAbsence(id).subscribe(data => {
      this.getAbsencesDetails();
    });
  }
}
