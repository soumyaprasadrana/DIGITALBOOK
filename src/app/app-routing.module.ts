import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppAuthorComponent } from './app-author/app-author.component';
import { AppLandingComponent } from './app-landing/app-landing.component';
import { AppLoginComponent } from './app-login/app-login.component';
import { AppReaderComponent } from './app-reader/app-reader.component';
import { AppSignupComponent } from './app-signup/app-signup.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', redirectTo: 'ebooks', pathMatch: 'full' },
  {
    path: 'ebooks',
    component: AppLandingComponent,
    data: { title: 'Digital Books' },
  },
  {
    path: 'ebooks/login',
    component: AppLoginComponent,
    data: { title: 'Login' },
  },
  {
    path: 'ebooks/signup',
    component: AppSignupComponent,
    data: { title: 'Login' },
  },
  {
    path: 'ebooks/reader',
    component: AppReaderComponent,
    data: { title: 'Login' },
  },
  {
    path: 'ebooks/author',
    component: AppAuthorComponent,
    data: { title: 'Login' },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
