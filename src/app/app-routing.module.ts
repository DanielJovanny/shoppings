import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserPanelComponent } from './user-panel/user-panel.component';

const routes: Routes = [
  { 
    path: 'stores',
    component:UserPanelComponent, 
    loadChildren: () => 
    import('./user-panel/user-panel.module').then(m => m.UserPanelModule) 
  },
  { 
    path: 'admin', 
    loadChildren: () => 
    import('./admin-panel/admin-panel.module').then(m => m.AdminPanelModule) 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
