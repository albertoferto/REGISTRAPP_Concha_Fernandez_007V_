import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { IngresadoGuard } from './guards/Ingresado.guard';
//import { LogOutGuard } from './guards/log-out.guard';
import { NoIngresadoGuard } from './guards/no-ingresado.guard';



const routes: Routes = [
  
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
    ,canActivate: [IngresadoGuard]
  },
  {
    path: 'inicio-sesion',
    loadChildren: () => import('./pages/inicio-sesion/inicio-sesion.module').then( m => m.InicioSesionPageModule)
    ,canActivate: [IngresadoGuard]
  },
  {
    path: 'reestablecer',
    loadChildren: () => import('./pages/reestablecer/reestablecer.module').then( m => m.ReestablecerPageModule)
    ,canActivate: [NoIngresadoGuard]
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule)
    ,canActivate: [IngresadoGuard]
  },
  {
    path: 'contrasena',
    loadChildren: () => import('./pages/contrasena/contrasena.module').then( m => m.ContrasenaPageModule)
    ,canActivate: [NoIngresadoGuard]
  },
  {
    path: 'validar',
    loadChildren: () => import('./pages/validar/validar.module').then( m => m.ValidarPageModule)
    ,canActivate: [NoIngresadoGuard]
  },
  {
    path: 'contra-cambiada',
    loadChildren: () => import('./pages/contra-cambiada/contra-cambiada.module').then( m => m.ContraCambiadaPageModule)
    ,canActivate: [NoIngresadoGuard]
  },
  {
    path: 'estudiante',
    loadChildren: () => import('./pages/estudiante/estudiante.module').then( m => m.EstudiantePageModule),
    canActivate: [IngresadoGuard]
  },
  {
    path: 'perfil',
    loadChildren: () => import('./pages/perfil/perfil.module').then( m => m.PerfilPageModule),
    canActivate: [IngresadoGuard]
  },
  {
    path: 'perfil-docente',
    loadChildren: () => import('./pages/perfil-docente/perfil-docente.module').then( m => m.PerfilDocentePageModule),
    canActivate: [IngresadoGuard]
  },
  {
    path: 'docente',
    loadChildren: () => import('./pages/docente/docente.module').then( m => m.DocentePageModule),
    canActivate: [IngresadoGuard]
  },
  {
    path: 'horario',
    loadChildren: () => import('./pages/horario/horario.module').then( m => m.HorarioPageModule),
    canActivate: [IngresadoGuard]
  },
  {
    path: 'escanear',
    loadChildren: () => import('./pages/escanear/escanear.module').then( m => m.EscanearPageModule),
    canActivate: [IngresadoGuard]
  },
  {
    path: 'generar',
    loadChildren: () => import('./pages/generar/generar.module').then( m => m.GenerarPageModule),
    canActivate: [IngresadoGuard]
  },
  {
    path: 'modificar-asistencia',
    loadChildren: () => import('./pages/modificar-asistencia/modificar-asistencia.module').then( m => m.ModificarAsistenciaPageModule),
    canActivate: [IngresadoGuard]
  },
  {
    path: 'noticias',
    loadChildren: () => import('./pages/noticias/noticias.module').then( m => m.NoticiasPageModule),
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
