import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoverComponent } from './components/cover/cover.component';
import { AboutComponent } from './components/about/about.component';
import { EducationComponent } from './components/education/education.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { WorkComponent } from './components/work/work.component';
const routes: Routes = [
  {
    path: 'cover',
    component: CoverComponent,
    title: 'Cover',
    data: {animationState: 'one'}
  },
  {
    path: 'about',
    component: AboutComponent,
    title: 'About Me',
    data: {animationState: 'two'}
  },
  {
    path: 'education',
    component: EducationComponent,
    title: 'Education',
    data: {animationState: 'three'}
  },
  {
    path: 'experience',
    component: ExperienceComponent,
    title: 'Work Experience',
    data: {animationState: 'four'}
  },
  {
    path: 'work',
    component: WorkComponent,
    title: 'My Work',
    data: {animationState: 'five'}
  },
  {
    path: '**',
    redirectTo: '/cover', pathMatch: 'full',
    data: {animationState: 'one'}
  },
  {
    path: '',
    component: CoverComponent,
    data: {animationState: 'one'}
  }
  // ,
  // {
  //   path: '**',
  //   component: CoverComponent,
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
