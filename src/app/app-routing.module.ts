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
import { LawsimplifiedMockupComponent } from './lawsimplified-mockup/lawsimplified-mockup.component';
import { LawadvisorComponent } from './lawadvisor/lawadvisor.component';
import { LegalEyeComponent } from './legal-eye/legal-eye.component';
import { A2JIllutrationsComponent } from './a2-j-illutrations/a2-j-illutrations.component';
import { A2JSocialsComponent } from './a2-j-socials/a2-j-socials.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'web-designs', component: WebDesignsComponent },
  { path: 'graphic-designs', component: GraphicDesignsComponent },
  { path: 'illustrations', component: IllustrationsComponent },
  { path: 'lawsimplified-mockup', component: LawsimplifiedMockupComponent },
  { path: 'biosync-mockup', component: BiosyncMockupComponent },
  { path: 'likha-mockup', component: LikhaMockupComponent },
  { path: 'kajas-mockup', component: KajasMockupComponent },
  { path: 'extravaganza-mockup', component: ExtravaganzaMockupComponent },
  { path: 'cs-design', component: ComputerSocietyComponent},
  { path: 'otherProjects-mockup', component: OtherProjectsComponent },
  { path: 'lawadvisor-design', component: LawadvisorComponent },
  { path: 'legalEye-icons', component: LegalEyeComponent },
  { path: 'a2j-illustrations', component: A2JIllutrationsComponent},
  { path: 'a2j-socials', component: A2JSocialsComponent },
  { path: '**', redirectTo: '/home' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}