import { group } from  './groupe';

export class EtudiantDetails {
  id!: number;
  firstName!: string;
  lastName!: string;
  email!: string;
  niveau!: string;
  groupe!: group;
}
