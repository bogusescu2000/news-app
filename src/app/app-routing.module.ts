import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LastnewsComponent } from './details/lastnews.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  { path: '**', component: LastnewsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  
  exports: [RouterModule]
})
export class AppRoutingModule { }
