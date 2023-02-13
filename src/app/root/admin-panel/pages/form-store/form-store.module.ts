import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormStoreRoutingModule } from './form-store-routing.module';
import { FormStoreComponent } from './form-store.component';
import { MaterialModule } from 'src/app/modules/material/material.module';
import { ShareModule } from 'src/app/modules/share/share.module';


@NgModule({
  declarations: [
    FormStoreComponent
  ],
  imports: [
    CommonModule,
    FormStoreRoutingModule,
    MaterialModule,
    ShareModule
  ]
})
export class FormStoreModule { }
