import { Component, OnInit,HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
 
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('document:mousewheel', ['$event'])
  onDocumentMousewheelEvent(event:any) {
    let element = document.querySelector('.navbar');
    if (document.body.scrollTop > 480 || document.documentElement.scrollTop > 480) {
      console.log("i scrolll ...");
      element!.classList.add('navbar-inverse');
    } else {
      element!.classList.remove('navbar-inverse');
    }
  }

 

 

}
    


