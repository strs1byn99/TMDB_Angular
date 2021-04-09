import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MylistComponent } from './mylist/mylist.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'mylist', component: MylistComponent },
  { path: 'watch/:type/:id', component: MovieDetailComponent},
  { path: 'watch/:type/:id', component: MovieDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    enableTracing: false,
    scrollPositionRestoration: 'top'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
