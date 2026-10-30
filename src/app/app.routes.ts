import { Routes } from '@angular/router';
export const routes: Routes = [
  { path: '', pathMatch: 'full', loadComponent: () => import('./features/home/home').then(m => m.Home), title: 'Software Developer Portfolio | Suji' },
  { path: '**', loadComponent: () => import('./features/not-found/not-found').then(m => m.NotFound), title: 'Page not found' },
];
