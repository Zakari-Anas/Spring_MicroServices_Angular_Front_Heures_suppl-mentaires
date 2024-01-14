import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Etudiant } from 'src/Models/etudiant';
import { Paiement } from 'src/Models/paiement';
import { PaiemementService } from 'src/Services/Paiement.service';
import { PaiemementDetilService } from 'src/Services/PaiementDetail.service';

@Component({
  selector: 'app-update-paiement',
  templateUrl: './update-paiement.component.html',
  styleUrls: ['./update-paiement.component.scss']
})
export class UpdatePaiementComponent {
  public  Etudiants:Etudiant[]=[];
  constructor(public paiement:Paiement,public paiementService:PaiemementService ,private paiemementDetilService:PaiemementDetilService,private router:ActivatedRoute) { }
  id!: number;

  ngOnInit(): void {
    this.id=this.router.snapshot.params['id'];
    this.getAllEtudiant();
    this.getOnePaiment();
  }
    getAllEtudiant(){
    this.paiementService.getAllEtudiant().subscribe(data => {
      this.Etudiants = data;
    });
  }
  updatePaiement(){
    this.paiemementDetilService.updatePaiementDetail(this.id,this.paiement).subscribe(data => {

    });
  }
   getOnePaiment(){
      this.paiemementDetilService.getOnePaiementDetail(this.id).subscribe(data => {
        this.paiement = data;
        console.log(data);
      });
    }
}
