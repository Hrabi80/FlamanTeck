import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './_guard/auth.guard';
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

const routes: Routes = [
  {path:"login", component : LoginComponent},
  {path:"", component: StandingPageComponent},
  {path:"devis", component: PricingComponent},
  {path:"test", component: TestcompressComponent},
  {path:"dashboard", component: DashnavComponent,
    children:[
      {path:"list_des_services", component: ListComponent},
      {path:"update_service/:id" , component:UpdateComponent},
      {path:"newsletter", component: GetMailsComponent},
      {path:"list_des_devis", component: DevisComponent},
      {path:"list_des_réalisations", component: RealisationsComponent},
      {path:"ajouter_de_réalisation", component: AddRealisationComponent},
      {path:"update_réalisation/:id", component: UpdateRealisationComponent},
      {path:"list_des_clients", component: UserListComponent}
     
    ],
   canActivate : [AuthGuard]},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
