import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  idRepartidor:string;


  //httpConexion = "https://itd-foodtec.000webhostapp.com/foodtec/";
  httpConexion = "http://127.0.0.1:8000/";
  constructor(public storage: Storage,public http:HttpClient) { 

  }

  loginR( contra:string, correo:string){
   
    var url = this.httpConexion + 'loginR/'+correo+'/'+contra;
    return new Promise((resolve, reject) => {
     this.http.get(url)
        .subscribe(data => {
          resolve(data);
         }, (err) =>{
           reject(err);    
         });
    });
   }

   traerPerfil(valor:string){
    var url = this.httpConexion + 'perfilR/'+valor;
   // console.log(url);
    return new Promise((resolve, reject) => {
     this.http.get(url)
     .subscribe(data => {
       resolve(data);
       //console.log(data);
         }, (err) =>{
           reject(err);    
         });
    });
   }
  }