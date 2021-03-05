import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/_services/admin.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  data :Array<any> = [];
  constructor(private services : AdminService) { }

  ngOnInit(): void {
    this.services.getAllServices()
    .subscribe((res)=>{
      this.data= res;
      console.log(this.data);
    });
  }

}
