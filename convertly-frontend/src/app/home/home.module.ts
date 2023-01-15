import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from '../shared/shared.module';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';

import { HomeComponent } from './home.component';
import { FeaturesSectionComponent } from './components/features-section/features-section.component';
import { ApiComponent } from './components/api/api.component';
import { EndpointComponent } from './components/api/endpoint/endpoint.component';

@NgModule({
  declarations: [HomeComponent, HeroSectionComponent, FeaturesSectionComponent, ApiComponent, EndpointComponent],
  imports: [CommonModule, FontAwesomeModule, SharedModule],
})
export class HomeModule {}
