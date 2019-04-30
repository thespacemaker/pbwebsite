<template>
  <div id="face">
    <section>
      <v-parallax src="https://www.colairbeautylounge.com/wp-content/uploads/2017/10/c700x420.jpg" height="500">
        <v-layout
          column
          align-center
          justify-center
          class="white--text"
          >
          <h1 class="white--text mb-2 display-1 text-xs-center">Face Treatments</h1>
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
      <h2 class="text-xs-center pb-4">Categories</h2>
      <v-expansion-panel>
        <v-expansion-panel-content
          v-for="(item,i) in panels"
          :key="i"
          >
          <div slot="header">{{item.title}}</div>
          <v-parallax v-bind:src="item.src" height="200">
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
            <v-card-text><h2>{{item.sub}}</h2>{{item.text}}</v-card-text>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </section>
  </div>
</template>

<script>
export default {
  data () {
    return {
      panels: [
      { title: 'Chemical Peels', src: 'http://www.pureblissmedicalspa.com/wp-content/uploads/2016/10/chemical-peel-blog.jpg', flex: 6, sub: 'A new layer of skin', text: 'A chemical peel uses a chemical solution to improve the texture and tone of your skin by removing the damaged outer layers. Although chemical peels are used mostly on the face, they can also be used to improve the skin on your neck and hands. Sun exposure, acne or just getting older can leave your skin tone uneven, wrinkled, spotted or scarred. A chemical peel is one of the most cost-effective ways to improve the appearance of your skin. The potential result of the chemical peel depends on the type of chemical and technique used. Your physician will use the strongest chemical called phenol to penetrate down to the lower dermal layer of your skin. For this type of peel, you may need a local anesthetic and a sedative to manage any discomfort. A deep chemical peel usually involves some sort of pretreatment for up to eight weeks.' },
      { title: 'Lips', sub: ' Frame your smile with style', src: 'http://www.pureblissmedicalspa.com/wp-content/uploads/2016/10/chemical-peel-blog.jpg', flex: 6, text: 'Botox, Dysport and Xeomin are all brand names for \"Botulinum Toxin A\". Botulinum Toxin A therapy for wrinkles is an injection  designed to reduce facial expression lines by weakening / relaxing the muscles. Botulinum Toxin A therapy works best for "dynamic" lines and wrinkles, and is less effective for fine textural changes on the skin surface and for those lines present at rest. Botulinum Toxin A therapy is temporary, meaning it will have to be repeated on a regular basis to remain effective. An average response is 3-4 months of diminished muscle contraction. After a Botulinum Toxin A injection, the effect gradually begins over several days and full effect may not be seen until 14 days post injection.' },
      { title: 'L\'Avantage', sub: 'This is no salon \“facial\”', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 6, text: 'Botox, Dysport and Xeomin are all brand names for \"Botulinum Toxin A\". Botulinum Toxin A therapy for wrinkles is an injection  designed to reduce facial expression lines by weakening / relaxing the muscles. Botulinum Toxin A therapy works best for "dynamic" lines and wrinkles, and is less effective for fine textural changes on the skin surface and for those lines present at rest. Botulinum Toxin A therapy is temporary, meaning it will have to be repeated on a regular basis to remain effective. An average response is 3-4 months of diminished muscle contraction. After a Botulinum Toxin A injection, the effect gradually begins over several days and full effect may not be seen until 14 days post injection.' },
      { title: 'Botox', sub: 'Smooth lines. Lift brows. Slim jawline.', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 6, text: 'Botulinum Toxin A therapy is an injection that reduces wrinkles by relaxing the muscles that cause them. It works best before those lines become present at rest. After injection, the effect takes several days to show and lasts 3-4 months on average.' },
      { title: 'Micro-Needling', sub: 'Build collagen, banish acne & lighten spots.', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 6, text: 'Botox, Dysport and Xeomin are all brand names for \"Botulinum Toxin A\". Botulinum Toxin A therapy for wrinkles is an injection  designed to reduce facial expression lines by weakening / relaxing the muscles. Botulinum Toxin A therapy works best for "dynamic" lines and wrinkles, and is less effective for fine textural changes on the skin surface and for those lines present at rest. Botulinum Toxin A therapy is temporary, meaning it will have to be repeated on a regular basis to remain effective. An average response is 3-4 months of diminished muscle contraction. After a Botulinum Toxin A injection, the effect gradually begins over several days and full effect may not be seen until 14 days post injection.' },
      { title: 'PDO Threads', sub: 'Lift, tighten and smooth', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 6, text: 'Botox, Dysport and Xeomin are all brand names for \"Botulinum Toxin A\". Botulinum Toxin A therapy for wrinkles is an injection  designed to reduce facial expression lines by weakening / relaxing the muscles. Botulinum Toxin A therapy works best for "dynamic" lines and wrinkles, and is less effective for fine textural changes on the skin surface and for those lines present at rest. Botulinum Toxin A therapy is temporary, meaning it will have to be repeated on a regular basis to remain effective. An average response is 3-4 months of diminished muscle contraction. After a Botulinum Toxin A injection, the effect gradually begins over several days and full effect may not be seen until 14 days post injection.' },
      { title: 'PRP', sub: 'Harness the healing of your own cells', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 6, text: 'Botox, Dysport and Xeomin are all brand names for \"Botulinum Toxin A\". Botulinum Toxin A therapy for wrinkles is an injection  designed to reduce facial expression lines by weakening / relaxing the muscles. Botulinum Toxin A therapy works best for "dynamic" lines and wrinkles, and is less effective for fine textural changes on the skin surface and for those lines present at rest. Botulinum Toxin A therapy is temporary, meaning it will have to be repeated on a regular basis to remain effective. An average response is 3-4 months of diminished muscle contraction. After a Botulinum Toxin A injection, the effect gradually begins over several days and full effect may not be seen until 14 days post injection.' }
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
