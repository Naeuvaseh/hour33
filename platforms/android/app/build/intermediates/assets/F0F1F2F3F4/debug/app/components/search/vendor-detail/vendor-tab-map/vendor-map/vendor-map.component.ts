import { Component, ElementRef, ViewChild, OnInit, Input } from '@angular/core';
import { registerElement } from "nativescript-angular/element-registry";
import { Vendor } from '../../../../../interfaces/vendor.interface';
import { Theme } from '../../../../../settings';

registerElement("MapView", () => require("nativescript-google-maps-sdk").MapView);

@Component({
  selector: 'vendor-map',
  templateUrl: './components/search/vendor-detail/vendor-tab-map/vendor-map/vendor-map.component.html'
})
export class VendorMapComponent implements OnInit {
  @ViewChild("MapView") mapView: ElementRef;
  @Input() vendor: Vendor;

  public theme;
  private lat: number;
  private long: number;

  constructor() {
    this.theme = Theme;
  }

  ngOnInit(){
    this.lat = 32.1234;
    this.long = 32.12345;
  }

  onMapReady = (event) => {
    console.log("Map Ready");
  };

// ****** Maps Demo Code ****** //

//   public onMapReady = (event) => {
//     setTimeout(() => {
//         //alert(this.heatMap);
//     }, 10000);
//     var model = new MapComponent(this.page, this.httpService);
//     let mapView = event.object;
//     this.mapView = mapView;
//     //let poly = new Polygon();
//     //var pooooly = [
//     //    Position.positionFromLatLng(40.160807301464885, -83.00879538059229),
//     //    Position.positionFromLatLng(40.160501873967846, -83.00877124071116),
//     //    Position.positionFromLatLng(40.1604895748452, -83.00864517688746),
//     //    Position.positionFromLatLng(40.16081242607561, -83.00866663455963),
//     //    Position.positionFromLatLng(40.160807301464885, -83.00879538059229)
        
//     //];
//     //poly.addPoints(pooooly);
//     //poly.fillColor = new Color("#FF9800");
//     //poly.strokeColor = new Color("#007DC3");
//     //poly.strokeWidth = 2;
//     //poly.visible = true;
//     //mapView.addPolygon(poly);
//     console.log(Accuracy.high)
//     //console.log('test');
//     var marker = new mapsModule.Marker();
//     //console.log(mapView);
//     marker.title = "marker1";
//     marker.position = mapsModule.Position.positionFromLatLng(this.point1.latitude, this.point1.longitude);
//     marker.userData = { index: 1 };
//     mapView.addMarker(marker);

//     //this.addHeat();
//     var location = geolocation.getCurrentLocation({ desiredAccuracy: Accuracy.high, updateDistance: 0.1, maximumAge: 5000, timeout: 20000 }).
//         then((loc) => {
//             if (loc) {
//                 model.locations.push(loc);
//                 //alert(JSON.stringify(loc));
//                 // Writing text to the file.
//                 let tempMarker = { latitude: loc.latitude, longitude: loc.longitude, title: 'me' };
                
//                 //alert(JSON.stringify(tempMarker))
//                 this.markers.push(tempMarker);
//                 //alert(JSON.stringify(this.markers))
//                var marker2 = new mapsModule.Marker();
//                 marker2.title = "me";
//                 marker2.position = mapsModule.Position.positionFromLatLng(loc.latitude, loc.longitude);
//                 marker2.userData = { index: 1 };
//                 mapView.addMarker(marker2);
                
//                 this.markers.push(marker)
//                 //alert(this.markers)
//                 //console.dir(this.markers)
//                 //console.dir(Object.keys(mapView))
//                 //console.dir(mapView._markers)
//                 this.loader.hide();
//                 this.watchLocation(model, mapView);
//             }
//         }, function (e) {
//             console.log("Error!!!!!!!1: " + e.message);
//             this.onMapReady(event);
//         });
//     this.ready = true;
// };
}