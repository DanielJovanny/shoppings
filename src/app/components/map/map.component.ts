import { HttpClient } from '@angular/common/http';
import { Component, Input, ViewChild } from '@angular/core';
import { GoogleMap, MapInfoWindow, MapMarker } from '@angular/google-maps';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { MapService } from 'src/app/services/map.service';
import { Store } from 'src/app/utils/types';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent {

  @Input() data!: Store[];
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
  apiLoaded!:boolean;

  constructor(private mapService:MapService) {

  }

  ngOnInit(): void {
     this.mapService.obsCurrentApiStatus.subscribe(status => {
              this.apiLoaded = status.valueOf();
     })
    
  }


  loadMarkerOptions(): void {
    this.markerOptions = {
      animation: google.maps.Animation.DROP
    }
  }

  openInfoWindow(marker: MapMarker, infoWindow: MapInfoWindow): void {
    infoWindow.open(marker);
  }

}
