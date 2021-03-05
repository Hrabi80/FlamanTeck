import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PublicService } from 'src/app/_services/public.service';
import swal from 'sweetalert2';

 export interface checkedOpt{
   id : number;
   value : string;
   is_checked : boolean;
 }

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})

export class PricingComponent implements OnInit {
   
  formDevis! :FormGroup;
  selectedItemsList: Array<any> = [];
  data :Array<checkedOpt> =[
    {
        id:0,
        value : "",
        is_checked : false
   },
   {
        id:0,
        value : "",
        is_checked : false
    },
    {
        id:0,
        value : "",
        is_checked : false
      },
      {
        id:0,
        value : "",
        is_checked : false
      },
      {
        id:0,
        value : "",
        is_checked : false
      },
      {
        id:0,
        value : "",
        is_checked : false    
      },
  ];
  list_checked: Array<checkedOpt> =[];
  service_list: string="";
  constructor(private services : PublicService,
              private  _fb: FormBuilder) { }

ngOnInit(): void {
    this.services.getAllServices()
    .subscribe((res)=>{
      for( var i=0; i< res.length ; i++){
        console.log("hi",res[i].id);
       this.data[i].id = res[i].id;
       this.data[i].value = res[i].name;
       this.data[i].is_checked =false;
      }
      this.list_checked.push(this.data[0]);
      this.list_checked.push(this.data[1]);
      this.list_checked.push(this.data[2]);
      this.list_checked.push(this.data[3]);
      this.list_checked.push(this.data[4]);
      this.list_checked.push(this.data[5]);
      this.formDevis = this._fb.group({
        name:  ['', [Validators.required, Validators.minLength(3)]],
        mail:  ['', [Validators.required, Validators.email]],
        tel:  ['', [Validators.required, Validators.pattern("^[0-9]*$"),Validators.minLength(8),Validators.maxLength(8)]],
       //message:  ['', [Validators.required, Validators.minLength(6)]],    
      });

    });

 }
 changeChecked(id:number){
   for(var i=0; i<6 ; i++){
    if(this.list_checked[i].id == id){
      if(this.list_checked[i].is_checked == false){
        this.list_checked[i].is_checked=true;
      }else{
        this.list_checked[i].is_checked=false;
      }
    }
   }
   console.log("did it chanched ??, ", this.list_checked);
 }



 append_list_services(){
   for(var i =0 ; i<6 ; i++){
     if(this.list_checked[i].is_checked == true){
       this.service_list = this.service_list+"-"+this.list_checked[i].value;
     }
   }
 }




send(){
  this.append_list_services();
  console.log("my list services", this.service_list);
  const uploadData = new FormData();
    uploadData.append('name', this.formDevis.get('name')!.value);
    uploadData.append('mail', this.formDevis.get('mail')!.value);
    uploadData.append('tel', this.formDevis.get('tel')!.value);
    uploadData.append('services', this.service_list);
    setTimeout(function(){ console.log(uploadData); }, 3000);


  this.services.addDevis(uploadData).subscribe((res)=>{
    console.log("is it success", res);
    swal.fire(
      'Merci!',
      'Nous allons vous contacter au plutot possible',
      'success'
    )
  });
  }
}
