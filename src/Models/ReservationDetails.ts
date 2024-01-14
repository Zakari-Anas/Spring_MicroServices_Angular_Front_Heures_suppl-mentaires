import { Salle } from "./Salle";
import { Employe } from "./employe";

export class ReservationDetails {
  id!: number;
  horaire!: Date;
  heure_debut!: string;
  heure_fin!: string;
  salle!: Salle;
  prof!: Employe;
}
