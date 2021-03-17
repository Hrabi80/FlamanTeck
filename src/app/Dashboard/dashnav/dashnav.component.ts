import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashnav',
  templateUrl: './dashnav.component.html',
  styleUrls: ['./dashnav.component.scss']
})
export class DashnavComponent implements OnInit {
  jwt:any;
  constructor() { }

  ngOnInit(): void {
   
     this.jwt = localStorage.getItem('currentUser');
    let jwtData = this.jwt.split('.')[1]
    let decodedJwtJsonData = window.atob(jwtData)
    let decodedJwtData = JSON.parse(decodedJwtJsonData)

    let isAdmin = decodedJwtData.roles;
   


    
    console.log('jwtData: ' + jwtData)
    console.log('decodedJwtJsonData: ' + decodedJwtJsonData)
    console.log('decodedJwtData: ' + decodedJwtData)
    console.log('Is admin: ' + isAdmin);
    const mm = isAdmin.toString();
    console.log('Role test ,', this.myadminFn(mm));

   
  }

  myadminFn(role:string){
    if(role[5]== 'S')
    return true;
    else return false;
  }

}
