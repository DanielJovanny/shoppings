import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreRoutingModule } from './store-routing.module';
import { StoreComponent } from './store.component';
import { LayoutsModule } from 'src/app/layouts/layouts.module';
import { MaterialModule } from 'src/app/modules/material/material.module';


@NgModule({
  declarations: [
    StoreComponent
  ],
  imports: [
    CommonModule,
    StoreRoutingModule,
    MaterialModule,
    LayoutsModule
  ]
})
export class StoreModule { }
