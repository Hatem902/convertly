import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from '../shared/shared.module';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';

import { HomeComponent } from './home.component';
import { FeaturesSectionComponent } from './components/features-section/features-section.component';

@NgModule({
  declarations: [HomeComponent, HeroSectionComponent, FeaturesSectionComponent],
  imports: [CommonModule, FontAwesomeModule, SharedModule],
})
export class HomeModule {}
