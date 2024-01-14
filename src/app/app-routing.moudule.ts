import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EmployeeListComponent } from "./GestionProfs/employee-list/employee-list.component";
import { AddemployeComponent } from "./GestionProfs/addemploye/addemploye.component";
import { UpdateemployeComponent } from "./GestionProfs/updateemploye/updateemploye.component";
import { AddEtudiantComponent } from "./GestionEtudiant/add-etudiant/add-etudiant.component";
import { EtudiantListComponent } from "./GestionEtudiant/etudiant-list/etudiant-list.component";
import { UpdateEtudiantComponent } from "./GestionEtudiant/update-etudiant/update-etudiant.component";
import { CarteEtudiantComponent } from "./GestionEtudiant/carte-etudiant/carte-etudiant.component";
import { ListCoursComponent } from "./GestionCours/list-cours/list-cours.component";
import { AddCourComponent } from "./GestionCours/add-cour/add-cour.component";
import { UpdateCourComponent } from "./GestionCours/update-cour/update-cour.component";
import { EmploieComponent } from "./gestion d'emploi du temps/emploie/emploie.component";
import { AddEMploiComponent } from "./gestion d'emploi du temps/add-emploi/add-emploi.component";
import { UpdateEMploiComponent } from "./gestion d'emploi du temps/update-emploi/update-emploi.component";
import { PaiementListComponent } from "./gestion de paiement/paiement-list/paiement-list.component";
import { AjouterPaiementComponent } from "./gestion de paiement/ajouter-paiement/ajouter-paiement.component";
import { UpdatePaiementComponent } from "./gestion de paiement/update-paiement/update-paiement.component";
import { ListSalleComponent } from "./gestion des salles/list-salle/list-salle.component";
import { AddSalleComponent } from "./gestion des salles/add-salle/add-salle.component";
import { UpdateSalleComponent } from "./gestion des salles/update-salle/update-salle.component";
import { ListReservationComponent } from "./gestion de reservations/list-reservation/list-reservation.component";
import { AddReservationComponent } from "./gestion de reservations/add-reservation/add-reservation.component";
import { UpdateReservationComponent } from "./gestion de reservations/update-reservation/update-reservation.component";
import { ListAbsenceComponent } from "./gestion d'absence/list-absence/list-absence.component";
import { AddAbsenceComponent } from "./gestion d'absence/add-absence/add-absence.component";
import { UpdatAbsenceComponent } from "./gestion d'absence/updat-absence/updat-absence.component";


const routes: Routes = [

    {path: 'Employees', component:EmployeeListComponent},
    {path: 'Employee/Add', component:AddemployeComponent},
    {path: 'Employee/Update/:id', component:UpdateemployeComponent},

    {path: 'Etudiants', component:EtudiantListComponent},
    {path: 'Etudiant/Add', component:AddEtudiantComponent},
    {path: 'Etudiant/Update/:id', component:UpdateEtudiantComponent},
    {path: 'Etudiant/Show/:id', component:CarteEtudiantComponent},

    {path: 'Cours', component:ListCoursComponent},
    {path: 'Cours/Add', component: AddCourComponent},
    {path: 'Cours/Update/:id', component:UpdateCourComponent},
    // {path: 'Cours/Show/:id', component:CarteEtudiantComponent},

    {path: 'Emploi', component:EmploieComponent},
    {path: 'Emploi/Add', component: AddEMploiComponent},
    {path: 'Emploi/Update/:id', component:UpdateEMploiComponent},

    {path: 'Paiements', component:PaiementListComponent},
    {path: 'Paiement/Add', component: AjouterPaiementComponent},
    {path: 'Paiement/Update/:id', component:UpdatePaiementComponent},

    {path:'salle' , component:ListSalleComponent},
    {path: 'salle/Add', component:AddSalleComponent },
    {path: 'salle/Update/:id', component:UpdateSalleComponent},

   {path:'reservation' , component:ListReservationComponent},
   {path: 'reservation/Add', component:AddReservationComponent },
    {path: 'reservation/Update/:id', component:UpdateReservationComponent},
    {path: '', redirectTo:'Employee', pathMatch:'full'},

    {path: 'Absence', component:ListAbsenceComponent},
    {path: 'Absence/Add', component:AddAbsenceComponent},
    {path: 'Absence/Update/:id', component:UpdatAbsenceComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
