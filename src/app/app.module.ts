import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { JwtInterceptor } from './_helpers/jwt.interceptor';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormGroup, FormControl } from '@angular/forms';
import { ReactiveFormsModule ,FormsModule} from '@angular/forms';
//import { AngularFontAwesomeModule } from 'angular-font-awesome';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Client/utils/navbar/navbar.component';
import { FooterComponent } from './Client/utils/footer/footer.component';
import { WelcomeSectionComponent } from './Client/utils/welcome-section/welcome-section.component';
import { OurServicesComponent } from './Client/our-services/our-services.component';
import { TrashComponent } from './Client/utils/trash/trash.component';
import { PortfolioComponent } from './Client/portfolio/portfolio.component';
import { LoginComponent } from './Dashboard/login/login.component';
import { StandingPageComponent } from './Client/standing-page/standing-page.component';
import { PricingComponent } from './Client/pricing/pricing.component';
import { NewsletterComponent } from './Client/newsletter/newsletter.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { DashnavComponent } from './Dashboard/dashnav/dashnav.component';
import { DevisComponent } from './Dashboard/devis/devis.component';
import { ListComponent } from './Dashboard/nos-services/list/list.component';
import { UpdateComponent } from './Dashboard/nos-services/update/update.component';
import { GetMailsComponent } from './Dashboard/get-mails/get-mails.component';
import { RealisationsComponent } from './Dashboard/realisations/realisations.component';
import { AddRealisationComponent } from './Dashboard/realisations/add-realisation/add-realisation.component';
import { UpdateRealisationComponent } from './Dashboard/realisations/update-realisation/update-realisation.component';
import { TestcompressComponent } from './testcompress/testcompress.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserListComponent } from './Dashboard/user/user-list/user-list.component';
import { AddUserComponent } from './Dashboard/user/add-user/add-user.component';
import { SideCustomerComponent } from './Customer/side-customer/side-customer.component';
import { ProfileComponent } from './Customer/profile/profile.component';
import { LoginCustomerComponent } from './Customer/login-customer/login-customer.component';
import { UpdateUserComponent } from './Dashboard/user/update-user/update-user.component';





@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    WelcomeSectionComponent,
    OurServicesComponent,
    TrashComponent,
    PortfolioComponent,
    LoginComponent,
   // HttpClientModule,
    StandingPageComponent,
    PricingComponent,
    NewsletterComponent,
    DashnavComponent,
    DevisComponent,
    ListComponent,
    UpdateComponent,
    GetMailsComponent,
    RealisationsComponent,
    AddRealisationComponent,
    UpdateRealisationComponent,
    TestcompressComponent,
    UserListComponent,
    AddUserComponent,
    SideCustomerComponent,
    ProfileComponent,
    LoginCustomerComponent,
    UpdateUserComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,

  //  AngularFontAwesomeModule
  ],
  providers: [
    JwtInterceptor ,{
    provide: HTTP_INTERCEPTORS,
    useClass: JwtInterceptor,
    multi: true,
  },],
  bootstrap: [AppComponent]
})
export class AppModule { }
