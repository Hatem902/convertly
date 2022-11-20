import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdComponent } from './components/ad/ad.component';



@NgModule({
  declarations: [
    AdComponent
  ],
  imports: [
    CommonModule
  ],
  exports : [
    AdComponent
  ]
})
export class SharedModule { }
