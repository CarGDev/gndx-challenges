import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules  } from '@angular/router';
import { LayoutComponent } from './layout/layout.component'

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        loadChildren: () => import ('./home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'notFound',
        loadChildren: () => import ('./not-found/not-found.module').then(m => m.NotFoundModule)
      },
      {
        path: 'dashboard',
        loadChildren: () => import ('./dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'uploader',
        loadChildren: () => import ('./uploader/uploader.module').then(m => m.UploaderModule)
      },
      {
        path: 'weather',
        loadChildren: () => import ('./weather/weather.module').then(m => m.WeatherModule)
      },
      {
        path: 'github',
        loadChildren: () => import ('./github/github.module').then(m => m.GithubModule)
      },
      {
        path: 'tracker',
        loadChildren: () => import ('./tracker/tracker.module').then(m => m.TrackerModule)
      },
      {
        path: 'auth',
        loadChildren: () => import ('./auth/auth.module').then(m => m.AuthModule)
      },
      {
        path: 'pricing',
        loadChildren: () => import ('./pricing/pricing.module').then(m => m.PricingModule)
      },
      {
        path: 'chat',
        loadChildren: () => import ('./chat/chat.module').then(m => m.ChatModule)
      },
      {
        path: 'trello',
        loadChildren: () => import ('./trello/trello.module').then(m => m.TrelloModule)
      }
    ]
  },
  {
    path: '**',
    loadChildren: () => import ('./not-found/not-found.module').then(m => m.NotFoundModule)

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules, useHash: true
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
