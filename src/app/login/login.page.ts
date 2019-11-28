import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  correo: string; 
  contra: string;
  
  constructor( public http:HttpService, private storage: Storage, public toastController: ToastController, public route: Router) { 
   
  }

  async mensaje() {
    const toast = await this.toastController.create({
      message: 'Cuenta desactivada.',
      duration: 2000
    });
    toast.present();
  }

  async mensaje2() {
    const toast = await this.toastController.create({
      message: 'Contraseña Incorrecta.',
      duration: 2000
    });
    toast.present();
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Contraseña y/o usuario incorrecto',
      duration: 2000
    });
    toast.present();
  }

  ngOnInit() {   }
  registro(){
    this.route.navigateByUrl('/registro');
  }

  inicio() {
    console.log(this.correo+this.contra);
    this.http.loginR(this.correo,this.contra).then(
      (inv) => {
        console.log(inv);
        var id=inv['idRepartidor'];
        var pass=inv['password'];

          this.storage.set('password',pass);
          this.storage.set('idRepartidor', id);
          if(id != 0){
            if(id == -1){
              this.mensaje();
            } else {
              if(id == -2){
                this.mensaje2();
              } else {
                this.route.navigateByUrl('/home');
              }
            }
            
          } else {
            this.presentToast();
          }
      },
      (error) =>{
        console.log("Error"+JSON.stringify(error));
        alert("Verifica que cuentes con internet");
      }
    );
  }
}