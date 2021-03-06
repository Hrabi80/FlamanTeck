import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/_services/admin.service';
import { environment } from "src/environments/environment";
import swal from 'sweetalert2';
@Component({
  selector: 'app-realisations',
  templateUrl: './realisations.component.html',
  styleUrls: ['./realisations.component.scss']
})
export class RealisationsComponent implements OnInit {
  public _url = environment.api_url;
  data : any=[];
  constructor(private _service : AdminService) { }

  ngOnInit(): void {
    this._service.getAllRealisations()
    .subscribe((res)=>{
      this.data=res;
      console.log("my data ", this.data)
    })
  }


  delete(id:any){
    swal.fire({
     // type:'warning',
      title: 'Vous etes sur de supprimer ce Portfolio ?',
      text: 'Tout les informations à propos ce portfolio vont etre supprimées !',
      showCancelButton: true,
      confirmButtonColor: '#049F0C',
      cancelButtonColor:'#ff0000',
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it',
    }).then((res) => {
      if (res.value) {
        this._service.deleteRealisation(id).subscribe(
          data => {
            console.log(data);
            swal.fire(
              'Deleted!',
              'Ce portfolio est supprimé.',
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
