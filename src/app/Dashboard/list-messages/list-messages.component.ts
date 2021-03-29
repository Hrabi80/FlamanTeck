import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/_services/admin.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-list-messages',
  templateUrl: './list-messages.component.html',
  styleUrls: ['./list-messages.component.scss']
})
export class ListMessagesComponent implements OnInit {

  constructor(private _service : AdminService) { }
  data:any=[];
  ngOnInit(): void {
    this._service.getAllMessages()
    .subscribe((res)=>{
      this.data = res;
      console.log(this.data);
    });
  }

  delete(id:any){
    swal.fire({
     // type:'warning',
      title: 'Vous etes sur de supprimer ce message ?',
      text: 'Ce message sera supprimé de votre base des données !',
      showCancelButton: true,
      confirmButtonColor: '#049F0C',
      cancelButtonColor:'#ff0000',
      confirmButtonText: 'Oui, le supprime!',
      cancelButtonText: 'Non, laisse le !',
    }).then((res) => {
      if (res.value) {
        this._service.deleteDevis(id).subscribe(
          data => {
            console.log(data);
            swal.fire(
              'Deleted!',
              'Ce message est supprimé.',
              'success'
            );
            const index = this.data.findIndex((x: { id: any; }) => x.id ===id);
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
