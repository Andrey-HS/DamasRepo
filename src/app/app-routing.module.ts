import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SendEmailComponent } from './auth/send-email/send-email.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () => import('./main/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./auth/login/module/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./auth/register/module/register.module').then((m) => m.RegisterModule),
  },
  {
    path: 'instructions',
    loadChildren: () =>
      import('./main/instructions/module/instructions.module').then((m) => m.InstructionsModule),
  },
  {
    path: 'board',
    loadChildren: () =>
      import('./main/board/module/board.module').then((m) => m.BoardModule),
  },
  {
    path: 'languages',
    loadChildren: () =>
      import('./main/languages/module/languages.module').then((m) => m.LanguagesModule),
  },
  {
    path: 'verification-email',
    component: SendEmailComponent,
  },
  {
    path: 'forgot-password',
    loadChildren: () =>
      import('./auth/forgot-password/forgot-password.module').then(
        (m) => m.ForgotPasswordModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
