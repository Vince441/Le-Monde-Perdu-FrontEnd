import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
{
    path: 'accueil',
    loadComponent : () => import('./pages/accueil/accueil').then(m => m.Accueil)
},
{
    path:'espace-utilisateur',
    loadComponent : () => import('./pages/utilisateur/espace-utilisateur/espace-utilisateur').then(m => m.EspaceUtilisateur),
    canActivate: [authGuard]
},{
    path:'',
    redirectTo: 'accueil',
    pathMatch: 'full'
}
];
