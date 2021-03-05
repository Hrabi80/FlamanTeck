import { Component, OnInit } from '@angular/core';
import { PublicService } from 'src/app/_services/public.service';

@Component({
  selector: 'app-our-services',
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.scss']
})
export class OurServicesComponent implements OnInit {
  data :Array<any> = [];
  constructor(private services : PublicService) { }

  ngOnInit(): void {
    this.services.getAllServices()
    .subscribe((res)=>{
      this.data= res;
      console.log(this.data);
    });
  }

}
