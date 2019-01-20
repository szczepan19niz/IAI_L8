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
import { BlogItemComponent } from './components/blog-item/blog-item.component';
import { BlogItemImageComponent } from './components/blog-item-image/blog-item-image.component';
import { BlogItemDetailComponent } from './components/blog-item-detail/blog-item-detail.component';
import { BlogItemTextComponent } from './components/blog-item-text/blog-item-text.component';

import { FilterPipe } from './pipes/filter.pipe';
import { FormsModule } from '@angular/forms';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { BlogHomeComponent } from './components/blog-home/blog-home.component';
import { TextFormatDirective } from './directives/text-format.directive';


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
    component: BlogHomeComponent
  },
  {
    path: 'blog/detail/:id',
    component: BlogItemDetailComponent
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
    BlogComponent,
    BlogItemComponent,
    BlogItemImageComponent,
    BlogItemDetailComponent,
    BlogItemTextComponent,
    FilterPipe,
    SearchBarComponent,
    BlogHomeComponent,
    TextFormatDirective
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }

