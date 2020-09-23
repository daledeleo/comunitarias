import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NologinGuard } from './guards/nologin.guard';
import {AuthGuard} from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'tab1',
    loadChildren: () => import('./tab1/tab1.module').then( m => m.Tab1PageModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule),
    canActivate:[AuthGuard]
  },
 
  {
    path: 'contacts',
    loadChildren: () => import('./contacts/contacts.module').then( m => m.ContactsPageModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'categoria',
    children:[
      {
        path:'',
        loadChildren: () => import('./categoria/categoria.module').then( m => m.CategoriaPageModule),
        canActivate:[AuthGuard]
      },
      {
        path: ':categoriaId',
        loadChildren: () => import('./categoria/editar-categoria/editar-categoria.module').then( m => m.EditarCategoriaPageModule),
        canActivate:[AuthGuard]
      }
  ]
  },
  {
    path: 'generar-categoria',
    loadChildren: () => import('./categoria/generar-categoria/generar-categoria.module').then( m => m.GenerarCategoriaPageModule),
    canActivate:[AuthGuard]
  },

  {
    path: 'centro-acopio',
    children:[
      {
        path:'',
        loadChildren: () => import('./centro-acopio/centro-acopio.module').then( m => m.CentroAcopioPageModule),
        canActivate:[AuthGuard]
      },
      {
        path: ':centro-acopioId',
        loadChildren: () => import('./centro-acopio/ubicacion/ubicacion.module').then( m => m.UbicacionPageModule),
        canActivate:[AuthGuard]
      },
      {
        path: 'cntro-de-acopio-detalle/:id',
        loadChildren: () => import('./centro-acopio/centro-de-acopio-detalle/centro-de-acopio-detalle.module').then( m => m.CentroDeAcopioDetallePageModule),
        canActivate:[AuthGuard]
      }
  ]
  },

  {
    path: 'campaign',
    children:[
      {
        path:'',
        loadChildren: () => import('./campaign/campaign.module').then( m => m.CampaignPageModule),
        canActivate:[AuthGuard]
      },
      {
        path: 'editarcampaign/:id',
        loadChildren: () => import('./campaign/editar-campaign/editar-campaign.module').then( m => m.EditarCampaignPageModule),
        canActivate:[AuthGuard]
      },
      {
        path: 'detallecampaign/:id',
        loadChildren: () => import('./campaign/detalle-campaign/detalle-campaign.module').then( m => m.DetalleCampaignPageModule),
        canActivate:[AuthGuard]
      }, 
      {
        path: 'generar-campaign',
        loadChildren: () => import('./campaign/generar-campaign/generar-campaign.module').then( m => m.GenerarCampaignPageModule),
        canActivate:[AuthGuard]
      }
    ]
  },

  {
    path: 'donaciones',
    children:[
      {
        path:'',
        loadChildren: () => import('./donaciones/donaciones.module').then( m => m.DonacionesPageModule),
        canActivate:[AuthGuard]
      },

      {
        path: 'editardonacion/:id',
        loadChildren: () => import('./donaciones/editar-donacion/editar-donacion.module').then( m => m.EditarDonacionPageModule),
        canActivate:[AuthGuard]
      },
      {
        path: 'detalledonacion/:id',
        loadChildren: () => import('./donaciones/detalle-donacion/detalle-donacion.module').then( m => m.DetalleDonacionPageModule),
        canActivate:[AuthGuard]
      },
      {
        path: 'generar-donacion',
        loadChildren: () => import('./donaciones/generar-donacion/generar-donacion.module').then( m => m.GenerarDonacionPageModule),
        canActivate:[AuthGuard]
      }
    ]
  },

  {
    path: 'distribucion',
    loadChildren: () => import('./distribucion/distribucion.module').then( m => m.DistribucionPageModule),
    canActivate:[AuthGuard]
  },
  
  {
    path: 'login',
    children:[
      {
        path:'',
        loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule),
        canActivate:[NologinGuard]
      },
      {
        path: 'resetpwd/:id',
        loadChildren: () => import('./login/resetpwd/resetpwd.module').then( m => m.ResetpwdPageModule),
        canActivate:[AuthGuard]
      }
    ]
  },
  {
    path: 'grupos-de-apoyo',
    loadChildren: () => import('./grupos-de-apoyo/grupos-de-apoyo.module').then( m => m.GruposDeApoyoPageModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'lista-contactos/:id',
    children:[
      {
        path:'',
        loadChildren: () => import('./lista-contactos/lista-contactos.module').then( m => m.ListaContactosPageModule)
      },
      {
        path: 'detalle-contacto/:id',
            loadChildren: () => import('./lista-contactos/detalle-contacto/detalle-contacto.module').then( m => m.DetalleContactoPageModule),
            canActivate:[AuthGuard]
      },
      {
        path: 'editar-contacto/:idP',
            loadChildren: () => import('./lista-contactos/editar-contacto/editar-contacto.module').then( m => m.EditarContactoPageModule),
            canActivate:[AuthGuard]
      }
    ]
  },
  
  {
    path: 'generar-contactos/:id',
    children:[
      {
        path:'',
        loadChildren: () => import('./lista-contactos/generar-contacto/generar-contacto.module').then( m => m.GenerarContactoPageModule)
      }
    ]
  },

  {
    path: 'provider',
    children:[
      {
        path:'',
        loadChildren: () => import('./proveedor/proveedor.module').then( m => m.ProveedorPageModule),
        canActivate:[AuthGuard]
      },
      {
        path: 'detalleproveedor/:id',
        loadChildren: () => import('./proveedor/detalle-proveedor/detalle-proveedor.module').then( m => m.DetalleProveedorPageModule),
        canActivate:[AuthGuard]
      },
      {
        path: 'editarproveedor/:id',
        loadChildren: () => import('./proveedor/editarproveedor/editarproveedor.module').then( m => m.EditarproveedorPageModule),
        canActivate:[AuthGuard]
      },
      {
        path: 'generarproveedor',
        loadChildren: () => import('./proveedor/generarproveedor/generarproveedor.module').then( m => m.GenerarproveedorPageModule),
        canActivate:[AuthGuard]
      }
    ]
  },

  {
    path: 'volunteer',
    children:[
      {
        path:'',
        loadChildren: () => import('./volunteer/volunteer.module').then( m => m.VolunteerPageModule),
        canActivate:[AuthGuard]
      },

      {
        path: 'editarvolunteer/:id',
        loadChildren: () => import('./volunteer/editarvolunteer/editarvolunteer.module').then( m => m.EditarvolunteerPageModule),
        canActivate:[AuthGuard]
      },
      {
        path: 'detallevolunteer/:id',
        loadChildren: () => import('./volunteer/detallevolunteer/detallevolunteer.module').then( m => m.DetallevolunteerPageModule),
        canActivate:[AuthGuard]
      },
      {
        path: 'generar-volunteer',
        loadChildren: () => import('./volunteer/generarvolunteer/generarvolunteer.module').then( m => m.GenerarvolunteerPageModule),
        canActivate:[AuthGuard]
      }
    ]
  },



];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}