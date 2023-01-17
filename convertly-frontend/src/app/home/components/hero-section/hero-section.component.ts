import { Component, OnInit } from '@angular/core';
import {
  faArrowRight,
  faArrowsRotate,
  faArrowsSpin,
  faCircleArrowRight,
  faDownload,
  faFileCircleCheck,
  faFileCirclePlus,
  faFileImport,
  faSpinner,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { FileResponse } from 'src/app/shared/models/fileResponse.interface';
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
  faDownload = faDownload;
  faFileCircleCheck = faFileCircleCheck;
  faCircleArrowRight = faCircleArrowRight;
  faArrowRight = faArrowRight;
  faArrowsSpin = faArrowsSpin;
  faFileDownload = faDownload;
  faSpinner = faSpinner;
  spinner: boolean = false;

  files$: any = this.filesService.getFiles();

  constructor(private filesService: FilesService) {}

  ngOnInit(): void {}
  redirect(fileName: string) {
    console.log(this.results);
    console.log(fileName);
    window.open(
      this.results.filter((result: FileResponse) => {
        return result.file_name == fileName;
      })[0].file_url
    );
  }
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
  results: FileResponse[] = [];
  convert() {
    this.spinner = true;
    let functions = this.filesService.sendFilesV2();
    functions.forEach((element: Observable<any>) => {
      element.subscribe((data) => {
        console.log(data);
        this.results.push(data);

        //file_name
        //file_url
      });
    });
  }
  fileSuccess(fileName: string): boolean {
    return this.results.filter((el) => el.file_name == fileName).length != 0;
  }
}
