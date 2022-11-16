import { Component, OnInit } from '@angular/core';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

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
  menuOff = true;
  toggleMenu = () => (this.menuOff = !this.menuOff);
  faBars = faBars;
  faTimes = faTimes;
  constructor() {}

  ngOnInit(): void {}
}
