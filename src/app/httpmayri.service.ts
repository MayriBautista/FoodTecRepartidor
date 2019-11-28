import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpmayriService {
  
  
  //url: String = "https://itd-foodtec.000webhostapp.com/foodtec/";
  url:String = "http://127.0.0.1:8000/";
  constructor(public http:HttpClient) { }
  }