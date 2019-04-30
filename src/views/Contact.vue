<template>
<div class="body">
  <section>
    <v-parallax src="couple.jpg" height="300">
      <v-layout
        column
        align-center
        justify-center
        class="white--text"
        >
        <h1 class="white--text mb-2 display-1 text-xs-center">Contact</h1>
        <div class="subheading mb-3 text-xs-center">Powered by Vuetify</div>
        <v-btn
          class="blue lighten-2 mt-5"
          dark
          large
          href="/pre-made-themes"
          >
          Get Started
        </v-btn>
      </v-layout>
    </v-parallax>
  </section>
  <v-layout row wrap justify-center>
    <v-flex xs10 mx-2 my-4 text-xs-center>
      <h2 class="demo4 monteserrat text-xs-center my-4">MAP</h2>
      <p>
        <b>Telos Fitness Center</b>
      </p>
      <p>
        13701 Dallas Pkwy, Dallas, TsX 75240
      </p>
      <div class="map-responsive">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3348.5973679469307!2d-96.82490558443307!3d32.93523448320765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c20d9b2bc9f75%3A0xbfda3d114abd3bf6!2sTELOS+Fitness+Center!5e0!3m2!1sen!2sus!4v1550823076192" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
      </div>
    </v-flex>
    <v-flex mx-2 my-4 text-xs-center>
      <h2 class="text-xs-center my-4">Contact</h2>
      <v-layout justify-space-aroundd>
        <v-flex xs4>
          <p>
            <b>Email</b>
          </p>
          <p>
            info@personalbestmd.com
          </p>
        </v-flex>
        <v-flex xs4>
          <p>
            <b>Phone</b>
          </p>
          <p>
            817-823-8251
          </p>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
</div>
</template>
<style scoped>
.map-responsive{
    overflow:hidden;
    padding-bottom:56.25%;
    position:relative;
    height:0;
}
.map-responsive iframe{
    left:0;
    top:0;
    height:100%;
    width:100%;
    position:absolute;
  }

.demo4 {
        color: #3B5957;
        text-shadow: 0px 1px 0px rgba(255,255,255,.3), 0px -1px 0px rgba(0,0,0,.7);
}
.monteserrat{
    font-family: 'Montserrat', sans-serif;
  }
</style>
