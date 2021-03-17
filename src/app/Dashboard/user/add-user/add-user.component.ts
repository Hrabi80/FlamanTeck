import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AdminService } from 'src/app/_services/admin.service';
import { CompressImageService } from 'src/app/_services/compress-image.service';
import { HttpEventType } from '@angular/common/http';
import { take } from 'rxjs/operators';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  form!: FormGroup;
  SelectedIMG!:File;
  uploadResponse:any = { status: '', message: '', filePath: '' };
  error!: string;
  constructor(private _service : AdminService,
    private  _fb: FormBuilder,
    private compress_service : CompressImageService) { }

  ngOnInit(): void {
    this.form = this._fb.group({
      username:  ['', [Validators.required, Validators.minLength(3)]],
      email:  ['', [Validators.required, ]],
      password: ['', [Validators.required, ]],
      tel: [''],
      lient:  [''],
      photo: ['']
    });
  }
  compressMyImage(target:any){
    var compressedImageReturn;
    this.compress_service.compress(target)
    .pipe(take(1))
    .subscribe(compressedImage => {
      console.log(`Image size after compressed: ${compressedImage.size} bytes.`);
      console.log(compressedImage);
      compressedImageReturn = compressedImage; 
    });
    return compressedImageReturn;
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

  addUser(){
    const uploadData = new FormData();
    uploadData.append('username', this.form.get('username')!.value);
    uploadData.append('email', this.form.get('email')!.value);
    uploadData.append('password', this.form.get('password')!.value);
    uploadData.append('tel', this.form.get('tel')!.value);
    uploadData.append('photo', this.form.get('photo')!.value);
    uploadData.append('lient', this.form.get('lient')!.value);

    this._service.AddUser(uploadData).subscribe(
       event => { if(event.type === HttpEventType.UploadProgress)
        {
            console.log('upload progress : ' + Math.round( event.loaded / event.total! )*100 +'%')
        } 
        else if(event.type === HttpEventType.Response)
        {
          console.log(event);
        }
      }
      );
      setTimeout(() => {
        Swal.fire(
          'Ajouter !',
          'Un client est ajoutée à la base des données !',
          'success'
        );
      }, 3500);
  }

}
