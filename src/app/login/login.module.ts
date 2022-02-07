import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoginRoutingModule } from './login-routing.module';
import { CustomFormsModule } from 'ngx-custom-validators';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    FontAwesomeModule,
    LoginRoutingModule,
    CustomFormsModule,
  ],
})
export class LoginModule {}
