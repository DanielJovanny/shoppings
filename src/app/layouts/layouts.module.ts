import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseLayoutComponent } from './base-layout/base-layout.component';
import { ShareModule } from '../modules/share/share.module';
import { MaterialModule } from '../modules/material/material.module';
import { LayoutMapComponent } from './layout-map/layout-map.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';


@NgModule({
  declarations: [
    BaseLayoutComponent,
    LayoutMapComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ShareModule,
    InfiniteScrollModule
  
  ],
  exports:[
    BaseLayoutComponent,
    LayoutMapComponent
  ]
})
export class LayoutsModule { }
