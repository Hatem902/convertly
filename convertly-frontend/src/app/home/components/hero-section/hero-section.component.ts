import { Component, OnInit } from '@angular/core';
import {
  faArrowRight,
  faArrowsRotate,
  faArrowsSpin,
  faCircleArrowRight,
  faFileCircleCheck,
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
  faFileCircleCheck = faFileCircleCheck;
  faCircleArrowRight = faCircleArrowRight;
  faArrowRight = faArrowRight;
  faArrowsSpin = faArrowsSpin;
  files: any = [
    { name: 'HatemLamine_FrontEndEngineer_CV_9.pdf' },
    { name: 'HatemLamine_FrontEndEngineer_CV_9.pdf' },
    { name: 'HatemLamine_FrontEndEngineer_CV_9.pdf' },
    { name: 'HatemLamine_FrontEndEngineer_CV_9.pdf' },
    { name: 'HatemLamine_FrontEndEngineer_CV_9.pdf' },
  ];
  constructor() {}
  browseFiles(id: string) {
    document.getElementById(id)?.click();
  }

  ngOnInit(): void {}
  chooseFiles(event: any) {
    this.files = event.currentTarget.files;
  }
  addFiles(event: any) {
    const newFiles = Array.from(event.currentTarget.files);
    const restOfFiles = Array.from(this.files).filter((file: any) => {
      return !newFiles.find(
        (added: any) =>
          added.name == file.name &&
          added.type == file.type &&
          added.size == file.size
        // how to test on content?
      );
    });

    this.files = [...newFiles, ...restOfFiles];
    console.log(this.files);
  }
  setType(name: any, type: string) {
    var file = this.files.find((file: any) => file.name == name);
    file.ctype = type;
  }
}
