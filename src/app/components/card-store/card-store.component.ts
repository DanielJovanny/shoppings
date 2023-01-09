import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Store } from 'src/app/utils/types';

@Component({
  selector: 'app-card-store',
  templateUrl: './card-store.component.html',
  styleUrls: ['./card-store.component.scss']
})
export class CardStoreComponent {
  @Input()
  store!: Store;
  @Input()active:boolean=false;

  @Output() changePositionStore = new EventEmitter<Store>();

  changePositionSatore(store: Store) {
    this.changePositionStore.emit(store);
  }



}
