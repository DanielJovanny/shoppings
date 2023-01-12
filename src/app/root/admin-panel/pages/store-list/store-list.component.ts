import { Component } from '@angular/core';
import { dataStores } from 'src/app/data/stores';
import { Store } from 'src/app/utils/types';


@Component({
  selector: 'app-store-list',
  templateUrl: './store-list.component.html',
  styleUrls: ['./store-list.component.scss']
})
export class StoreListComponent {
  displayedColumns: string[] = ['name', 'location','status'];
  dataSource:Store[] = dataStores;


}
