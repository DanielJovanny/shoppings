import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from '../../components/menu/menu.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { CardStoreComponent } from '../../components/card-store/card-store.component';
import { MapComponent } from '../../components/map/map.component';
import { GoogleMapsModule } from '@angular/google-maps';



@NgModule({
  declarations: [
    MenuComponent,
    CardStoreComponent,
    MapComponent
  ],
  imports: [
    CommonModule,
    GoogleMapsModule,
     MaterialModule,
    RouterModule
  ],
  exports:[
    MenuComponent,
    MapComponent,
    CardStoreComponent
  ]
})
export class ShareModule { }
