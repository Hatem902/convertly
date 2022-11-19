import { Component, OnInit } from '@angular/core';
import { faFileCirclePlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss'],
})
export class HeroSectionComponent implements OnInit {
  f = faFileCirclePlus;

  constructor() {}

  ngOnInit(): void {}
}
