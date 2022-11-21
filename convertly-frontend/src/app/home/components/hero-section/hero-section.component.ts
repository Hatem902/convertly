import { Component, OnInit } from '@angular/core';
import { faFileCirclePlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss'],
})
export class HeroSectionComponent implements OnInit {
  faFileCirclePlus = faFileCirclePlus;

  file: any;
  constructor() {}
  selectFile() {
    document.getElementById('file')?.click();
  }
  ngOnInit(): void {}
  fileSelected(event: any) {
    console.log(event.currentTarget.files);
    this.file = event.currentTarget.files[0];
  }
  /* files: any;
  constructor() {}
  selectFiles() {
    document.getElementById('files')?.click();
  }
  ngOnInit(): void {}
  filesSelected(event: any) {
    console.log(event.currentTarget.files);
    this.files = event.currentTarget.files[0];
  } */
}
