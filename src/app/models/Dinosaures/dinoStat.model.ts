import { Types } from "./types.model";

export interface DinoStat{
    idDino : number,
    niveau : number,
    attaque : number,
    resistancePhysique: number,
    chanceCritique : number,
    idFaiblesse : Types,
    idResistance : Types,
    idForce : Types,
}