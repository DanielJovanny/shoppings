import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from '../../components/menu/menu.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { CardStoreComponent } from '../../components/card-store/card-store.component';



@NgModule({
  declarations: [
    MenuComponent,
    CardStoreComponent
  ],
  imports: [
    CommonModule,
     MaterialModule,
    RouterModule
  ],
  exports:[
    MenuComponent,
    CardStoreComponent
  ]
})
export class ShareModule { }
