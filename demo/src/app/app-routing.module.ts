// Lib
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { TopComponent } from './top/top.component';
import { StudentComponent } from './student/student.component';
import { StudentsComponent } from './students/students.component';
import { PageNotFoundComponent } from './404/404.component'
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

// Routes
const routes: Routes = [
  {
    path: 'about',
    component: AboutComponent
  }, {
    path: 'top',
    component: TopComponent
  }, {
    path: 'student/:id',
    component: StudentComponent
  }, {
    path: 'students',
    component: StudentsComponent
  }, {
    path: '',
    redirectTo: '/about',
    pathMatch: 'full'
  }, {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}