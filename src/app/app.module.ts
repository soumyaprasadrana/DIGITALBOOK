import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppLoginComponent } from './app-login/app-login.component';
import { AppSignupComponent } from './app-signup/app-signup.component';
import { AppReaderComponent } from './app-reader/app-reader.component';
import { AppAuthorComponent } from './app-author/app-author.component';
import { AppLandingComponent } from './app-landing/app-landing.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AppLoginComponent,
    AppSignupComponent,
    AppReaderComponent,
    AppAuthorComponent,
    AppLandingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
