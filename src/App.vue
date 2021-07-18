<template>
  <v-app>
    <v-app-bar
      app
      color="nycTaxi"
      dark
    >
      <v-img
        class="shrink"
        :src="require('@/assets/nyc_taxi_logo.png')"
        transition="scale-transition"
        width="150"
      />
      <v-spacer></v-spacer>
    </v-app-bar>

    <div class="cct-logo">
      <svg class="cct-rect" xmlns="http://www.w3.org/2000/svg">
        <g class="cct-rect-path nycTaxi--text" xmlns="http://www.w3.org/2000/svg" transform="matrix(1.17988,0,0,1.17988,595.30573,-227.26453)" id="g1919">
          <path d="m -322.38878,422.04401 c 0,27.7265 -22.47676,50.20326 -50.20326,50.20326 -27.7265,0 -50.20326,-22.47676 -50.20326,-50.20326 0,-27.72649 22.47676,-50.20326 50.20326,-50.20326 27.7265,0 50.20326,22.47677 50.20326,50.20326 z" style="fill:currentColor;fill-opacity:.6;fill-rule:nonzero;stroke:none" id="path25345" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" inkscape:connector-curvature="0" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" sodipodi:nodetypes="csssc"/>
          <path d="m -212.43163,230.32142 c 2.67342,-3.09507 5.71987,-5.75492 11.34279,-5.40889 l 197.100206,0 112.228744,97.53426 c 1.33193,2.81513 2.0059,4.97229 2.34382,6.79341 l 12.32434,83.23189 c -2.24353,4.86804 -4.88297,9.02345 -9.59029,9.45667 l -28.015139,0 c 0,-83.03197 -122.75209,-83.20155 -122.75209,0 l -273.004101,0 c 0,-82.70991 -123.68626,-83.02726 -123.68626,0 l -27.39416,0 c -2.91395,-1.36302 -5.53563,-0.0955 -9.3857,-9.88359 l 6.40668,-64.46299 c 1.98734,-5.55663 4.466,-7.67397 6.93908,-9.83035 l 163.9639,-26.10089 z" style="fill:currentColor;fill-opacity:1;fill-rule:evenodd;stroke:none" id="path24454" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" inkscape:connector-curvature="0" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" sodipodi:nodetypes="ccccccccccccccccc"/>
          <path d="m 73.613331,422.0229 c 0,27.7265 -22.47676,50.20326 -50.20326,50.20326 -27.7264997,0 -50.20326,-22.47676 -50.20326,-50.20326 0,-27.72649 22.4767603,-50.20326 50.20326,-50.20326 27.7265,0 50.20326,22.47677 50.20326,50.20326 z" style="fill:currentColor;fill-opacity:.6;fill-rule:nonzero;stroke:none" id="path25343" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" inkscape:connector-curvature="0" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" sodipodi:nodetypes="csssc"/>
          <path d="M 27.199643,305.12148 -22.947989,252.9107 c -1.36397,-1.15913 -2.43673,-2.75506 -4.80761,-2.40381 l -75.242281,0 0,73.11573 137.283533,0 c 7.29833,-1.45538 -2.30567,-11.30195 -7.08601,-18.50114 z" style="fill:#ffffff;fill-opacity:1;fill-rule:evenodd;stroke:none" id="path26236" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" inkscape:connector-curvature="0" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" sodipodi:nodetypes="ccccccc"/>
          <path d="m -265.34803,312.59455 57.10559,-59.6945 c 1.36397,-1.15912 2.43673,-2.75505 4.80761,-2.4038 l 80.44888,0 0,73.11574 -137.75478,0 c -6.40563,-2.52663 -7.2724,-6.35652 -4.6073,-11.01744 z" style="fill:#ffffff;fill-opacity:1;fill-rule:evenodd;stroke:none" id="path25349" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" inkscape:connector-curvature="0" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" sodipodi:nodetypes="ccccccc"/>
        </g>
      </svg>
    </div>
    <v-main>
      <div class="root">
        <div class="container">

          <div class="text-center slide-y-after">
            <router-view />
          </div>
        </div>
      </div>

    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>

<style lang="scss" scoped>

.root {
  height: 100%;
}

@keyframes cct-dot {
  from { transform: scale(100);}
  to { transform: scale(1);}
}

@keyframes dashdraw {
   0% {
     transform: translateX(100%);
   }
   100% {
     transform: translateX(-100%);
   }
}

@keyframes slide-y-after {
  from {
    transform: translateY(100px);
    opacity: 0;
  }
  to {
    opacity: 1;
    transform: translateY(0%)
  }
}

.slide-y-after {
  animation: .6s slide-y-after forwards;
  animation-delay: 1s;
  opacity: 0;
}

.cct-logo {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  overflow: visible;
  width: 100vw;
  height: 100vh;
}

.cct-rect {
  height: 40%;
  width: 100%;
  overflow: visible;
  animation: dashdraw 2s forwards;
  transform: translateX(100%);
  position: absolute;
  z-index: 100;
}

</style>

