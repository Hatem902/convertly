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
import { Cfile } from 'src/app/shared/models/file.model';
import { FileType } from 'src/app/shared/models/fileType.enum';
import { PdfServiceService } from '../../services/pdf-service.service';

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
  files: File[] = [];
  selectedTypes : FileType[] = [];
  constructor(private pdfService : PdfServiceService) {}
  selectFiles() {
    document.getElementById('file')?.click();
  }
  ngOnInit(): void {}

  filesSelected(event: any) {
    this.files = event.currentTarget.files;
  }
  convert(){
   let i;
   for(i in this.files){
    let formData = new FormData()
    formData.append('file',this.files[i])
    if(this.files[i].type == 'application/pdf'){
      switch(this.selectedTypes[i]) {
        case FileType.DOCX:
          this.pdfService.convert_to_docx(formData).subscribe(
            (data)=>{console.log(data)},
            (err)=>{console.log(err)}
          )
          break;
        case FileType.HTML:
          this.pdfService.convert_to_html(formData).subscribe(
            (data)=>{console.log(data)},
            (err)=>{console.log(err)}
          )
          break;
        case FileType.JPG:
          this.pdfService.convert_to_images(formData).subscribe(
            (data)=>{console.log(data)},
            (err)=>{console.log(err)}
          )
          break;
        case FileType.TEXT:
          this.pdfService.extract_text(formData).subscribe(
            (data)=>{console.log(data)},
            (err)=>{console.log(err)}
          )
          break;
        default:
          break;
      }
    }
   }
  }

  changeSelected(event : FileType,index : number){
    this.selectedTypes[index]=event;
  }


}
