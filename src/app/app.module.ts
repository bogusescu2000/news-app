import { NgModule, Pipe } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LastnewsComponent } from './details/lastnews.component';

import { HttpClientModule } from '@angular/common/http';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { NgxSpinnerModule } from "ngx-spinner";

import { NgxPaginationModule } from 'ngx-pagination';
import { EscapeHtmlPipe, SafeUrlPipe } from './keep-html.pipe';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LastnewsComponent,
    EscapeHtmlPipe,
    SafeUrlPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ScrollingModule,
    NgxSpinnerModule,
    NgxPaginationModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
