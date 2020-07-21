import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule, PathLocationStrategy } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient,HTTP_INTERCEPTORS } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AgmCoreModule } from '@agm/core';
import { DataTablesModule } from 'angular-datatables';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ToastrModule } from 'ngx-toastr';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { RecaptchaModule, RecaptchaFormsModule } from 'ng-recaptcha';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgOptionHighlightModule } from '@ng-select/ng-option-highlight';
import { AccordionModule } from '@syncfusion/ej2-angular-navigations';
import { AppRoutingModule } from './app-routing.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { LocationStrategy,HashLocationStrategy } from '@angular/common';

//Components
import { AppComponent } from './app.component';
import { NavigationComponent } from './shared/header-navigation/navigation.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { BreadcrumbComponent } from './shared/breadcrumb/breadcrumb.component';
import { SpinnerComponent } from './shared/spinner.component';
import { FullComponent } from './layouts/full/full.component';
import { BlankComponent } from './layouts/blank/blank.component';
import { LoginComponent } from './authentication/login/login.component';
import { SignupComponent } from './authentication/signup/signup.component';
import { ForgotPasswordComponent } from './authentication/forgot-password/forgot-password.component';
import { RedirectVerificationComponent } from './shared/redirect-verification/redirect-verification.component';
import { ResetPasswordRedirectComponent } from "./shared/reset-password-redirect/reset-password-redirect.component";
import { ActivateEmailComponent } from "./shared/activate-email/activate-email.component";
//Interceptor
import { HttpRequestLoaderInterceptor } from './core/http-request-loader.interceptor';


const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
  wheelSpeed: 1,
  wheelPropagation: true,
  minScrollbarLength: 20
}; 

@NgModule({
  declarations: [
    AppComponent,
    SpinnerComponent,
    FullComponent,
    BlankComponent,
    NavigationComponent,
    BreadcrumbComponent,
    SidebarComponent,
    LoginComponent,
    SignupComponent,
    ForgotPasswordComponent,
    RedirectVerificationComponent,
    ResetPasswordRedirectComponent,
    ActivateEmailComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ToastrModule.forRoot(),
    ReactiveFormsModule,
    DataTablesModule,
    HttpClientModule,
    NgbModule,
    Ng2SearchPipeModule,
    RouterModule,
    PerfectScrollbarModule,
    NgMultiSelectDropDownModule.forRoot(),
    RecaptchaModule,  //this is the recaptcha main module
    RecaptchaFormsModule,
    NgSelectModule,
    NgOptionHighlightModule,
    AccordionModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
  {
    provide: PERFECT_SCROLLBAR_CONFIG,
    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: HttpRequestLoaderInterceptor,
    multi: true
  },
  // {
  //     provide: LocationStrategy, 
  //     useClass: HashLocationStrategy
  // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

// AOT compilation support
export function httpTranslateLoader(http: HttpClient) {

  return new TranslateHttpLoader(http);
}