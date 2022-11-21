import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { NavController} from '@ionic/angular';
import { RegistroServiceService, Usuario } from '../../services/registro-service.service';
import { 
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.page.html',
  styleUrls: ['./inicio-sesion.page.scss'],
})
export class InicioSesionPage implements OnInit {
  usuarios: Usuario[]=[];
  formularioLogin : FormGroup;

  constructor(private alertController: AlertController,
              private navController: NavController,
              private registroService: RegistroServiceService,
              private fb: FormBuilder){
                this.formularioLogin = this.fb.group({ 
                  'correo' : new FormControl ('', [Validators.required , Validators.email]),
                  //revisar minlenght
                  'contraseña' : new FormControl('', [Validators.required, Validators.min(3)])               
                })
              }
 

  ngOnInit() {
    
  }
  
  async Ingresar(){
    var f = this.formularioLogin.value;
    var a= 0;
    this.registroService.getUsuarios().then(datos=>{
      this.usuarios=datos;
      if (!datos || datos.length==0){
        return null;
      }
      let nombreSaludo='';
      let apellidoSaludo='';

      for (let obj of this.usuarios){
        if(f.correo == obj.correo && f.contraseña==obj.contraseña  && f.correo.slice(-10) == '@duocuc.cl'){
          
          a=1;
          nombreSaludo= obj.nombres.split(' ')[0];
          apellidoSaludo=obj.apellidos.split(' ')[0];
          localStorage.setItem('estudiante','true');
          this.navController.navigateRoot('estudiante');
          this.saludoMsg(nombreSaludo,apellidoSaludo);
        }
        else if(f.correo == obj.correo && f.contraseña==obj.contraseña && f.correo.slice(-17) =='@profesor.duoc.cl'){
          
          a=1;
          nombreSaludo= obj.nombres.split(' ')[0];
          apellidoSaludo=obj.apellidos.split(' ')[0];
          localStorage.setItem('profesor','true');
          this.navController.navigateRoot('docente');
          this.saludoMsg(nombreSaludo,apellidoSaludo);
        }
      }

      if (a==0){
        this.alertMsg();
      }

    });
  }
  async alertMsg(){
    const alert = await this.alertController.create({
      header: 'Error',
      message: 'Datos ingresados son incorrectos o el usuario no existe',
      buttons: ['Aceptar'],

    })
    await alert.present();
    return;
  }

  async saludoMsg(nombre:string, apellido:string){
    const alert = await this.alertController.create({
      header: '¡Hola '+' ' + nombre +' '+ apellido+'!',
      message: 'Bienvenido a RegistrApp',
      buttons: ['Continuar'],

    })
    await alert.present();
    return;

  }
 
    
  
}
