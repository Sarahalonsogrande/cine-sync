import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login-tab',
        pathMatch: 'full'
    },
    {
        path: 'login-tab',
        loadComponent: () => import('../authentication/pages/login/login.page').then(t => t.LoginPage)
    },
    {
        path: 'register-tab',
        loadComponent: () => import('../authentication/pages/register/register.page').then(t => t.RegisterPage)
    },
    {
        path: 'reset-password-tab',
        loadComponent: () => import('../authentication/pages/reset-password/reset-password.page').then(t => t.ResetPasswordPage)
    },
];
