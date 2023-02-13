import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, Input, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { FormControl, FormBuilder } from '@angular/forms';
import { Store } from 'src/app/utils/types';
import { MatSidenav } from '@angular/material/sidenav';
import { CardStoreComponent } from 'src/app/components/card-store/card-store.component';
import { MapComponent } from 'src/app/components/map/map.component';

@Component({
  selector: 'app-layout-map',
  templateUrl: './layout-map.component.html',
  styleUrls: ['./layout-map.component.scss']
})

export class LayoutMapComponent {

  @Input() data: Store[] = [];
  @ViewChild("menu") menu!: MatSidenav;
  @ViewChild("map") map!: MapComponent;
  @ViewChildren("matCard") parentCard!: QueryList<CardStoreComponent>;
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;
  form = this._formBuilder.group({
    search: new FormControl()
  })

  configOptions!: google.maps.MapOptions;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private _formBuilder: FormBuilder,) {
    this.mobileQuery = media.matchMedia('(max-width: 769px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  zoomStore(store: Store): void {
    this.map.configOptions = {
      center: store.position,
      zoom: 18.5
    }

    if (this.mobileQuery.matches) {
      this.menu.close();
    }
  }

  changeActive(matCard: CardStoreComponent): void {
    this.parentCard.forEach(card => {
      card.active = false
      if (card.store.id = matCard.store.id) {
        matCard.active = true;
      }
    });
  }


  onScrollDown() {
    console.log('Down');

  }

}

