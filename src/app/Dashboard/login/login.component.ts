import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../_services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';  

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: any;
  password: any;
  error: any;
  loginForm!: FormGroup;  
  message!: string;  
  returnUrl!: string;

  
 
  constructor(private fb : FormBuilder,  
              private router : Router,
              private auth: AuthService) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({  
      userid: ['', Validators.required],  
      password: ['', Validators.required]  
   });  
    this.returnUrl = '/dashboard';  
    this.auth.logout();
    
  }
  get f() { return this.loginForm.controls; }  

  login2(e:Event) {
   

    e.preventDefault();
 
       this.auth.login2(this.username, this.password)
       .subscribe(result => {
         console.log(result);
         this.router.navigateByUrl('/');
        // sessionStorage.setItem('id', result);
         var data = sessionStorage.getItem('id');
         console.log(data);
       }, loginError => this.error = loginError.message + ' : verify  your username or password !  ');
    }



    login() {  
  
      // stop here if form is invalid  
      if (this.loginForm.invalid) {  
         return;  
      }  
      else {  
         this.auth.login2(this.f.userid.value,this.f.password.value);
        }  
      }
      jwt:any;
      myadminFn(role:string){
        if(role[5]== 'S')
        return true;
        else return false;
      }
    
      logins(){
        this.auth.login2(this.f.userid.value, this.f.password.value)
        .pipe(first())
        .subscribe(
          (result) => {

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
        
            console.log("result",result);
            if(this.myadminFn(mm)){
              this.router.navigate(['dashboard'])
            }else
            this.router.navigate(['espace_client'])},
          err => this.error = 'Could not authenticate'
        );
        /*.subscribe((response) => {
          this._service.setUserInfo({'user' : response['user']});
          this.router.navigate(['dashboard']);
    
        })*/
      }  
  /*
      logins(){
        this.auth.login2(this.f.userid.value, this.f.password.value)
        .pipe(first())
        .subscribe(
          result => this.router.navigate(['dashboard']),
          err => this.error = 'Could not authenticate'
        );
        /*.subscribe((response) => {
          this._service.setUserInfo({'user' : response['user']});
          this.router.navigate(['dashboard']);
    
        })*/
      
    
}


