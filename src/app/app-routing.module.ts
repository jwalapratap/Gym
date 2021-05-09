import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactComponent } from './contact/contact.component';
import { FeesComponent } from './fees/fees.component';
import { GalleryComponent } from './gallery/gallery.component';
import { GroupTrainingComponent } from './group-training/group-training.component';
import { HomeComponent } from './home/home.component';
import { PersonalTrainingComponent } from './personal-training/personal-training.component';
import { ServicesComponent } from './services/services.component';
import { StrengthComponent } from './strength/strength.component';

const routes: Routes = [

   {path: '', redirectTo : 'Home', pathMatch: 'full'},
  {
    path: 'Home', component: HomeComponent
  },
  {
    path: 'Gallery', component: GalleryComponent
  },
  {
    path: 'Fees', component: FeesComponent
  },
  {
    path: 'About-Us', component: AboutusComponent
  },
  {
    path: 'Contact' , component: ContactComponent
  },
  {
    path: 'Services',
    children: [
      {
        path: '', component: ServicesComponent
      },
      {
        path: 'Personal-Training', component: PersonalTrainingComponent
      },
      {
        path: 'Group-Training', component: GroupTrainingComponent
      },
      {
        path: 'Strength', component: StrengthComponent
      }
    ]
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
