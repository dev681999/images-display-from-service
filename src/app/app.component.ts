import { Component } from '@angular/core';
import { Image } from '../image';
import { RetriveImageListService } from './retrive-image-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  images: Image[];

  constructor( public service: RetriveImageListService ) {
    service.getImageList().subscribe((data) => {
      this.images = data;
      this.images.forEach(element => {
        element.imagePath = 'https://unsplash.it/500?image=' + element.id;
        if (element.author !== 'Alejandro Escamilla') {
            this.images = this.images.filter(obj => obj !== element);
        }
      });
    });
  }
}
