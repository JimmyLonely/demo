//  Lib
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';

// VirtualAPI
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './service/in-memory-data.service';

//  Route
import { AppRoutingModule }  from './app-routing.module';

//  Services
import { StudentService } from './service/student.service';

//  Components
import { AppComponent } from './app/app.component';
import { TopComponent } from './top/top.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { StudentComponent } from './student/student.component';
import { StudentsComponent } from './students/students.component';
import { PageNotFoundComponent } from './404/404.component'

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  declarations: [
    AppComponent,
    TopComponent,
    AboutComponent,
    ContactComponent,
    StudentComponent,
    StudentsComponent,
    PageNotFoundComponent
  ],
  providers: [
    StudentService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
