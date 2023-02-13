import { Component, ViewChild } from '@angular/core';
import { dataStores } from 'src/app/data/stores';
import { Store } from 'src/app/utils/types';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-store-list',
  templateUrl: './store-list.component.html',
  styleUrls: ['./store-list.component.scss']
})
export class StoreListComponent {
  displayedColumns: string[] = ['name', 'location', 'status'];
  dataSource!: MatTableDataSource<Store>;
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  constructor() {
    this.dataSource = new MatTableDataSource(dataStores);
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

}
