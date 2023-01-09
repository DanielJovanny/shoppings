import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreComponent } from './store/store.component';

const routes: Routes = [
  { 
    path: '',
    component:StoreComponent,
    loadChildren: () => 
    import('./store/store.module').then(m => m.StoreModule) 
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserPanelRoutingModule { }
