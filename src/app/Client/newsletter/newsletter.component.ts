import { Component, OnInit } from '@angular/core';
import { PublicService } from 'src/app/_services/public.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import swal from 'sweetalert2';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.scss']
})
export class NewsletterComponent implements OnInit {
  form! :FormGroup;
  constructor(private _service : PublicService,
              private _fb :FormBuilder) { }

  ngOnInit(): void {
    this.form = this._fb.group({
      mail:  ['', [Validators.required, Validators.email]],
    });
  }

  addNewsletter(){
    this._service.addNewsletter(this.form.value)
    .subscribe((res)=>{
      console.log("is_success ?",res);
      swal.fire(
        'Merci!',
        'Nous allons vous envoyer nos derniére nouvelle et services',
        'success'
      )
    })
    
  }
}
