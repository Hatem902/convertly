import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { NavBarComponent } from './layouts/nav-bar/nav-bar.component';
import { FooterComponent } from './layouts/footer/footer.component';

@NgModule({
  declarations: [AppComponent, NavBarComponent, FooterComponent],
  imports: [BrowserModule, AppRoutingModule, HomeModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
