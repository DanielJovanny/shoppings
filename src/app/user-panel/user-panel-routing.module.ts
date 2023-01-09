import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreComponent } from './store/store.component';

const routes: Routes = [
  { 
    path: 'stores',
    component:StoreComponent,
    loadChildren: () => 
    import('./store/store.module').then(m => m.StoreModule) 
  },
  { path: '',   redirectTo: '/stores', pathMatch: 'full' },
  { path: '**', redirectTo: '/stores'  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserPanelRoutingModule { }
