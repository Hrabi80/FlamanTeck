import { Component, OnInit ,VERSION} from '@angular/core';
import { take } from 'rxjs/operators';
import { CompressImageService } from '../_services/compress-image.service';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-testcompress',
  templateUrl: './testcompress.component.html',
  styleUrls: ['./testcompress.component.scss'],
  providers: [NgbCarouselConfig] 
})
export class TestcompressComponent implements OnInit {

  constructor(private compressImage : CompressImageService,
              config: NgbCarouselConfig) { 
             // customize default values of carousels used by this component tree
            config.interval = 2000;
            config.keyboard = true;
            config.pauseOnHover = true;
            }

  ngOnInit(): void {

  }

  name = 'Angular ' + VERSION.major;
  
  images = [700, 800, 807].map((n) => `https://picsum.photos/id/${n}/900/500`);



  upload(event:any) {
    let image: File = event.target.files[0]
    console.log(`Image size before compressed: ${image.size} bytes.`)

    this.compressImage.compress(image)
      .pipe(take(1))
      .subscribe(compressedImage => {
        console.log(`Image size after compressed: ${compressedImage.size} bytes.`);
        console.log(compressedImage);
        // now you can do upload the compressed image 
      })
  }




}
