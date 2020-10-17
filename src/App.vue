<template>
  <v-app>
    <v-app-bar app>
      <h1>Annie</h1>
      <!-- -->
      <v-spacer />
      <v-btn flat v-if="!$store.state.token" to="/Register">Register</v-btn>
      <v-btn flat v-if="!$store.state.token" to="/Login">Login</v-btn>
      <v-btn flat v-if="$store.state.token" @click="$store.commit('logout')"
        >Logout</v-btn
      >
    </v-app-bar>

    <v-navigation-drawer>
      <!-- -->
    </v-navigation-drawer>

    <!-- Sizes your content based upon application components -->
    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <!-- If using vue-router 
        <router-view></router-view>-->
      </v-container>
    </v-main>

    <v-footer app>
      <!-- -->
    </v-footer>
  </v-app>
</template>

<script>
//import HelloWorld from './components/HelloWorld';

export default {
  name: "App",

  components: {
    //    HelloWorld,
  },

  data: () => ({
    //
  }),
};
</script>
