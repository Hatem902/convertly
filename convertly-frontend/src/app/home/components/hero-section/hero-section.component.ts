import { Component, OnInit } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss'],
})
export class HeroSectionComponent implements OnInit {
  faTimes = faTimes;

  constructor() {}

  ngOnInit(): void {}
}
