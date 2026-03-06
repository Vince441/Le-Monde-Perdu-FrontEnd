import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {

  constructor() { }

  // Sauvegarder une valeur
  setItem(key: string, value: string): void {
    localStorage.setItem(key, value);
  }

  // Récupérer une valeur
  getItem(key: string): string | null {
    return localStorage.getItem(key);
  }

  // Supprimer une valeur
  removeItem(key: string): void {
    localStorage.removeItem(key);
  }

  // Vider tout le localStorage
  clear(): void {
    localStorage.clear();
  }
}