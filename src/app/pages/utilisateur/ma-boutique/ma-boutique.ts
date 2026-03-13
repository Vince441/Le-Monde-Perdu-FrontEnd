import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { UtilisateurDinosaureService } from '../../../services/UtilisateurDinosaure.service';
import { UtilisateurDinosaure } from '../../../models/Dinosaures/utilisateur-dinosaures.models';
import { Dinosaures } from '../../../models/Dinosaures/dinosaures.model';

@Component({
  selector: 'app-ma-boutique',
  imports: [ReactiveFormsModule],
  templateUrl: './ma-boutique.html',
  styleUrl: './ma-boutique.scss',
})
export class MaBoutique implements OnInit {

idUser: string | null = null;
utilisateurDinosaure! : UtilisateurDinosaure;
dinosaure! : Dinosaures;
form!: FormGroup;

constructor(private readonly utilisateurDinosaureService: UtilisateurDinosaureService, private readonly fb:FormBuilder){
 
}


ngOnInit(){
  this.idUser = localStorage.getItem('idUser');
  
   this.form = this.fb.group({
    code:[''],
    idUser:[this.idUser]
  })
}

postDinosaureToUtilisateurDinosaure() {
  if(this.form.valid){
    const { code, idUser } = this.form.value;

    console.warn('Valeur envoyée:', { code, idUser });

    this.utilisateurDinosaureService.postUtilsateurDinosaureByCode(code, idUser)
      .subscribe({
        next: (res) => {
          console.warn('Réponse du serveur:', res);
        },
        error: (err) => {
          console.error("Erreur", err);
        }
      });
  }
}

}
