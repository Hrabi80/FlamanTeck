import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HttpEventType } from '@angular/common/http';
import { take } from 'rxjs/operators';
import swal from 'sweetalert2';
import { AdminService } from 'src/app/_services/admin.service';
@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit {
  id:any;
  form!: FormGroup;
  formPassword!: FormGroup;
  SelectedIMG!:File;
  uploadResponse:any = { status: '', message: '', filePath: '' };
  error!: string;
  myuser : any=[];
  constructor(private  _fb: FormBuilder,
              private route : ActivatedRoute,
              private _service : AdminService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.form = this._fb.group({
      username:  ['', [Validators.required, Validators.minLength(3)]],
      email:  ['', [Validators.required, ]],
      password: ['', [Validators.required, ]],
      tel: [''],
      lient:  [''],
      photo: ['']
    });

    this.formPassword = this._fb.group({
      password: ['', [Validators.required, ]],
    });

    this._service.getUserById(this.id)
    .subscribe((res)=>{
      console.log("userX",res);
      this.myuser = res;
    });
  }

  onFileChanged(event:any) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      
      reader.onload = () => {
        
        this.form.get('photo')!.setValue(event.target.files[0]);
      };
      reader.readAsDataURL(event.target.files[0]);
    }
      (     event: { type: any; loaded: number; total: number; }) => { if(event.type === HttpEventType.UploadProgress)
        {
            console.log('upload progress : ' + Math.round( event.loaded / event.total )*100 +'%')
        } 
        else if(event.type === HttpEventType.Response)
        {
          console.log(event);
        }
      } 
      console.log(event);
  }

  updateUser(){
    this._service.updateUser(this.id,this.form.value).subscribe((res)=>{
      console.log(res);
      swal.fire(
        'Mis à jour!',
        'Ce client est maintenant ajour.',
        'success'
      )
    });
  }

  updatePassword(){
    this._service.updatePassword(this.id,this.formPassword.value)
    .subscribe((res)=>{
      console.log(res);
      swal.fire(
        'Mis à jour!',
        'Ce client est maintenant ajour.',
        'success'
      )
    });
 }
 
}
