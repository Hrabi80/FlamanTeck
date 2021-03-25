import { Component, OnInit ,VERSION,HostListener, Directive, ElementRef} from '@angular/core';
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
  scrolling: boolean;
  constructor(private compressImage : CompressImageService,
    private el: ElementRef,
              config: NgbCarouselConfig) { 
             // customize default values of carousels used by this component tree
            config.interval = 2000;
            config.keyboard = true;
            config.pauseOnHover = true;
            this.scrolling = false;
            }

  ngOnInit(): void {

  }





}
