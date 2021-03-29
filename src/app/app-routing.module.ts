import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './_guard/auth.guard';
import { SuperGuard } from './_guard/super.guard';
import { LoginComponent } from "../app/Dashboard/login/login.component";
import { StandingPageComponent } from './Client/standing-page/standing-page.component';
import { DashnavComponent } from './Dashboard/dashnav/dashnav.component';
import { ListComponent } from './Dashboard/nos-services/list/list.component';
import { UpdateComponent } from './Dashboard/nos-services/update/update.component';
import { GetMailsComponent } from './Dashboard/get-mails/get-mails.component';
import { PricingComponent } from './Client/pricing/pricing.component';
import { DevisComponent } from './Dashboard/devis/devis.component';
import { RealisationsComponent } from './Dashboard/realisations/realisations.component';
import { AddRealisationComponent } from './Dashboard/realisations/add-realisation/add-realisation.component';
import { UpdateRealisationComponent } from './Dashboard/realisations/update-realisation/update-realisation.component';
import { TestcompressComponent } from './testcompress/testcompress.component';
import { UserListComponent } from './Dashboard/user/user-list/user-list.component';
import { AddUserComponent } from './Dashboard/user/add-user/add-user.component';
import { SideCustomerComponent } from './Customer/side-customer/side-customer.component';
import { ProfileComponent } from './Customer/profile/profile.component';
import { LoginCustomerComponent } from './Customer/login-customer/login-customer.component';
import { UpdateUserComponent } from './Dashboard/user/update-user/update-user.component';
import { ListMessagesComponent } from './Dashboard/list-messages/list-messages.component';
import { AddRepportComponent } from './Dashboard/user/add-repport/add-repport.component';


const routes: Routes = [
  {path:"login", component : LoginComponent},
  {path:"", component: StandingPageComponent},
  {path:"devis", component: PricingComponent},
  {path:"test", component: TestcompressComponent},
  {path:"login", component: LoginCustomerComponent},


  {path:"espace_client", component:ProfileComponent ,   canActivate : [AuthGuard]},
  
  
  {path:"espace_client2", component: SideCustomerComponent,
    children:[
      {path:"profile",component:ProfileComponent}
    ] 
  },
  {path:"dashboard", component: DashnavComponent,
    children:[
      {path:"list_des_services", component: ListComponent},
      {path:"update_service/:id" , component:UpdateComponent},
      {path:"newsletter", component: GetMailsComponent},
      {path:"list_des_devis", component: DevisComponent},
      {path:"list_des_réalisations", component: RealisationsComponent},
      {path:"ajouter_de_réalisation", component: AddRealisationComponent},
      {path:"update_réalisation/:id", component: UpdateRealisationComponent},
      {path:"list_des_clients", component: UserListComponent},
      {path:"ajouter_un_client", component: AddUserComponent },
      {path: "mis_a_jour_client/:id", component: UpdateUserComponent},
      {path:"ajouter_rapport/:id", component: AddRepportComponent },
      {path:"boite_des_messages", component:ListMessagesComponent}


     
    ],
    canActivate : [SuperGuard]},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
