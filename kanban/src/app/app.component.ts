import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


apareceNatela="";

usuario = localStorage.getItem('nome');

  constructor(){
    this.getLocalstorage();
  }


  getLocalstorage(){

    let usuario = localStorage.getItem("nome");


  }

  salvarLocalstorage() {


    let usuario:string = this.apareceNatela;

    localStorage.setItem ("nome", usuario);
  }




  }



