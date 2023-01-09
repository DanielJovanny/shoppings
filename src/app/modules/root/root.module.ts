import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//Forms
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [],
  imports: [
    MatMenuModule,
    CommonModule,
  ],
  exports:[
    MatMenuModule,
    FormsModule,ReactiveFormsModule,
  ]
})
export class RootModule { }
