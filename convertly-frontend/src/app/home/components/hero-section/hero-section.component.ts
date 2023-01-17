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
import { FilesService } from 'src/app/shared/services/files.service';

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

  files$: any = this.filesService.getFiles();

  constructor(private filesService: FilesService) {}

  ngOnInit(): void {}

  browseFiles(id: string) {
    document.getElementById(id)?.click();
  }
  chooseFiles(event: any) {
    this.filesService.chooseFiles(event);
  }
  addFiles(event: any) {
    this.filesService.addFiles(event);
  }
  deleteFile(name: string) {
    this.filesService.deleteFile(name);
  }
  typesAreValid(): boolean {
    return this.filesService.typesAreValid();
  }
  sendFiles(): void {
    return this.filesService.sendFilesV2();
  }
}
