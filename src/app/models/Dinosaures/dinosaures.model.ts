import { Periodes } from "./periodes.model";
import { Types } from "./types.model";

export interface Dinosaures {
    id: string;
    nom: string;
    periodes: Periodes;
    types: Types;
    taille: string;
    poid: string;
    description: string;
    url:string
}

export interface UtilisateurDinosaure{
    id: number;
    idUser: string;
    idDinosaures : string;
}