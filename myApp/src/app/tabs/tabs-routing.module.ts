import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
      },

      {
        path: 'tab1',
        loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
      },

      {
        path: 'about',
        loadChildren: () => import('../about/about.module').then(m => m.AboutPageModule)
      },

      {
        path: 'contacts',
        loadChildren: () => import('../contacts/contacts.module').then(m => m.ContactsPageModule)
      },
      {
        path: 'donaciones',
        loadChildren: () => import('../donaciones/donaciones.module').then(m => m.DonacionesPageModule)
      },

   
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
