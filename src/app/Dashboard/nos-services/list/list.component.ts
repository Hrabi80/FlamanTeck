import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/_services/admin.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  data :Array<any> = [];
  constructor(private services : AdminService) { }

  ngOnInit(): void {
    this.services.getAllServices()
    .subscribe((res)=>{
      this.data= res;
      console.log(this.data);
    });
  }

  delete(id:any){

    swal.fire({
      // type:'warning',
       title: 'Vous etes sur de supprimer ce client?',
       text: 'Tout les coordonnées et les fichiers de ce client vont étre supprimés !',
       showCancelButton: true,
       confirmButtonColor: '#049F0C',
       cancelButtonColor:'#ff0000',
       confirmButtonText: 'Yes, delete it!',
       cancelButtonText: 'No, keep it',
     }).then((res) => {
       if (res.value) {
         this.services.deleteService(id).subscribe(
           data => {
             console.log(data);
             swal.fire(
               'Supprimé!',
               'Ce client est supprimé de la base des données.',
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
