import { Routes } from '@angular/router';
// Lazy load the standalone components
export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./components/home/home.component').then(m => m.HomeComponent)
    },
    {
        path: 'find-us',
        loadComponent: () => import('./components/find-us/find-us.component').then(m => m.FindUsComponent)
    }
];
