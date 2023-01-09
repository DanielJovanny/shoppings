import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserPanelRoutingModule } from './user-panel-routing.module';
import { UserPanelComponent } from './user-panel.component';
import { LayoutsModule } from '../layouts/layouts.module';


@NgModule({
  declarations: [
    UserPanelComponent
  ],
  imports: [
    CommonModule,
    UserPanelRoutingModule,
    LayoutsModule
  ]
})
export class UserPanelModule { }
