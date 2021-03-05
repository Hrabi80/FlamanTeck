import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { PublicService } from 'src/app/_services/public.service';
import { environment } from "src/environments/environment";

export interface portImg{
  id:number;
  image: string;
}

export interface portfolio{
  id:number;
  title: string;
  type: string;
  domaine: string;
  photo: string;
}
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio2.component.html',
  styleUrls: ['./portfolio2.component.scss']
})
export class PortfolioComponent implements OnInit {
  private _url = environment.api_url + '/images/houses/';
  closeResult = '';
  data:Array<portfolio> =[];
  portfolio_info : portfolio={
    id:1,
    title:"default title",
    type:"site vitrine",
    domaine:"www.domaine-fr.com",
    photo:"this.data[0].title",
  }
  constructor(private modalService: NgbModal,
              private _service : PublicService) { }

  ngOnInit(): void {
    this._service.getAllRealisations().subscribe((res:Array<portfolio>)=>{
      this.data =res;
      for(var i =0; i<this.data.length;i++){
        var name = this.data[i].photo;
        this.data[i].photo= this._url+name;
      }
      console.log("image data",this.data);
    })
  }


  open(content:any,id:number) {
    this.portfolioDetails(id);
    this.modalService.open(content,{ size: 'xl' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  portfolioDetails(id:number){
    this._service.getRealisationById(id).subscribe((res)=>{
      this.portfolio_info=res;
        var name = this.portfolio_info.photo;
        console.log("name",name);
        this.portfolio_info.photo= this._url+name;
    
    })
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}
