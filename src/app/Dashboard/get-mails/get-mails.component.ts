import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/_services/admin.service';
import swal from 'sweetalert2';
export interface newsletter{
  id: number;
  UserMail: string;
  date: string;
}
@Component({
  selector: 'app-get-mails',
  templateUrl: './get-mails.component.html',
  styleUrls: ['./get-mails.component.scss']
})
export class GetMailsComponent implements OnInit {
  data :  Array<newsletter> = [];
  UserMail! : Array<newsletter>;
  constructor(private _service : AdminService) { }

  ngOnInit(): void {
    this._service.getAllNewsletter()
    .subscribe((res:Array<newsletter>)=>{
      this.data = res;
    });
    setTimeout(()=>{
      for(var i=0; i<this.data.length ;i++){
        this.data[i].date.substring(2);
        setTimeout(()=>{
          console.log(this.data[0].date);
        },3000)
        
      }
    },3500)
  }

  delete(id:any){
    swal.fire({
     // type:'warning',
      title: 'Vous etes sur de supprimer ce mail',
      text: 'Les emails ne seronts pas envoyer à ce mail!',
      showCancelButton: true,
      confirmButtonColor: '#049F0C',
      cancelButtonColor:'#ff0000',
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it',
    }).then((res) => {
      if (res.value) {
        this._service.deleteNewsletter(id).subscribe(
          data => {
            console.log(data);
            swal.fire(
              'Deleted!',
              'Ce service est supprimé.',
              'success'
            );
            const index = this.data.findIndex((x) => x.id ===id);
              this.data.splice(index, 1);
          });
      }else{
        swal.fire(
          'Canceled!',
          'Cette operation est annulée.',
          'success'
        )
      }
    });
  }



}
