import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ExploreComponent } from './pages/explore/explore.component';
import { HomeComponent } from './pages/home/home.component';
import { ApplicationComponent } from './pages/services/application/application.component';
import { CloudComponent } from './pages/services/cloud/cloud.component';
import { ConsultationComponent } from './pages/services/consultation/consultation.component';
import { DesignComponent } from './pages/services/design/design.component';
import { SolutionsComponent } from './pages/solutions/solutions.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'solutions', component: SolutionsComponent },
  { path: 'solutions', children:[
    {path:'consultation', component:ConsultationComponent},
    {path:'applications', component:ApplicationComponent},
    {path:'cloud', component:CloudComponent},
    {path:'design', component: DesignComponent}
  ]},
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent},
  { path: 'explore', component: ExploreComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
