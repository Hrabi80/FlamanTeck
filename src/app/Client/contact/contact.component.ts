import { Component, OnInit } from '@angular/core';
import { PublicService } from 'src/app/_services/public.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import swal from 'sweetalert2';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  form! :FormGroup;
  constructor(private _service : PublicService,
              private _fb :FormBuilder) { }

  ngOnInit(): void {
    this.form = this._fb.group({
      name:  ['', [Validators.required]],
      mail:  ['', [Validators.required, Validators.email]],
      //subject:  ['', [Validators.required]],
      message:  ['', [Validators.required]],
    });
  }

  sendMessage(){
    this._service.addMessage(this.form.value)
    .subscribe((res)=>{
      console.log("is_success ?",res);
      swal.fire(
        'Merci!',
        'nous avons bien reçu votre message',
        'success'
      )
    })
  }

}
