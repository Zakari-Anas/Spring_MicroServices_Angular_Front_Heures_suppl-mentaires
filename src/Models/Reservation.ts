import { Salle } from "./Salle";
import { Employe } from "./employe";

export class Reservation {
  id!: number;
  horaire!: Date;
  heure_debut!: string;
  heure_fin!: string;
  id_Salle!: number;
  id_Prof!: number;
}
