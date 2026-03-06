import { Component, OnInit } from '@angular/core';
import { Dinosaures } from '../../../models/Dinosaures/dinosaures.model';
import { DinoService } from '../../../services/dino.service';

@Component({
  selector: 'app-mes-dinosaures',
  imports: [],
  templateUrl: './mes-dinosaures.html',
  styleUrl: './mes-dinosaures.scss',
})
export class MesDinosaures implements OnInit {
  dino?: Dinosaures; 
  errorMessage?: string;

  constructor(private dinosauresService: DinoService) {}

  ngOnInit(): void {
    // Exemple : récupérer un dino avec son ID
    this.getDinoById('937f9cfc-aed7-4f0b-b1bf-0c7fbdde288b');

    
  }

  getDinoById(id: string): void {
    this.dinosauresService.getDino(id).subscribe({
      next: (dino) => {
        this.dino = dino;
        console.log('Dinosaure récupéré :', this.dino);
      },
      error: (err) => {
        this.errorMessage = 'Erreur lors de la récupération du dinosaure';
        console.error(err);
      }
    });
  }
}