import { Pagelayout } from './core/Enums/pagelayout';
import { setlayoutResolver } from './core/Resolvers/setlayout.resolver';
import { ErrorLayoutComponent } from './Features/shared/components/error-layout/error-layout.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
  redirectTo:'auth',
  pathMatch:'full'
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./Features/auth/auth.module').then((m) => m.AuthModule),
    resolve :{layout:setlayoutResolver(Pagelayout.Unuthorized)},
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./Features/dashboard/dashboard.module').then((m) => m.DashboardModule),
    resolve:{layout:setlayoutResolver(Pagelayout.Authorized)}
  },
  {
    path: '**',
    loadComponent: () =>
      import('./Features/shared/components/error-layout/error-layout.component').then((c) => c.ErrorLayoutComponent),
    resolve:{layout:setlayoutResolver(Pagelayout.Error)}
  },
];
