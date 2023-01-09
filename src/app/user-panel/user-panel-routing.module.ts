import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreComponent } from './pages/store/store.component';

const routes: Routes = [
  { 
    path: '',
    component:StoreComponent,
    loadChildren: () => 
    import('./pages/store/store.module').then(m => m.StoreModule) 
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserPanelRoutingModule { }
