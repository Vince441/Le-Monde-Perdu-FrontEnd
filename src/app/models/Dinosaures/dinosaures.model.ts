import { Periodes } from "./periodes.model";
import { Types } from "./types.model";

export interface Dinosaures {
    id: string;
    periodes: Periodes[];
    types: Types[];
    taille: string;
    poid: string;
    description: string;
    url:string

}