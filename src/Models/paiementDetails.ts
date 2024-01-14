import { Etudiant } from "./etudiant";
import { group } from "./groupe";

export class PaiemantDetails {
  id!: number;
  paymentDate!: string; // Assuming LocalDate is mapped to a string in JSON
  etudiant!: Etudiant;
  groupe!: group;
}
