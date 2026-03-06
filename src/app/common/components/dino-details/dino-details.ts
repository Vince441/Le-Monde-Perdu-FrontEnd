import { Component, OnInit } from '@angular/core';
import { DinoService } from '../../../services/dino.service';
import { Dinosaures } from '../../../models/Dinosaures/dinosaures.model';
import { ActivatedRoute } from '@angular/router';
import { Periodes } from '../../../models/Dinosaures/periodes.model';
import { Types } from '../../../models/Dinosaures/types.model';

@Component({
  selector: 'app-dino-details',
  imports: [],
  templateUrl: './dino-details.html',
  styleUrl: './dino-details.scss',
})
export class DinoDetails implements OnInit {
  dino!: Dinosaures;
  periodes!: Periodes;
types!: Types;


  constructor(private readonly dinosauresService: DinoService, private readonly route: ActivatedRoute) {

  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.getDinoById(id);
    }

  }

  getDinoById(id: string): void {

    console.warn("appel API dinosaure :", id);

    this.dinosauresService.getDino(id).subscribe({
      next: (d) => {
        this.dino = d
        console.warn('d', this.dino);

      },
      error: (err) => {
        console.error("Erreur API :", err);
      }
    });
  }
}
