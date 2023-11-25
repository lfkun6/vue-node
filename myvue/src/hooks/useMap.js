import {Map,View} from 'ol';
import * as olProj from 'ol/proj'
import  TileLayer from 'ol/layer/Tile'
import XYZ from 'ol/source/XYZ';

import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';

import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import {circular} from 'ol/geom/Polygon';

import Control from 'ol/control/Control';
import { watchPostEffect } from 'vue';


const locate = document.createElement('div');
locate.className = 'ol-control ol-unselectable locate';
locate.innerHTML = '<button title="Locate me">◎</button>';


var gaoDeMapLayer = new TileLayer({
    source : new XYZ({
        url: "https://wprd0{1-4}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&style=7&x={x}&y={y}&z={z}",
    })
});
const source = new VectorSource();
const layer = new VectorLayer({
  source: source,
});




  


export default function(){
    const gaoDeMap = new Map({
        layers : [
            gaoDeMapLayer,
            layer
        ],
        //108.945951, 34.465262
        view : new View({
            center : olProj.fromLonLat([118.3061,32.274]),
            zoom : 8,
            minZoom : 0,
            maxZoom : 13,
        }),
        target : 'map'
    })
    locate.addEventListener('click', function () {
        navigator.geolocation.watchPosition(
            function (pos) {
              const coords = [pos.coords.longitude, pos.coords.latitude];
              console.log(pos.coords.latitude);
              console.log(pos.coords.longitude);
              const accuracy = circular(coords, pos.coords.accuracy);
              source.clear(true);
              source.addFeatures([
                new Feature(
                  accuracy.transform('EPSG:4326', gaoDeMap.getView().getProjection())
                ),
                new Feature(new Point(olProj.fromLonLat(coords))),
              ]);
            },
            function (error) {
              //alert(`ERROR: ${error.message}`);
            },
            {
              enableHighAccuracy: true,
            }
          );
        if (!source.isEmpty()) {
          gaoDeMap.getView().fit(source.getExtent(), {  
            maxZoom: 2,
            duration: 500,
          });
        }
      });
    gaoDeMap.addControl(
        new Control({
          element: locate,
        })
      );
      //4326
      
    return {gaoDeMap}
}
