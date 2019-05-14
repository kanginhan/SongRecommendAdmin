<template>
  <div id="app">
    <v-app>
    <v-content>
      <v-container class="ml-0 mt-0 pl-0 pt-0">

        <v-layout>
          <v-flex xs2>
 <v-navigation-drawer permanent>
    <v-toolbar flat>
      <v-list>
        <v-list-tile>
          <v-list-tile-title class="title">
            노래뭐하지 관리자
          </v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-toolbar>

    <v-divider></v-divider>

    <v-list dense class="pt-0">
      <v-list-tile
        v-for="item in items"
        :key="item.title"
        @click="goPage(item.url)"
      >
        <v-list-tile-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-tile-action>

        <v-list-tile-content>
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>






          </v-flex>
          <v-flex xs10>
            <router-view></router-view>
          </v-flex>
        </v-layout>
   
    


    </v-container>
    </v-content>
  </v-app>
  </div>

</template>

<script>
export default {
  name: "app",
  data () {
      return {
        items: [
          { title: 'Base Songs', icon: 'dashboard', url: '/basesongs' },
          { title: 'Base Words', icon: 'dashboard', url: '/basewords' },
          { title: 'Analyze Songs', icon: 'question_answer', url: '/analyzesongs' },
          { title: 'Propose Songs', icon: 'dashboard', url: '/proposesongs' }
        ]
      }
    },
    methods: {
      goPage: function(url){
        this.$router.push(url);
      }
    }
};
</script>
