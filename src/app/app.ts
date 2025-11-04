import { Component, signal } from '@angular/core';
import { Accueil } from "./pages/accueil/accueil";

@Component({
  selector: 'app-root',
  imports: [Accueil],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('le-monde-perdu');
}
