<template>
  <v-app id="background">
    <v-navigation-drawer
      :mini-variant="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      enable-resize-watcher
      fixed
      app
      right
      >
      <v-list>
        <v-list-tile><a id="fit" href="/"><img height="35px" id="fit" src="logo.png"/></a></v-list-tile>
        <v-list-tile
          value="true"
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          >
          <v-list-tile-content>
            <v-list-tile-title class="monteserrat">{{item.title}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      app
      :clipped-left="clipped"
      id="toolbar"
      height="100px"
      >
      <v-btn
        v-show="!hidden"
        color="#cc3333"
        dark
        fab
        open-on-hover
        small
        class="elevation-7"
        >
      <v-icon>phone</v-icon>
    </v-btn>
      <v-toolbar-title><a id="fit" href="/"><img height="45px" id="fit" src="logo.png"/></a></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
    </v-toolbar>
     <v-content>
      <router-view/>
    </v-content>
    <v-footer app height="auto">
    <v-layout row wrap justify-center>
    <v-flex xs12 text-xs-center pt-1>
        <v-btn small icon href="https://www.facebook.com/PersonalBestMD/">
          <v-icon>fab fa-facebook-square</v-icon>
        </v-btn>
        <v-btn small icon href="http://linkedin.com/in/wendy-goodwin-m-d-0050b2116">
          <v-icon>fab fa-linkedin</v-icon>
        </v-btn>
        <v-btn small icon href="https://www.instagram.com/personalbestmd/">
          <v-icon>fab fa-instagram</v-icon>
        </v-btn>
      </v-flex>
      <v-flex xs12 text-xs-center py-1>
        <span>Personal Best MD &copy; 2018</span>
      </v-flex>
      <v-fab-transition>
        <v-btn
          absolute
          v-show="!hidden"
          color="#cc3333"
          dark
          top
          right
          fab
          open-on-hover
          >
        <v-icon >phone</v-icon>
      </v-btn>
    </v-fab-transition>
      </v-layout>
    </v-footer>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
        icon: 'bubble_chart',
        title: 'About Us',
        to: '/about'
        },
        {
          icon: 'bubble_chart',
          title: 'Contact',
          to: '/contact'
        },
        {
          icon: 'bubble_chart',
          title: 'Services',
          to: '/Services'
        },
        {
          icon: 'bubble_chart',
          title: 'Blog',
          to: '/Blog'
        },
        {
          icon: 'bubble_chart',
          title: 'Videos',
          to: '/Videos'
        }
      ],
      miniVariant: false,
      title: 'Vuetify.js'
    }
  }
}
</script>

<style scoped>
@font-face{
            font-family: 'Montserrat';

}
/*
@font-face{
            font-family: mariza;
            src: url(~/mariza.woff) format("opentype");
}*/
.application {
  font-family: Mostra;
}

#background {
 background-image: url("~/marble.jpg");
 background-size: contain;
 background-color: #cccccc;
}
#fit{
  left: 20px
}
#toolbar{
  background-color: rgba(255,255,255,.85)
}
#shadow {
  box-shadow: 5px 3px;
  color:radial-gradient(at 50% 0, black, transparent 70%),
}
.monteserrat{
  font-family: 'Montserrat', sans-serif;
  text-decoration: none;
}
</style>
