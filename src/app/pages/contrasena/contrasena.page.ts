import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contrasena',
  templateUrl: './contrasena.page.html',
  styleUrls: ['./contrasena.page.scss'],
})
export class ContrasenaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  usuario = {
    email: '',
    password:''
    
  }

  onSubmit(){
    console.log('submit');
    console.log(this.usuario);
  }
}
