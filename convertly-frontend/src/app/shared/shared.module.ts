import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { BitsToKbsPipe } from './pipes/bits-to-kbs.pipe';

@NgModule({
  declarations: [BitsToKbsPipe, DropdownComponent],
  imports: [CommonModule],
  exports: [BitsToKbsPipe, DropdownComponent],
})
export class SharedModule {}
