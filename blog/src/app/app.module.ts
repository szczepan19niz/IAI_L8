import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ContactComponent } from './components/contact/contact.component';
import { MapComponent } from './components/map/map.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { BlogComponent } from './components/blog/blog.component';



const appRoutes: Routes = [
  {
	  path: '',
	  component: HomeComponent
  },
  {
	  path: 'contact',
	  component: ContactComponent
  },
  {
    path: 'map',
    component: MapComponent
  },
  {
    path: 'quiz',
    component: QuizComponent
  },
  {
    path: 'blog',
    component: BlogComponent
  },
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    ContactComponent,
    MapComponent,
    QuizComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }

