import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/_services/admin.service';
import { environment } from "src/environments/environment";
@Component({
  selector: 'app-realisations',
  templateUrl: './realisations.component.html',
  styleUrls: ['./realisations.component.scss']
})
export class RealisationsComponent implements OnInit {
  public _url = environment.api_url;
  data : any=[];
  constructor(private _service : AdminService) { }

  ngOnInit(): void {
    this._service.getAllRealisations()
    .subscribe((res)=>{
      this.data=res;
      console.log("my data ", this.data)
    })
  }

}
