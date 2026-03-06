import { Component, signal } from '@angular/core';
import { Accueil } from "./pages/accueil/accueil";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('le-monde-perdu');
}
