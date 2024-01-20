import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.css']
})
export class ImageGalleryComponent {
  imageURL = 'https://images.unsplash.com/photo-1682687218608-5e2522b04673?q=80&w=1375&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
  imageTitle = 'Main Image'

  imageTitleText: ElementRef | undefined;


  changeContent(src:string,alt:string){
    this.imageURL = src
    this.imageTitle = alt
  }
}


// Onclick Event Logic Building IDEAS

