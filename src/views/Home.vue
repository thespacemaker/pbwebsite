<template>
  <div id="home">
    <section>
      <v-carousel hide-delimiters class="define" hide-controls>
        <v-carousel-item
          v-for="(item,i) in items"
          :key="i"
          :src="item.src"
        >
        <v-layout row align-start justify-center fill-height mt-5 ml-3>
        <v-flex mt-2 xs12>

        </v-flex>
      </v-layout>
      </v-carousel-item>
      </v-carousel>
    </section>
    <section class="pt-3">
      <v-img src="tri.png" contain height="120px">
        <v-layout column fill-height class="lightbox">
          <v-spacer></v-spacer>
          <v-flex>
            <h2 class="text-xs-center monteserrat engrave">Combining medicine, fitness, and aethtetics to transform the lives of patients like you</h2>
          </v-flex>
        </v-layout>
      </v-img>
      <!--h4 class="text-xs-center"><small>For a full list of services <a href="/services">click here</a></small></h4-->
      <v-layout justify-center>
        <v-flex xs12 id="transparent" class="elevation-0">
          <v-card id="transparent" class="elevation-0">
            <v-container
              fluid
              grid-list-md
              >
              <v-layout row wrap>
                <v-flex
                  v-for="card in cards"
                  v-bind="{ [`xs${card.flex}`]: true }"
                  :key="card.title"
                  color="transparent"
                  >
                  <v-card :to="card.to" id="transparent" class="elevation-5 rounded">
                    <v-img
                      :src="card.src"
                      height="200px"
                      >
                        <v-layout fill-height text-xs-center align-end>
                          <v-flex xs12>
                            <h2 id="frosty"><b class="monteserrat">{{card.title}}</b></h2>
                          </v-flex>
                        </v-layout>
                    </v-img>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card>
        </v-flex>
      </v-layout>
    </section>
    <section>
      <br />
      <v-img src="tri.png" class="left" contain height="700px">
        <v-layout row>
          <v-flex xs6 pl-2 py-4>
            <h1 class="monteserrat">Not your average Physician</h1>
            <p class="py-4">
              A double board certification in Physical Medicine &#38; Rehabilitation, certifications for yoga instruction and personal trinaing.<br /> <br />
              Dr. Goodwin has formal training in bio-identical hormones and skin rehabilitation<br /><br />
              Meet your ticket to the very <br />best you.
            </p>
          <v-btn outline>
            learn more
          </v-btn>
          </v-flex>
          <v-flex xs6>
            <v-img height="500px"src="outline.png"></v-img>
          </v-flex>
        </v-layout>
        </v-layout>
      </v-img>
    </section>
    <div class="text-xs-center">
  <v-bottom-sheet inset>
    <v-btn
      slot="activator"
      color="red"
      dark
    >
      Show player
    </v-btn>

    <v-card tile>
      <v-progress-linear
        :value="50"
        class="my-0"
        height="3"
      ></v-progress-linear>
      <v-layout justify-center row wrap>
      <img src="coollogo.png" height="70px" class="mt-2"/>
      <v-list>
        <v-list-tile>
          <v-list-tile-content color="blue">
            <v-list-tile-sub-title>Learn more about our cool sculpting special offers!</v-list-tile-sub-title>
          </v-list-tile-content>

        </v-list-tile>
      </v-list>
      <v-btn color="blue lighten-2 white--text mb-4">Learn More</v-btn>
      </v-layout>
    </v-card>
  </v-bottom-sheet>
</div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        cards: [
        { title: 'BODY', src: 'lady.jpg', flex: 6, to: "/body" },
        { title: 'FACE', src: 'lips.jpg', flex: 6, to: "/face" },
        { title: 'HAIR', src: 'hair2.jpg', flex: 6, to: "/hair" },
        { title: 'HORMONES', src: 'outlineColor.jpg', flex: 6, to: "/hormones" }
      ],
        items: [
          {
            src: 'couple.jpg'
          },
          {
            src: 'frontface.jpg'
          },
          {
            src: 'wendy3.jpg'
          }
        ]
      }
    }
  }
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.shrink {
  background-color: rgba(0,0,0, 0.4)
}
* {
  font-family: Mostra;
}
#monteserrat{
  font-family: 'Montserrat', sans-serif;
}

h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.define{
  height: 300px;
}
.cbutton {
    display: inline-block;
    text-align: center;
    vertical-align: middle;
    padding: 12px 24px;
    border: 0px solid #a12727;
    border-radius: 40px;
    background: #ff4a4a;
    background: -webkit-gradient(linear, left top, left bottom, from(#ff4a4a), to(#521717));
    background: -moz-linear-gradient(top, #ff4a4a, #521717);
    background: linear-gradient(to bottom, #ff4a4a, #521717);
    text-shadow: #591717 1px 0px 1px;
    font: normal normal bold 20px arial;
    color: #ffffff;
    text-decoration: none;
}
.cbutton:hover,
.cbutton:focus {
    background: #ff5959;
    background: -webkit-gradient(linear, left top, left bottom, from(#ff5959), to(#621c1c));
    background: -moz-linear-gradient(top, #ff5959, #621c1c);
    background: linear-gradient(to bottom, #ff5959, #621c1c);
    color: #ffffff;
    text-decoration: none;
}
.cbutton:active {
    background: #982727;
    background: -webkit-gradient(linear, left top, left bottom, from(#982727), to(#521717));
    background: -moz-linear-gradient(top, #982727, #521717);
    background: linear-gradient(to bottom, #982727, #521717);
}
.cbutton:before{
    content:  "\0000a0";
    display: inline-block;
    height: 24px;
    width: 24px;
    line-height: 24px;
    margin: 0 4px -6px -4px;
    position: relative;
    top: 0px;
    left: 0px;
    background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAA7EAAAOxAGVKw4bAAABlElEQVRIibXVsYoUQRAG4G9HETkWWURE5ILjOOQQMTgOI7lIDETEB9BMfAATE/ENDAyMjUwEAwMDERGRQ8FUBMVHMDovMJDVoGu0Zpzdm112C4r5q/qna7qqunqAyhKl3nw8YX28CNw+QbVIfAgD/E4Lg/BvxfdHrGdOb1wHyLqBp1jDLezhSwevrzaOdQTvcDbsId6GPXe6snMbDzXlDF7j8DwBqmRUscnPZFf4hq84n3z64tymY3yOU9S++ruPlcTTF7dbdC/++GIib8TffzCnVC1dw6tk38CdDl5f7bxo93E78BBvcKHF6Y27ZtFRpT03wz6NXZzr4B4o7erXuqncieNhr0eQuptWcDn8M6eolktKPYb+1WcX9/ARD/Acz1Kg//Y5aFxfw0uMwh4phT+ZONsR+ErXBpNSlPWqUpNp6RgpzXDKDCnKeAvvcX0K51HwGv5ZXrRjeIwncZosO3ihObMMIsB4xkA7uItfyng5gVXcxPdJAWrJ9jRMuR/ryoj5pDmH/vKX+uhPmvELlaU++n8AEBNRjKT09PUAAAAASUVORK5CYII=") no-repeat left center transparent;
    background-size: 100% 100%;
}
#transparency{
  opacity:0.5
}
#transparency2{
  opacity:1
}
@font-face{
            font-family: Montserrat;
}
#transparent{
   background: rgba(255, 255, 255, 0);
}
span {
  font-size: 1.1em;
}
span i {
  font-size: 110%; }
#frosty{
  background-image: linear-gradient(to top right, rgba(255,255,255,0.8),rgba(255,255,255,0.8),rgba(255,255,255,0.8),rgba(255,255,255,0.8),rgba(20,20,20,0.02));
  border-width: 1px;
  border-color: rgba(20,20,20,0.1);
  border-bottom-style: solid;
  border-top-style: solid;
  mix-blend-mode: screen;

  /* what will show through the text
      ~ or ~
     what will be the background of that element */
  background: whatever;
  width:100%;

  /* fallback text color
      ~ or ~
     the actual color of text, so it better work on the background */

}
#frosty2{
  background-color: #fff;
  color: #000;
  mix-blend-mode: screen;
  padding: 16px;
  font-family: arial;
  font-size: 3em;
  margin: 0;
  opacity: 0.8;
  width:100%;
}
.engrave {
        color: #3B5957;
        text-shadow: 0px 1px 0px rgba(255,255,255,.2), 0px -1px 0px rgba(0,0,0,.6);
        font-family: 'Montserrat', sans-serif;
}
.monteserrat{
  font-family: 'Montserrat', sans-serif;
}
.rounded{
  border-radius: 4px;
}
</style>
