import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-estudiante',
  templateUrl: './estudiante.page.html',
  styleUrls: ['./estudiante.page.scss'],
})
export class EstudiantePage implements OnInit {

  constructor(private menuController: MenuController,
    private alertController: AlertController) { }

  ngOnInit() {
  }

  mostrarMenu() {
    if (localStorage.getItem('profesor')) {
      this.menuController.enable(false, 'first');
      this.menuController.enable(true, 'second');
      this.menuController.open('second');
    }
    else if (localStorage.getItem('estudiante')) {
      this.menuController.enable(false, 'second');
      this.menuController.enable(true, 'first');
      this.menuController.open('first');
    }
  }
  vaciar() {
    localStorage.removeItem('estudiante');
    this.logOut();

  }
  async logOut() {
    const alert = await this.alertController.create({
      header: '¡Hasta luego!',
      message: 'Vuelve pronto',
      buttons: ['Continuar'],

    })
    await alert.present();
    return;
  }
}
