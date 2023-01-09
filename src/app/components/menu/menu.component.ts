import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MenuList } from 'src/app/utils/types';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
   @Input() items:MenuList[] = [];
    constructor(public router:Router){
       
   }

}
