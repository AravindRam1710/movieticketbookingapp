import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieListComponent } from './movielist/movie-list/movie-list.component';
import {TickeBookingComponent} from './ticketbooking/ticke-booking/ticke-booking.component';

const routes: Routes = [
  {path:'',component:TickeBookingComponent},
  {path:'newarrivals',component:MovieListComponent},
  {path:'booking',component:TickeBookingComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
