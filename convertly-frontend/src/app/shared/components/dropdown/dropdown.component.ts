import { Component, Input, OnInit } from '@angular/core';
import { FilesService } from '../../services/files.service';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent implements OnInit {
  @Input() name!: string;

  allType$: any = this.filesService.getAllType();

  constructor(private filesService: FilesService) {}

  ngOnInit(): void {}

  setType() {
    var selectBox: any = document.getElementById(this.name);
    var selectedValue = selectBox?.options[selectBox.selectedIndex].value;
    this.filesService.setType(selectedValue, this.name);
  }
}
