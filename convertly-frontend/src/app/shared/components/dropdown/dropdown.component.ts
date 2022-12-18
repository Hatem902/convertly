import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FileType } from '../../models/fileType.enum';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit,OnChanges {

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    this.getOptions();
  }
  @Input('type') type : string = ''
  @Output('event') event : EventEmitter<FileType>=new EventEmitter();
  options : FileType[]=[]
  ngOnInit(): void {
    console.log('type : ')
    this.getOptions();
  }

  getOptions(){
    if(this.type == 'application/pdf'){
      this.options = [FileType.DOCX,FileType.TEXT,FileType.HTML,FileType.JPG]
    }else {
      this.options = [FileType.DOCX]
    }
  }

  emitSelected(event:any){
    this.event.emit(event.target.value)
  }

}
