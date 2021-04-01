import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  
  constructor() { }
  ngOnInit(): void {
    
  }
changeColor(){
  var tablero = document.getElementById("tablero");

  if(tablero.style.backgroundColor =="rgb(112, 112, 112)"){
    tablero.style.backgroundColor="rgb(189, 39, 39)";
  }else{
    tablero.style.backgroundColor="rgb(112, 112, 112)";
  }
  
  };

  changePieza1(){
    var cont = 13;
    var x = 1;
  do {
    var pieza= document.getElementById("pieza_blanca_"+x);
    if(pieza.style.color != "rgb(73, 0, 0)"){
      pieza.style.color = "rgb(73, 0, 0)"
      console.log("av3er")
    }else{
      pieza.style.color = "black"
    }
    
    x++;
    } while (x<cont);
  };

  changePieza2(){
    var cont = 13;
    var x = 1;
  do {
    var pieza= document.getElementById("pieza_negra_"+x);
    if(pieza.style.color != "red"){
      pieza.style.color = "red"
      console.log("av3er")
    }else{
      pieza.style.color = "royalblue"
    }
    
    x++;
    } while (x<cont);
  };

}