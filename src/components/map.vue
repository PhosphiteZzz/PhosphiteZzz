<template>
  <div id="map" ref="rootmap"></div>
</template>
<script>
import "ol/ol.css";
import { Map, View } from "ol";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import XYZ from "ol/source/XYZ";
import TileArcGISRest from "ol/source/TileArcGISRest";


export default {
  data() {
    return {
      map: null,
    };
  },
  mounted() {
    this.initMap();
  },
  methods: {
    initMap() {
      var mapcontainer = this.$refs.rootmap;
      this.map = new Map({
        target: "map",
        layers: [
          new TileLayer({
            source: new OSM(),
          }),
        ],
        view: new View({
          projection: "EPSG:4326", //使用这个坐标系
          center: [119.223471,34.640394], //连云港
          zoom: 15,
        }),
      });
    },
  },
};
</script>
<style lang="less" scoped>
#map {
  height: 100%;
}

.ol-attribution,
.ol-zoom {
  display: none;
}
</style>
