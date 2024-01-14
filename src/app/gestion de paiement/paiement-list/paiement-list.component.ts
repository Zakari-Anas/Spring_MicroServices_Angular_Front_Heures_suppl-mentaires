import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Etudiant } from 'src/Models/etudiant';
import { Paiement } from 'src/Models/paiement';
import { PaiemantDetails } from 'src/Models/paiementDetails';
import { PaiemementService } from 'src/Services/Paiement.service';
import { PaiemementDetilService } from 'src/Services/PaiementDetail.service';

@Component({
  selector: 'app-paiement-list',
  templateUrl: './paiement-list.component.html',
  styleUrls: ['./paiement-list.component.scss']
})
export class PaiementListComponent {

  public paimebtDetail:PaiemantDetails[]=[];

  constructor(public paiement:Paiement,private paiementService:PaiemementService,private paiementDetailService:PaiemementDetilService,private route:Router) { }

  ngOnInit(): void {
    this.getAllPaiement();
  }

  public getAllPaiement(){
    this.paiementDetailService.getAllPaiementDetail().subscribe(data => {
      this.paimebtDetail = data;
      console.log(data);
    });
  }

  public updateEtudiant(id: number) {
    this.route.navigate(['Paiement/Update', id]);
  }

  public DeleteEtudiant(id: number) {
    this.paiementService.deletePaiement(id).subscribe(data => {
      this.getAllPaiement();

    });
  }
}
