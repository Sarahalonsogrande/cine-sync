import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
// import { authenticationGuard } from '../../core/guards/authentication-guard';

export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab-home',
        loadComponent: () =>
          import('../tabs/home-tab/home-tab.page').then((t) => t.HomeTabPage),
      },
      {
        path: 'tab-list',
        loadComponent: () =>
          import('../tabs/list-tab/list-tab.page').then((t) => t.ListTabPage),
      },
      {
        path: 'tab-add',
        loadComponent: () =>
          import('../tabs/add-tab/add-tab.page').then((t) => t.AddTabPage),
        // canActivate: [authenticationGuard],

      },
      {
        path: 'authentication-tab',
        loadChildren: () =>
          import('../../features/authentication/authentication.routes').then(r => r.routes),
      },
      {
        path: '',
        redirectTo: 'tab-home',
        pathMatch: 'full',
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab-home',
    pathMatch: 'full'
  }
];
