import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { LocationModel } from 'projects/tb-geoloc-lib/src/lib/_models/location.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent {
  @Input() layersToAdd: Array<string> = ['osm'];
  @Input() geolocatedPhotoLatLng: any;
  @Input() osmClassFilter: Array<string> = ['highway:*'];
  @Input() allowEditDrawnItems: boolean;
  @Input() marker = false;
  @Input() polyline = true;
  @Input() polygon = false;
  @Input() latLngInit: Array<number> = [46.55886030, 2.98828125];
  @Input() zoomInit = 4;
  @Input() getOsmSimpleLine = true;
  @Input() showLatLngElevationInputs = false;

  @Output() location = new EventEmitter<LocationModel>(); // object to return

  constructor() { }

  newLocation(data) {
    this.location.emit(data);
  }
}
