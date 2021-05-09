import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PersonalTrainingComponent } from './personal-training/personal-training.component';
import { ServicesComponent } from './services/services.component';
import { GroupTrainingComponent } from './group-training/group-training.component';
import { StrengthComponent } from './strength/strength.component';
import { GalleryComponent } from './gallery/gallery.component';
import { FeesComponent } from './fees/fees.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    HomeComponent,
    PersonalTrainingComponent,
    ServicesComponent,
    GroupTrainingComponent,
    StrengthComponent,
    GalleryComponent,
    FeesComponent,
    AboutusComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
