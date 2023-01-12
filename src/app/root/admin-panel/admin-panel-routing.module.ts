import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: 'list', 
    loadChildren: () => 
    import('./pages/store-list/store-list.module').then(m => m.StoreListModule) 
  },
  { 
    path: 'form', 
    loadChildren: () => 
    import('./pages/form-store/form-store.module').then(m => m.FormStoreModule) 
  },
  { 
    path: 'details', 
    loadChildren: () => 
    import('./pages/store-details/store-details.module').then(m => m.StoreDetailsModule) 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminPanelRoutingModule { }
