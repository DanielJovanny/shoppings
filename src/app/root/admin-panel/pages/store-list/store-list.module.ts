import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreListRoutingModule } from './store-list-routing.module';
import { StoreListComponent } from './store-list.component';
import { MaterialModule } from 'src/app/modules/material/material.module';


@NgModule({
  declarations: [
    StoreListComponent
  ],
  imports: [
    CommonModule,
    StoreListRoutingModule,
    MaterialModule
  ]
})
export class StoreListModule { }
