import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormStoreComponent } from './form-store.component';

const routes: Routes = [{ path: '', component: FormStoreComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormStoreRoutingModule { }
