import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AdminService } from 'src/app/_services/admin.service';
import { CompressImageService } from 'src/app/_services/compress-image.service';
import { HttpEventType } from '@angular/common/http';
import { take } from 'rxjs/operators';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-add-realisation',
  templateUrl: './add-realisation.component.html',
  styleUrls: ['./add-realisation.component.scss']
})
export class AddRealisationComponent implements OnInit {
  form!: FormGroup;
  SelectedIMG!:File;
  uploadResponse:any = { status: '', message: '', filePath: '' };
  error!: string;
  constructor(private _service : AdminService,
              private  _fb: FormBuilder,
              private compress_service : CompressImageService) { }

  ngOnInit(): void {

    this.form = this._fb.group({
      title:  ['', [Validators.required, Validators.minLength(3)]],
      type:  ['', [Validators.required, ]],
      domaine: [''],
      client: [''],
      description:  ['', [Validators.required, Validators.minLength(10)]],
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

  addPortfolio(){
    const uploadData = new FormData();
    uploadData.append('title', this.form.get('title')!.value);
    uploadData.append('type', this.form.get('type')!.value);
    uploadData.append('domaine', this.form.get('domaine')!.value);
    uploadData.append('client', this.form.get('client')!.value);
    uploadData.append('photo', this.form.get('photo')!.value);
    uploadData.append('description', this.form.get('description')!.value);

    this._service.AddRealisation(uploadData).subscribe(
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
          'Une réalisation est ajoutée à votre portfolio !',
          'success'
        );
      }, 3500);
  }

}
