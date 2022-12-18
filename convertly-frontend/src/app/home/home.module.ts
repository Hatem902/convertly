import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from '../shared/shared.module';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';

import { HomeComponent } from './home.component';
import { PdfServiceService } from './services/pdf-service.service';

@NgModule({
  declarations: [HomeComponent, HeroSectionComponent],
  imports: [CommonModule,HttpClientModule, FontAwesomeModule, SharedModule],
  providers : [PdfServiceService]
})
export class HomeModule {}
