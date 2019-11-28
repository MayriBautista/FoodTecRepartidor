import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { HttpService } from '../http.service';
import { HttpmayriService } from '../httpmayri.service';
import { ToastController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.page.html',
  styleUrls: ['./cuenta.page.scss'],
})
export class CuentaPage implements OnInit {

  idRepartidor: string;
  nombre: string;
  telefono: string;
  email: string;
  pass: string;

  constructor(public http: HttpmayriService, public https: HttpService,
    private storage: Storage, public toastController: ToastController, public route: Router,
    public alertCtrl: AlertController) {

    storage.get("idRepartidor").then((val) => {
      console.log('idRepartidor', val);
      this.idRepartidor = val;
      this.mostrarDatos(this.idRepartidor);
    });
  }

  async mensajeToast(mensaje: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      position: 'top',
      duration: 2000
    });
    toast.present();

  }

  mostrarDatos(idRepartidor:string){
    this.https.traerPerfil(idRepartidor).then(
      (inv) => {
        console.log(inv);
        var email = inv['email'];
        var nombre = inv['nombre'];
        var telefono = inv['telefono'];

        this.email = email;
        this.nombre = nombre;
        this.telefono = telefono;
      },
      (error) => {
        console.log("Error" + JSON.stringify(error));
        alert("Verifica que cuentes con internet");
      }
    );
  }

  ngOnInit() {
  }

}
