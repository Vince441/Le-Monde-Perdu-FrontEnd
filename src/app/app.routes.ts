import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
    {
        path: 'accueil',
        loadComponent: () => import('./pages/accueil/accueil').then(m => m.Accueil)
    },
    {
        path: 'creer-mon-compte',
        loadComponent: () => import('./pages/utilisateur/espace-creer-compte/espace-creer-compte').then(m => m.EspaceCreerCompte),
        canActivate: [authGuard]
    },
    {
        path: 'espace-utilisateur',
        loadComponent: () => import('./pages/utilisateur/espace-utilisateur/espace-utilisateur').then(m => m.EspaceUtilisateur),
        canActivate: [authGuard]
    },
    {
        path:'mon-compte',
        loadComponent: () => import('./pages/utilisateur/mon-compte/mon-compte').then(m => m.MonCompte ),
        canActivate: [authGuard]
    },
    {
        path: 'mes-dinosaures',
        loadComponent: () => import('./pages/utilisateur/mes-dinosaures/mes-dinosaures').then(m => m.MesDinosaures),
        canActivate: [authGuard]
    },
    {
        path: 'dinosaures/:id',
        loadComponent: () => import('./common/components/dino-details/dino-details').then(m => m.DinoDetails),
        canActivate: [authGuard]
    },
    {
        path: '',
        redirectTo: 'accueil',
        pathMatch: 'full'
    }
];


