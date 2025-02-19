import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { WebDesignsComponent } from './web-designs/web-designs.component';
import { GraphicDesignsComponent } from './graphic-designs/graphic-designs.component';
import { IllustrationsComponent } from './illustrations/illustrations.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BiosyncMockupComponent } from './biosync-mockup/biosync-mockup.component';
import { LikhaMockupComponent } from './likha-mockup/likha-mockup.component';
import { KajasMockupComponent } from './kajas-mockup/kajas-mockup.component';
import { ExtravaganzaMockupComponent } from './extravaganza-mockup/extravaganza-mockup.component';
import { ComputerSocietyComponent } from './computer-society/computer-society.component';
import { OtherProjectsComponent } from './other-projects/other-projects.component';
import { DreamingComponent } from './dreaming/dreaming.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WebDesignsComponent,
    GraphicDesignsComponent,
    IllustrationsComponent,
    NavbarComponent,
    BiosyncMockupComponent,
    LikhaMockupComponent,
    KajasMockupComponent,
    ExtravaganzaMockupComponent,
    ComputerSocietyComponent,
    OtherProjectsComponent,
    DreamingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
