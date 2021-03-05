import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/app/_services/admin.service';
import { FormControl, FormBuilder , FormGroup } from '@angular/forms';
import swal from 'sweetalert2';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  id:any;
  form! : FormGroup;
  service : any=[];
  constructor(private route : ActivatedRoute,
              private _service : AdminService,
              private _fb : FormBuilder
              ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.form=this._fb.group({
       name: new FormControl(''),
       description: new FormControl(''),
       icon: new FormBuilder,
     });


     this._service.getServiceById(this.id)
    .subscribe((res)=>{
      console.log("serviceX",res);
      this.service = res;
    });
  }

  update(){
    this._service.updateService(this.id,this.form.value)
    .subscribe((res)=>{
      console.log(res);
      swal.fire(
        'Mis à jour!',
        'Ce service est maintenant ajour.',
        'success'
      )
    });
  }

}
