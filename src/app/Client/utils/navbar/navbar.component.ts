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

  @HostListener('document:mousewheel', ['$event'])
  onDocumentMousewheelEvent2(event:any) {
    let element = document.querySelector('.navbar');
    if (document.body.scrollTop > 480 || document.documentElement.scrollTop > 480) {
      console.log("i scrolll ...");
      element!.classList.add('navbar-inverse');
    } else {
      element!.classList.remove('navbar-inverse');
    }
    /*
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
      element!.classList.add('top-nav-collapse');
    }else{
      element!.classList.remove('top-nav-collapse');
    } */
  }

  scroll1(element:any){
    console.log("before scroll",document.body.scrollTop,document.documentElement.scrollTop);
    document.body.scrollTop++;
    document.body.scrollTop = document.body.scrollTop+1;
   // window.scrollTo(yPosition)
    document.documentElement.scrollTop = document.documentElement.scrollTop+1;
    document.documentElement.scrollTop++;
    console.log("after",document.body.scrollTop,document.documentElement.scrollTop);


  }


 

 

}
    


