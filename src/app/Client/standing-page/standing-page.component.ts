import { Component, HostListener, OnInit } from '@angular/core';
@Component({
  selector: 'app-standing-page',
  templateUrl: './standing-page.component.html',
  styleUrls: ['./standing-page.component.scss']
})
export class StandingPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  getYPosition(e: Event): number {
      console.log("scrolling ...", (e.target as Element).scrollTop)
    return (e.target as Element).scrollTop;
    
  }

}
