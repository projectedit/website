import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
//   { path: 'solutions', component: SolutionsComponent },
//   { path: 'solutions', children:[
//     {path:'consultation', component:ConsultationComponent},
//     {path:'applications', component:ApplicationComponent},
//     {path:'cloud', component:CloudComponent},
//     {path:'design', component: DesignComponent}
//   ]},
//   { path: 'about', component: AboutComponent },
//   { path: 'contact', component: ContactComponent},
//   { path: 'explore', component: ExploreComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
