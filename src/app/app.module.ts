import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import { FootbarComponent } from './components/footbar/footbar.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { SolutionsComponent } from './pages/solutions/solutions.component';
import { ApplicationComponent } from './pages/application/application.component';
import { ConsultationComponent } from './pages/consultation/consultation.component';
import { CloudComponent } from './pages/cloud/cloud.component';
import { DesignComponent } from './pages/design/design.component';


@NgModule({
  declarations: [
    AppComponent,
    FootbarComponent,
    HeaderComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    SolutionsComponent,
    ApplicationComponent,
    ConsultationComponent,
    CloudComponent,
    DesignComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
