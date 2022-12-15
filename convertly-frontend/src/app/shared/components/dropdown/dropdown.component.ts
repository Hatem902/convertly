import { Component, Input, OnInit } from '@angular/core';
import { FilesService } from '../../services/files.service';
@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent implements OnInit {
  @Input() name!: string;
  @Input() ctype?: string;

  allType$: any = this.filesService.getAllType();

  constructor(private filesService: FilesService) {}

  ngOnInit(): void {}
  filesExist(): boolean {
    return this.filesService.filesExist();
  }
  setType() {
    var selectBox: any = document.getElementById(this.name);
    var selectedValue = selectBox?.options[selectBox.selectedIndex].value;
    this.filesService.setType(selectedValue, this.name);
  }
}
