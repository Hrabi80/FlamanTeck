import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/_services/admin.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-devis',
  templateUrl: './devis.component.html',
  styleUrls: ['./devis.component.scss']
})
export class DevisComponent implements OnInit {

  constructor(private _service : AdminService) { }
  data:any=[];
  ngOnInit(): void {
    this._service.getAllDevices()
    .subscribe((res)=>{
      this.data = res;
      console.log(this.data);
    });
  }

  delete(id:any){
    swal.fire({
     // type:'warning',
      title: 'Vous etes sur de supprimer ce type de service?',
      text: 'Tout les techniques relies avec ce service vont etre supprimer aussi !',
      showCancelButton: true,
      confirmButtonColor: '#049F0C',
      cancelButtonColor:'#ff0000',
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it',
    }).then((res) => {
      if (res.value) {
        this._service.deleteDevis(id).subscribe(
          data => {
            console.log(data);
            swal.fire(
              'Deleted!',
              'Ce service est supprimé.',
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
