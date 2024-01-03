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

    {path: '', redirectTo:'Employee', pathMatch:'full'},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
