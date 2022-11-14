import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  navItems = [
    { name: 'Convertly', isMain: true },
    { name: 'API' },
    { name: 'Formats' },
    { name: 'Pricing' },
  ];
  selectedItem = { name: 'Convertly' };
  selectItem = (name: string) => (this.selectedItem.name = name);

  constructor() {}

  ngOnInit(): void {}
}
