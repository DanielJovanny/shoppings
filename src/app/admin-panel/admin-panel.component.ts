import { Component } from '@angular/core';
import { MenuList } from '../utils/types';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss']
})
export class AdminPanelComponent {
 menuOptions:MenuList[] = [
    {
      label:'Tiendas',
      icon:'store',
      routerLink:'/admin/list'
    },
    {
      label:'Añadir Tienda',
      icon:'add_business',
      routerLink:'/admin/form'
    }
 ]


}
