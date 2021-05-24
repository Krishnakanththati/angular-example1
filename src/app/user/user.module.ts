import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyServiceService } from '../my-service.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [MyServiceService]
})
export class UserModule { }
