
import { Component } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { dataStores } from 'src/app/data/stores';
import { Store } from 'src/app/utils/types';


@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent {
 form = this._formBuilder.group({
    search: new FormControl()
  })

  data:Store[]= dataStores;

  constructor( private _formBuilder:FormBuilder){

  }
}
