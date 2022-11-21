import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { RegistroServiceService } from '../../services/registro-Service.service';
import { ToastController } from '@ionic/angular';
import { Usuario } from '../../services/registro-service.service';

import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  formularioRegistro: FormGroup;
  newUsuario: Usuario = <Usuario>{};
  usuarios: Usuario[] = [];


  constructor(private alertController: AlertController,
    private registroService: RegistroServiceService,
    private navController: NavController,
    private toast: ToastController,
    private fb: FormBuilder) {
    this.formularioRegistro = this.fb.group({
      'nombres': new FormControl("", [Validators.required, Validators.minLength(3)]),
      'apellidos': new FormControl("", [Validators.required, Validators.nullValidator, Validators.minLength(3)]),
      'telefono': new FormControl("", [Validators.required, Validators.maxLength(10)]),
      'correo': new FormControl("", [Validators.required, Validators.email]),
      'contraseña': new FormControl("", [Validators.required, Validators.minLength(6)]),
      'confirmarContraseña': new FormControl("", [Validators.required, Validators.minLength(6), Validators.maxLength(12)]),
    });
  }


  ngOnInit() {
  }
  async CrearUsuario() {
    var form = this.formularioRegistro.value;
    var existe = 0;


    if (this.formularioRegistro.invalid) {
      this.alertError();
    }


    else {
      this.newUsuario.nombres = form.nombres,
        this.newUsuario.apellidos = form.apellidos,
        this.newUsuario.telefono = form.telefono,
        this.newUsuario.correo = form.correo,
        this.newUsuario.contraseña = form.contraseña,
        this.newUsuario.confirmarContraseña = form.confirmarContraseña,

        this.registroService.getUsuarios().then(datos => {
          this.usuarios = datos;

          /**Si no existe data lo creará */
          if (!datos || datos.length == 0) {
            this.registroService.addUsuario(this.newUsuario).then(dato => {
              this.newUsuario = <Usuario>{};
              this.showToast('Usuario Registrado existosamente!');
            });
            this.formularioRegistro.reset();
            this.navController.navigateRoot('inicio');

          } else {
            /*Aqui comenzamos a buscar si existe el usuario  */
            for (let obj of this.usuarios) {
              if (this.newUsuario.correo == obj.correo) {
                existe = 1;
              }
            }//fin del for
            if (existe == 1) {
              this.alertCorreoDuplicado();
              this.formularioRegistro.reset();
            }
            else if(existe == 0 && this.newUsuario.contraseña != this.newUsuario.confirmarContraseña){
              this.Contraseña();
            }
            
            else {
              if(this.newUsuario.correo.slice(-10) == '@duocuc.cl' || this.newUsuario.correo.slice(-17) =='@profesor.duoc.cl'){
              this.registroService.addUsuario(this.newUsuario).then(dato => {
                this.newUsuario = <Usuario>{};
                this.showToast('Usuario creado satisfactoriamente');

              });
              this.formularioRegistro.reset();
              this.navController.navigateRoot('inicio');
            }
            else{
              this.correoMsg();
            }
          }
          }
        });//obtiene a los usuarios


    }//fin del else
  }//fin del metodo
  async alertError() {
    const alert = await this.alertController.create({
      header: 'Error..',
      message: 'Debe completar todos los datos',
      buttons: ['Aceptar']
    })
    await alert.present();
  }
  async showToast(msg) {
    const toast = await this.toast.create({
      message: msg,
      duration: 2000
    })
    await toast.present();
  }
  async alertCorreoDuplicado() {
    const alert = await this.alertController.create({
      header: '¡Error!',
      message: 'El correo ingresado ya existe',
      buttons: ['Aceptar']
    })
    await alert.present();
  }

  async Contraseña() {
    const alert = await this.alertController.create({
      header: '¡Error!',
      message: 'Las contraseñas no coinciden',
      buttons: ['Aceptar']
    })
    await alert.present();
  }
  async correoMsg() {
    const alert = await this.alertController.create({
      header: '¡Error!',
      message: 'Debes registrarte con tu correo Institucional Duoc',
      buttons: ['Volver a intentar']
    })
    await alert.present();
  }

}
