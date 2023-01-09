import { MediaMatcher } from '@angular/cdk/layout';
import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, ElementRef, Input, ViewChild, Renderer2, ViewChildren, QueryList } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { catchError, map, timeout } from 'rxjs/operators';
import { environment } from 'src/environments/environment.prod';
import { Store } from 'src/app/utils/types';
import { MapInfoWindow, MapMarker, GoogleMap } from '@angular/google-maps';
import { MatSidenav } from '@angular/material/sidenav';
import { CardStoreComponent } from 'src/app/components/card-store/card-store.component';


@Component({
  selector: 'app-layout-map',
  templateUrl: './layout-map.component.html',
  styleUrls: ['./layout-map.component.scss']
})

export class LayoutMapComponent {

  @Input() data: Store[] = [];
  @ViewChild("menu")
  menu!: MatSidenav;
  @ViewChildren("matCard")
  parentCard!: QueryList<CardStoreComponent>;
  @ViewChildren("map") map!:google.maps.Map;
  mobileQuery: MediaQueryList;
  apiMapLoaded: Observable<boolean>;
  private _mobileQueryListener: () => void;

  form = this._formBuilder.group({
    search: new FormControl()
  })

  configOptions: google.maps.MapOptions = {
    center: {
      lat: 23.272,
      lng: -104.75
    },
    zoom: 5,
    styles: [
      {
        featureType: "poi.business",
        stylers: [
          {
            "visibility": "off"
          }
        ]
      }
    ]
  }
  markerOptions!: google.maps.MarkerOptions;
  customIcon: string = 'assets/ministore.png'

  constructor(private renderer: Renderer2, changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, httpClient: HttpClient, private _formBuilder: FormBuilder,) {
    this.mobileQuery = media.matchMedia('(max-width: 769px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    this.apiMapLoaded = httpClient.jsonp('https://maps.googleapis.com/maps/api/js?key=' + environment.apiKeyMaps, 'callback')
      .pipe(
        map(() => true),
        catchError(() => of(false)),
      );
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  loadMarkerOptions(): void {
    this.markerOptions = {
      animation: google.maps.Animation.DROP
    }
  }

  openInfoWindow(marker: MapMarker, infoWindow: MapInfoWindow): void {
    infoWindow.open(marker);
  }

  zoomStore(store: Store): void {
    this.configOptions = {
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

