import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';

import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent, HeroSectionComponent],
  imports: [CommonModule, FontAwesomeModule],
})
export class HomeModule {}
