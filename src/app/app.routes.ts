import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'auth', pathMatch: 'full' },
    { path : 'auth', loadComponent: () => import('./layouts/auth-layout/auth-layout.component').then(m => m.AuthLayoutComponent), 
        children: [
            // { path: '', redirectTo: 'login', pathMatch: 'full' },
            // { path: 'login', loadComponent: () => import('./pages/login/login.component').then(m => m.LoginComponent) }

            { path: '', redirectTo: 'register', pathMatch: 'full' },
            { path: 'register', loadComponent: () => import('./pages/register/register.component').then(m => m.RegisterComponent) }
        ]
    }, 

    { path: 'user', loadComponent: () => import('./layouts/user-layout/user-layout.component').then(m => m.UserLayoutComponent),
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent) },
            { path: 'duaa/addRelation', loadComponent: () => import('./pages/duaa/duaa-add-relation/duaa-add-relation.component').then(m => m.DuaaAddRelationComponent) },
            { path: 'dhikr/addRelation', loadComponent: () => import('./pages/dhikr/dhikr-add-relation/dhikr-add-relation.component').then(m => m.DhikrAddRelationComponent) },
            { path: 'duaa/removeRelation', loadComponent: () => import('./pages/duaa/duaa-remove-relation/duaa-remove-relation.component').then(m => m.DuaaRemoveRelationComponent) },
            { path: 'dhikr/removeRelation', loadComponent: () => import('./pages/dhikr/dhikr-remove-relation/dhikr-remove-relation.component').then(m => m.DhikrRemoveRelationComponent) }
        ]
    }
];
