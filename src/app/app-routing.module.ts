import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { WebDesignsComponent } from './web-designs/web-designs.component';
import { HomeComponent } from './home/home.component';
import { GraphicDesignsComponent } from './graphic-designs/graphic-designs.component';
import { IllustrationsComponent } from './illustrations/illustrations.component';
import { BiosyncMockupComponent } from './biosync-mockup/biosync-mockup.component';
import { LikhaMockupComponent } from './likha-mockup/likha-mockup.component';
import { KajasMockupComponent } from './kajas-mockup/kajas-mockup.component';
import { ExtravaganzaMockupComponent } from './extravaganza-mockup/extravaganza-mockup.component';
import { ComputerSocietyComponent } from './computer-society/computer-society.component';
import { OtherProjectsComponent } from './other-projects/other-projects.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'web-designs', component: WebDesignsComponent },
  { path: 'graphic-designs', component: GraphicDesignsComponent },
  { path: 'illustrations', component: IllustrationsComponent },
  { path: 'biosync-mockup', component: BiosyncMockupComponent },
  { path: 'likha-mockup', component: LikhaMockupComponent },
  { path: 'kajas-mockup', component: KajasMockupComponent },
  { path: 'extravaganza-mockup', component: ExtravaganzaMockupComponent },
  { path: 'cs-mockup', component: ComputerSocietyComponent},
  { path: 'otherProjects-mockup', component: OtherProjectsComponent },
  { path: '**', redirectTo: '/home' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}