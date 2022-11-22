import { Component, OnInit,} from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-docente',
  templateUrl: './docente.page.html',
  styleUrls: ['./docente.page.scss'],
})
export class DocentePage implements OnInit {

  qrCodeString='';
  scannedResult:any;
  constructor(private menuController: MenuController,
    private alertController: AlertController) { }

  ngOnInit() {
  }
  fecha:Date = new Date()
  data={
  seccion:''
  
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
  vaciar(){
    localStorage.removeItem('profesor');
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

  generaScan(){
    this.qrCodeString= this.data.seccion+'_'+ this.fecha.toString()
    
    console.log(this.qrCodeString) 
  }

  verScan(){
    this.scannedResult=this.qrCodeString;
  }
  cambioFecha( event ){
    console.log( 'ionChange', event.detail.value)
    this.fecha=event.detail.value;
    console.log(this.fecha+"__"+this.data.seccion)
    
    console.log(this.qrCodeString)

  }

  }


