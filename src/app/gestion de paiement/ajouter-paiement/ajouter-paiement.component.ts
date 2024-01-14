import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Etudiant } from 'src/Models/etudiant';
import { Paiement } from 'src/Models/paiement';
import { PaiemementService } from 'src/Services/Paiement.service';

@Component({
  selector: 'app-ajouter-paiement',
  templateUrl: './ajouter-paiement.component.html',
  styleUrls: ['./ajouter-paiement.component.scss']
})
export class AjouterPaiementComponent {

  constructor(public paiement:Paiement,private route:Router,private paiementService:PaiemementService) { }
  public  Etudiants:Etudiant[]=[];

  ngOnInit(): void {
    this.getAllEtudiant();
  }

  getAllEtudiant(){
    this.paiementService.getAllEtudiant().subscribe(data => {
      this.Etudiants = data;
    });
  }
  addPaiement(){
    this.paiementService.addPaiement(this.paiement).subscribe(data => {
      this.route.navigate(['/Paiements']);
    });
  }
}
