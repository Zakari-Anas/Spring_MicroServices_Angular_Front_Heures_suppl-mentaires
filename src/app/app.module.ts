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
    EmploieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
