import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../photos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {
  photos;
  albumId;
  constructor(
    private photosService: PhotosService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.albumId = this.route.snapshot.params.albumId;
    this.photos = this.photosService.getPhotos(this.albumId);
    console.log(this.photos);
  }

}
