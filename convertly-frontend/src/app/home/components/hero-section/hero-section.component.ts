import { Component, OnInit } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss'],
})
export class HeroSectionComponent implements OnInit {
  faTimes = faTimes;
  file :any
  constructor() {}
  selectFile(){
    document.getElementById('file')?.click()
  }
  ngOnInit(): void {}
  fileSelected(event : any){
    console.log(event.currentTarget.files)
    this.file = event.currentTarget.files[0]
  }
}
