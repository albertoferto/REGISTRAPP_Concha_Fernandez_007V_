import { Component, } from '@angular/core';
import { HttpClient} from '@angular/common/http';



interface Componente{
  icon:string;
  name:string;
  redirecTo:string;
  

}
interface Componente2{
  icon:string;
  nombre:string;
  redirecTo:string;
  
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
	constructor(private http: HttpClient) {}
	
  
  
  
  componentes2 : Componente2[] = [

    {
      icon: 'person-outline',
      nombre: 'Perfil',
      redirecTo: '/perfil'
    },
    /*{
      icon: 'calendar-number-outline',
      nombre: 'Ver Asistencia',
      redirecTo: '/horario'
    },*/
    {
      icon: 'build-outline',
      nombre: 'Modificar Asistencia',
      redirecTo: '/modificar-asistencia'
    },
    {
      icon: 'eye-outline',
      nombre: 'Noticias',
      redirecTo:'/noticias',
    },
    /*{
      icon: 'log-out-outline',
      nombre: 'Cerrar sesion',
      redirecTo: '/inicio'
    },*/
   

  ]
  
  componentes : Componente[] = [

    {
      icon: 'person-outline',
      name: 'Perfil',
      redirecTo: '/perfil',
       
    },
    {
      icon: 'calendar-number-outline',
      name: 'Ver Asistencia',
      redirecTo: '/horario'
    },
    /*{
      icon: 'build-outline',
      name: 'Modificar Asistencia',
      redirecTo: '/modificar-asistencia'
    },*/
    {
      icon: 'eye-outline',
      name: 'Noticias',
      redirecTo:'/noticias',
    },
    /*{
      icon: 'log-out-outline',
      name: 'Cerrar sesion',
      redirecTo: '/inicio'
    },*/
   

  ]

}
