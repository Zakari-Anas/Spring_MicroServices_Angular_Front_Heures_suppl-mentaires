import { Cour } from "./cours";
import { Etudiant } from "./etudiant";
import { group } from "./groupe";

export class AbsenceDetails {
  id!: number;
  horaire!: string; // You may need to adjust the data type according to how it's handled in your Angular application
  justification!: string;
  groupe!: group;
  cours!: Cour;
  etudiant!: Etudiant;
}
