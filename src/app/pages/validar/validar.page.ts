import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-validar',
  templateUrl: './validar.page.html',
  styleUrls: ['./validar.page.scss'],
})
export class ValidarPage implements OnInit {

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
