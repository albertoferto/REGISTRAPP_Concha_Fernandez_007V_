import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

export interface Usuario{
  nombres: String;
  apellidos: String;
  telefono: Number;
  correo: String;
  contraseña: String;
  confirmarContraseña: String;
}
const USER_KEY='my-usuarios';

@Injectable(
  {
    providedIn: 'root'
  })


export class RegistroServiceService {
  private _storage: Storage
  newUsuario: Usuario = <Usuario>{};


  
  constructor(private storage: Storage) {
    this.init();
   }
   // en este punto se crea el storage de los usuarios
   async init(){
    const storage = await this.storage.create();
    this._storage= storage;
   }
   //Crea Usuarios
   async addUsuario(dato: Usuario):Promise<any>{
    return this.storage.get(USER_KEY).then((datos : Usuario[])=>{
      if (datos){
        datos.push(dato);
        return this.storage.set(USER_KEY, datos);
      }
      else{
        return this.storage.set(USER_KEY, [dato]);
      }
      })
  }
    //obtener todos Los usuarios desde el storage
    async getUsuarios():Promise<Usuario[]>{
      return this.storage.get(USER_KEY);
    }

    }//class 
    