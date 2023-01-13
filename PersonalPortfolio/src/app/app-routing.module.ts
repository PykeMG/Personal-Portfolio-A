import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoverComponent } from './components/cover/cover.component';
import { AboutComponent } from './components/about/about.component';
import { EducationComponent } from './components/education/education.component';
const routes: Routes = [
  {
    path: '',
    component: CoverComponent,
  },
  {
    path: 'cover',
    component: CoverComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'education',
    component: EducationComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
