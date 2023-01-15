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
  },
  {
    path: 'about',
    component: AboutComponent,
    title: 'About Me',
  },
  {
    path: 'education',
    component: EducationComponent,
    title: 'Education',
  },
  {
    path: 'experience',
    component: ExperienceComponent,
    title: 'Work Experience',
  },
  {
    path: 'work',
    component: WorkComponent,
    title: 'My Work',
  },
  {
    path: '**',
    redirectTo: '/cover', pathMatch: 'full'
  },
  {
    path: '',
    component: CoverComponent,
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
