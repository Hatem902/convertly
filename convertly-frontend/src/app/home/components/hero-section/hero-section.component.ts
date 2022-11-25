import { Component, OnInit } from '@angular/core';
import {
  faArrowsRotate,
  faFileCirclePlus,
  faFileImport,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss'],
})
export class HeroSectionComponent implements OnInit {
  faFileCirclePlus = faFileCirclePlus;
  faArrowsRotate = faArrowsRotate;
  faFileImport = faFileImport;
  faTimes = faTimes;
  files: any;
  constructor() {}
  selectFiles() {
    document.getElementById('file')?.click();
  }
  ngOnInit(): void {}
  filesSelected(event: any) {
    console.log(event.currentTarget.files);
    this.files = event.currentTarget.files;
    console.log(this.files?.name);
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
