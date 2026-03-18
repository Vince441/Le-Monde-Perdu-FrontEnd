import { Component, OnInit, Type } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DinoService } from '../../../services/dino.service';
import { Types } from '../../../models/Dinosaures/types.model';
import { forkJoin } from 'rxjs';
import { Periodes } from '../../../models/Dinosaures/periodes.model';
import { Dinosaures, PostDinosauresAdmin } from '../../../models/Dinosaures/dinosaures.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-admin',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './admin.html',
  styleUrl: './admin.scss',
})
export class Admin implements OnInit {


  form!: FormGroup;

  dinosaure!: PostDinosauresAdmin;
  typesDinosaures!: Types[];
  periodesDinosaures!: Periodes[];

  constructor(private readonly fb: FormBuilder, private readonly dinosaureService: DinoService) {

    this.form = this.fb.group({
      nom: ['', Validators.required],
      types: [''],
      periodes: [''],
      taille: ['', Validators.required],
      poid: ['', Validators.required],
      description: ['', Validators.required],
      url: ['', Validators.required],
      code: ['', Validators.required]
    })
  }


  ngOnInit() {
    forkJoin({
      types: this.dinosaureService.getType(),
      periodes: this.dinosaureService.getPeriode()
    }).subscribe({
      next: ({ types, periodes }) => {
        this.typesDinosaures = types
        this.periodesDinosaures = periodes
        console.warn(types);
        
      },
      error: (err) => {
        console.error('Erreur lors de la récupération du type:', err);
      }
    });
  }


  postDinosaure() {
    if (this.form.valid) {
      const dino = this.form.value;

      this.dinosaureService.postDino(dino).subscribe({
        next: () => {
          console.warn(dino);

        }
      })

    }
  }

}
