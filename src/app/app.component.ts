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
  @Input() osmClassFilter: Array<string> = [];
  @Input() allowEditDrawnItems = true;
  @Input() marker = true;
  @Input() polyline = false;
  @Input() polygon = false;
  @Input() latLngInit: Array<number> = [46.55886030, 2.98828125];
  @Input() zoomInit = 4;
  @Input() getOsmSimpleLine = false;
  @Input() showLatLngElevationInputs = false;
  testLatLngData: any;
  layers = ['osm', 'google hybrid', 'brgm', 'opentopomap'];
  mapQuestApiKey = 'ApIFfQWsb8jW6bkYDD2i0Sq5BD9moJ3l';
  _reset = false;

  @Output() location = new EventEmitter<LocationModel>(); // object to return

  constructor() { }

  newLocation(data) {
    this.location.emit(data);
  }

  public reset() {
    this._reset = true;
    setTimeout(() => {
      this._reset = false;
    }, 100);
  }
}
