import { Component, OnInit } from '@angular/core';
import {
  faCloudArrowUp,
  faDesktop,
  faShield,
  faStar,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-features-section',
  templateUrl: './features-section.component.html',
  styleUrls: ['./features-section.component.scss'],
})
export class FeaturesSectionComponent implements OnInit {
  faStar = faStar;

  features = [
    {
      icon: faStar,
      title: 'Fast and Easy',
      description:
        'Just choose your files, choose an output format and click "Convert Now" button. Wait a little for the process to complete. We aim to do all our conversions in under 1-2 minutes.',
    },
    {
      icon: faCloudArrowUp,
      title: 'In the cloud',
      description:
        'All conversions take place in the cloud and will not consume any capacity from your computer.',
    },
    {
      icon: faShield,
      title: 'Security guaranteed',
      description:
        'We delete uploaded files instantly and converted ones after 24 hours. No one has access to your files and privacy is 100% guaranteed.',
    },
    {
      icon: faDesktop,
      title: 'All devices supported',
      description:
        'Convertio is browser-based and works for all platforms. There is no need to download and install any software.',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
