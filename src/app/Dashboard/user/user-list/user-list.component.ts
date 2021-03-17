import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/_services/admin.service';
import swal from 'sweetalert2';
interface Country {
  name: string;
  flag: string;
  mail: string;
  tel: number;
}

const COUNTRIES: Country[] = [
  {
    name: 'client1',
    flag: 'f/f3/Flag_of_Russia.svg',
    mail: "client1@gmail.com",
    tel: +21627797794
  },
  {
    name: 'client2',
    flag: 'c/cf/Flag_of_Canada.svg',
    mail: "client1@gmail.com",
    tel: 21627797794
  },
  {
    name: 'client3',
    flag: 'a/a4/Flag_of_the_United_States.svg',
    mail: "client1@gmail.com",
    tel: 21627797794
  },
  {
    name: 'China',
    flag: 'f/fa/Flag_of_the_People%27s_Republic_of_China.svg',
    mail: "client1@gmail.com",
    tel: 1409517397
  }
];
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  countries = COUNTRIES;
  data :Array<any> = [];
  constructor(private _services : AdminService) { }

  ngOnInit(): void {
    this._services.getAllUsers()
    .subscribe((res)=>{
      this.data= res;
      console.log("users:",this.data);
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
         this._services.deleteService(id).subscribe(
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
