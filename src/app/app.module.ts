import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { SolutionsComponent } from './pages/solutions/solutions.component';
import { AboutComponent } from './pages/about/about.component';
import { ApplicationComponent } from './pages/services/application/application.component';
import { DesignComponent } from './pages/services/design/design.component';
import { ConsultationComponent } from './pages/services/consultation/consultation.component';
import { CloudComponent } from './pages/services/cloud/cloud.component';
import { ExploreComponent } from './pages/explore/explore.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    ContactComponent,
    SolutionsComponent,
    AboutComponent,
    ApplicationComponent,
    DesignComponent,
    ConsultationComponent,
    CloudComponent,
    ExploreComponent,
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
