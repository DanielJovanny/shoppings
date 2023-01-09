import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormStoreRoutingModule } from './form-store-routing.module';
import { FormStoreComponent } from './form-store.component';


@NgModule({
  declarations: [
    FormStoreComponent
  ],
  imports: [
    CommonModule,
    FormStoreRoutingModule
  ]
})
export class FormStoreModule { }
