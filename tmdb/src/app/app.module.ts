import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MylistComponent } from './mylist/mylist.component';
import { HomeComponent } from './home/home.component';
import { CarouselComponent } from './carousel/carousel.component';
import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule } from '@angular/common/http';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { CardCarouselComponent } from './card-carousel/card-carousel.component';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MylistComponent,
    HomeComponent,
    CarouselComponent,
    MovieDetailComponent,
    CardCarouselComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    LayoutModule,
    HttpClientModule,
    YouTubePlayerModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
