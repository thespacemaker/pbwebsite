<template>
  <div id="hair">
    <section>
      <v-parallax src="https://www.colairbeautylounge.com/wp-content/uploads/2017/10/c700x420.jpg" height="500">
        <v-layout
          column
          align-center
          justify-center
          class="white--text"
          >
          <h1 class="white--text mb-2 display-1 text-xs-center">Hair Treatments</h1>
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
      <section>
        <v-expansion-panel>
          <v-expansion-panel-content
            v-for="(item,i) in panels"
            :key="i"
            >
            <div slot="header">{{item.title}}</div>
            <v-parallax src="https://www.colairbeautylounge.com/wp-content/uploads/2017/10/c700x420.jpg" height="200">
              <v-layout
                column
                align-center
                justify-center
                class="white--text"
                >
                <h1 class="white--text mb-2 display-1 text-xs-center">{{item.title}}</h1>
              </v-layout>
            </v-parallax>
            <v-card>
              <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-card-text>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </section>
    </v-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      panels: [
      { title: 'RX Topicals', src: 'https://www.colairbeautylounge.com/wp-content/uploads/2017/10/c700x420.jpg', flex: 6 },
      { title: 'Lab-Testing', src: '', flex: 6 },
      { title: 'Supplements', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 6 }
    ],
      items: [
        {
          src: 'https://amaramedspa.com/wp-content/uploads/2017/04/graphic-new.jpg'
        },
        {
          src: 'http://www.skinmatters2.com/images/homepage-med-spa-atlanta.jpg'
        },
        {
          src: 'https://www.naturamedspa.com/wp-content/uploads/2017/11/natura-medspa-and-laser-center-wrinkle-reduction1500x1190.jpg'
        },
        {
          src: 'https://www.colairbeautylounge.com/wp-content/uploads/2017/10/c700x420.jpg'
        }
      ]
    }
  }
}
</script>
