import { logging } from 'protractor';
import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {constructor(private router: Router) {} 
exit(){
  this.router.navigate(['/login']);
};

StartGame(){
  console.log('Test')
  this.router.navigate(['/board']);

};

Instructions(){

 this.router.navigate(['/instructions']);
};

Languages(){
 this.router.navigate(['/languages']);
};
}