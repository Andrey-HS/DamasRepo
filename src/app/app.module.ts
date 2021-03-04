import { AuthService } from './auth/services/auth.service';
import { environment } from './../environments/environment';
//defecto
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//modulos
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './auth/shared/shared.module';
import { CommonModule } from '@angular/common';

//Fire
import { AngularFireModule } from '@angular/fire';
import{AngularFireAuthModule} from '@angular/fire/auth'
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule, BUCKET } from '@angular/fire/storage';



//Componentes
import { NavbarComponent } from './shared/navbar/navbar.component';
import { AppComponent } from './app.component';
import { SendEmailComponent } from './auth/send-email/send-email.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,  
    SendEmailComponent,  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    CommonModule
    
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }