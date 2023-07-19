import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { SolutionsComponent } from './pages/solutions/solutions.component';
import { ConsultationComponent } from './pages/consultation/consultation.component';
import { ApplicationComponent } from './pages/application/application.component';
import { CloudComponent } from './pages/cloud/cloud.component';
import { DesignComponent } from './pages/design/design.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'solutions', component: SolutionsComponent },
    { path: 'solution', children:[
    {path:'consultation', component:ConsultationComponent},
    {path:'application', component:ApplicationComponent},
    {path:'cloud', component:CloudComponent},
    {path:'design', component: DesignComponent}
  ]},
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent},
  // { path: 'explore', component: ExploreComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
