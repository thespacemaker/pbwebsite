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
          <h1 class="white--text mb-2 display-1 text-xs-center">Body Treatments</h1>e
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
      <v-layout justify-center row wrap>
        <v-flex xs12 class="text-xs-center py-2">
          <h1>Body Services</h1>
          <h3>This is a phrase</h3>
        </v-flex>
        <v-flex xs11>
      <v-expansion-panel class="my-2">
      <v-expansion-panel-content
        v-for="(item,i) in panels"
        :key="i"
        class="py-1"
        :src="src"
      >
        <div slot="header"><h2>{{item.title}}</h2></div>
        <v-parallax src="hair.jpg" height="200">
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
          <v-card-text><h2>{{item.sub}}</h2><p>
            Are you in love with yoga but afraid to go back due to a diagnosed spine condition?  Perhaps you have diagnosed spine pathology and want to try yoga to help improve flexibility and pain levels. Bring your MRI results and notes from your spine physician and Dr. Goodwin will examine you, review the records and use an anatomical model to explain to you which categories of yoga positions you should do, should not do, and can do with modifications.
          </p></v-card-text>
        </v-card>
      </v-expansion-panel-content>
    </v-expansion-panel>
    </v-flex>
    </v-layout>
  </section>
  </v-container>
</v-content>
  </div>
</template>

<script>
export default {
  data () {
    return {
      panels: [
      { title: 'Body Contouring', src: 'https://www.colairbeautylounge.com/wp-content/uploads/2017/10/c700x420.jpg', flex: 6, sub: "Lose the Fat. Keep the Muscle."},
      { title: 'Cellulite Treatment', src: 'hair.jpg', flex: 6, sub: "Say \“bye\” to bumpy thighs!" },
      { title: 'Scar Treatment', src: 'hair.jpg', flex: 6, sub: "Erase Old Wounds" },
      { title: 'Hands', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 6, sub: "Keep Them Young" },
      { title: 'PDO Threadlifts', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 6, sub: "Lift, Smooth, Go" },
      { title: 'Spine-Safe Yoga Consultation', src: 'wendy-12.jpg', flex: 6, sub: "Individualized medical restrictions on yoga poses", text:'Are you in love with yoga but afraid to go back due to a diagnosed spine condition?  Perhaps you have diagnosed spine pathology and want to try yoga to help improve flexibility and pain levels. Bring your MRI results and notes from your spine physician and Dr. Goodwin will examine you, review the records and use an anatomical model to explain to you which categories of yoga positions you should do, should not do, and can do with modifications.'}
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

<style>
#thick{
  font-weight: 600;
}
#fit{
  background-size: contain;
}
</style>
