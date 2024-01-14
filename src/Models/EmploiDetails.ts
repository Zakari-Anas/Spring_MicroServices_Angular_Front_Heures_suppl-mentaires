import { courDetails } from "./courDetails";
import { group } from "./groupe";

export class EmploiDetails {
    id!: number;
    heure_debut!: string;
    heure_fin!: string;
    groupe!: group;
    coursDetails!: courDetails;
}
