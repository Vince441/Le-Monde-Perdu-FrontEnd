import { Component } from '@angular/core';
import { ɵInternalFormsSharedModule } from "@angular/forms";
import { UtilisateurDinosaureService } from '../../../services/UtilisateurDinosaure.service';
import { UtilisateurDinosaure } from '../../../models/Dinosaures/utilisateur-dinosaures.models';

@Component({
  selector: 'app-ma-boutique',
  imports: [ɵInternalFormsSharedModule],
  templateUrl: './ma-boutique.html',
  styleUrl: './ma-boutique.scss',
})
export class MaBoutique {

idUser = '';
utilisateurDinosaure! : UtilisateurDinosaure;

constructor(private readonly utilisateurDinosaureService: UtilisateurDinosaureService){}


postDinosaureToUtilisateurDinosaure() {
throw new Error('Method not implemented.');
}

}
