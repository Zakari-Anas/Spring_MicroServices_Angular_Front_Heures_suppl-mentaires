import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './GestionProfs/employee-list/employee-list.component';
import { AppRoutingModule } from './app-routing.moudule';
import { AddemployeComponent } from './GestionProfs/addemploye/addemploye.component';
import { FormsModule } from '@angular/forms';
import { UpdateemployeComponent } from './GestionProfs/updateemploye/updateemploye.component';
import { AddEtudiantComponent } from './GestionEtudiant/add-etudiant/add-etudiant.component';
import { EtudiantListComponent } from './GestionEtudiant/etudiant-list/etudiant-list.component';
import { UpdateEtudiantComponent } from './GestionEtudiant/update-etudiant/update-etudiant.component';
import { CarteEtudiantComponent } from './GestionEtudiant/carte-etudiant/carte-etudiant.component';
import { AddCourComponent } from './GestionCours/add-cour/add-cour.component';
import { ListCoursComponent } from  './GestionCours/list-cours/list-cours.component';
import { UpdateCourComponent } from './GestionCours/update-cour/update-cour.component';
import { EmploieComponent } from "./gestion d'emploi du temps/emploie/emploie.component";
import { AddEMploiComponent } from "./gestion d'emploi du temps/add-emploi/add-emploi.component";
import { UpdateEMploiComponent } from "./gestion d'emploi du temps/update-emploi/update-emploi.component";
import { EmploiDetails } from 'src/Models/EmploiDetails';
import { emploi } from 'src/Models/Emploi';
import { AjouterPaiementComponent } from './gestion de paiement/ajouter-paiement/ajouter-paiement.component';
import { PaiementListComponent } from './gestion de paiement/paiement-list/paiement-list.component';
import { UpdatePaiementComponent } from './gestion de paiement/update-paiement/update-paiement.component';
import { PaiemantDetails } from 'src/Models/paiementDetails';
import { Paiement } from 'src/Models/paiement';
import { ListSalleComponent } from './gestion des salles/list-salle/list-salle.component';
import { AddSalleComponent } from './gestion des salles/add-salle/add-salle.component';
import { UpdateSalleComponent } from './gestion des salles/update-salle/update-salle.component';
import { Salle } from 'src/Models/Salle';
import { AddReservationComponent } from './gestion de reservations/add-reservation/add-reservation.component';
import { ListReservationComponent } from './gestion de reservations/list-reservation/list-reservation.component';
import { UpdateReservationComponent } from './gestion de reservations/update-reservation/update-reservation.component';
import { Reservation } from 'src/Models/Reservation';
import { ReservationDetails } from 'src/Models/ReservationDetails';
import { NgxPaginationModule } from 'ngx-pagination';
import { ListAbsenceComponent } from "./gestion d'absence/list-absence/list-absence.component";
import { AddAbsenceComponent } from "./gestion d'absence/add-absence/add-absence.component";
import { UpdatAbsenceComponent } from "./gestion d'absence/updat-absence/updat-absence.component";
import { Absence } from 'src/Models/Absence';
import { AbsenceDetails } from 'src/Models/AbsenceDetails';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    AddemployeComponent,
    UpdateemployeComponent,
    AddEtudiantComponent,
    EtudiantListComponent,
    UpdateEtudiantComponent,
    CarteEtudiantComponent,
    AddCourComponent,
    ListCoursComponent,
    UpdateCourComponent,
    EmploieComponent,
    AddEMploiComponent,
    UpdateEMploiComponent,
    AjouterPaiementComponent,
    PaiementListComponent,
    UpdatePaiementComponent,
    ListSalleComponent,
    AddSalleComponent,
    UpdateSalleComponent,
    AddReservationComponent,
    ListReservationComponent,
    UpdateReservationComponent,
    ListAbsenceComponent,
    AddAbsenceComponent,
    UpdatAbsenceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
  ],
  providers: [
    EmploiDetails,
    emploi,
    PaiemantDetails,
    Salle,
    Paiement,
    Reservation,
    ReservationDetails,
    Absence,
    AbsenceDetails,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
