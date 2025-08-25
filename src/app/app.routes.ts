import { Routes } from '@angular/router';
import { TabsPage } from './layout/tabs/tabs.page';
// import { authenticationGuard } from './core/guards/authentication-guard';

export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home-tab',
        loadComponent: () => import('./layout/tabs/home-tab/home-tab.page').then(t => t.HomeTabPage)
      },
      {
        path: 'list-tab',
        loadComponent: () => import('./layout/tabs/list-tab/list-tab.page').then(t => t.ListTabPage)
      },
      {
        path: 'add-tab',
        loadComponent: () => import('./layout/tabs/add-tab/add-tab.page').then(t => t.AddTabPage),
        // canActivate: [authenticationGuard]
      },
      // {
      //   path: 'login-tab',
      //   loadChildren: () => import('./features/authentication/authentication.routes').then(r => r.routes)
      // },
      {
        path: 'login-tab',
        loadComponent: () => import('./features/dashboard/members/pages/members.page').then(p => p.MembersPage)
      },
      {
        path: '',
        redirectTo: 'home-tab',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home-tab',
    pathMatch: 'full'
  },
  {
    path: 'members',
    loadComponent: () => import('./features/dashboard/members/pages/members.page').then( m => m.MembersPage)
  }
];
