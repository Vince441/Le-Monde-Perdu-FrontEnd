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
    code : string;
}

export interface PostDinosauresAdmin {
    id: string;
    nom: string;
    periodes: number;
    types: number;
    taille: string;
    poid: string;
    description: string;
    url:string
    code : string;
}