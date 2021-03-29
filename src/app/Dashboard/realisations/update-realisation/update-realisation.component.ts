import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/app/_services/admin.service';
import { FormControl, FormBuilder , FormGroup } from '@angular/forms';
import swal from 'sweetalert2';

@Component({
  selector: 'app-update-realisation',
  templateUrl: './update-realisation.component.html',
  styleUrls: ['./update-realisation.component.scss']
})
export class UpdateRealisationComponent implements OnInit {
  id:any;
  form! : FormGroup;
  realisation : any=[];
  constructor(private route : ActivatedRoute,
              private _service : AdminService,
              private _fb : FormBuilder) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.form=this._fb.group({
        title: new FormControl(''),
        description: new FormControl(''),
        domaine: new FormControl(''),
        type: new FormControl(''),
        client: new FormControl(''),

      });


    this._service.getRealisationById(this.id)
    .subscribe((res)=>{
      console.log("PortfolioX",res);
      this.realisation = res;
    });

    
  }

  update(){
    this._service.updateRealisation(this.id,this.form.value)
    .subscribe((res)=>{
      console.log(res);
      swal.fire(
        'Mis à jour!',
        'Ce portfolio est maintenant à jour.',
        'success'
      )
    });
  }

  

}
