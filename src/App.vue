<template>
  <v-app>
    <v-app-bar app >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>{{appName}}</v-toolbar-title>
      <!-- -->
      <v-spacer />
      <v-tooltip bottom >
        <template v-slot:activator="{ on }">
          <v-btn
            icon
            color="primary"
            dark
            v-on="on"
            v-show="!$store.state.token"
            to="/register"
          >
            <v-icon>mdi-account-plus</v-icon>
          </v-btn>
        </template>
        <span>Register</span>
      </v-tooltip>

      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <v-btn 
          icon 
          color="primary" 
          dark 
          v-on="on" 
          v-show="!$store.state.token"
          to="/login">
            <v-icon>mdi-login</v-icon>
          </v-btn>
        </template>
        <span>Login</span>
      </v-tooltip>

      <v-tooltip bottom >
        <template v-slot:activator="{ on }">
          <v-btn
            icon
            color="primary"
            dark
            v-on="on"
            v-show="$store.state.token"
            @click="logout"
          >
            <v-icon>mdi-logout</v-icon>
          </v-btn>
        </template>
        <span>Logout</span>
      </v-tooltip>
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-main>
      <v-navigation-drawer v-model="drawer" absolute top temporary>
        <!-- -->
        <v-list nav>
          <v-list-item-group active-class="deep-purple--text text--accent-4">
            <v-list-item to="/">
              <v-list-item-title>Home</v-list-item-title>
            </v-list-item>
            <v-divider dark></v-divider>
            <v-list-item to="profiles" v-show="$store.state.token">
              <v-list-item-title>Profile</v-list-item-title>
            </v-list-item>
            <v-list-item to="jobs" v-show="$store.state.token">
              <v-list-item-title>Jobs</v-list-item-title>
            </v-list-item>
            <v-list-item to="bids" v-show="$store.state.token">
              <v-list-item-title>Bids</v-list-item-title>
            </v-list-item>
            <v-divider dark></v-divider>
            <v-list-item to="register" v-show="!$store.state.token">
              <v-list-item-title>Register</v-list-item-title>
            </v-list-item>
            <v-list-item to="login" v-show="!$store.state.token">
              <v-list-item-title>Login</v-list-item-title>
            </v-list-item>
            <v-list-item v-show="$store.state.token" @click="logout">
              <v-list-item-title>Logout</v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
      <!-- Provides the application the proper gutter -->
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer app>
      <!-- -->
    </v-footer>
  </v-app>
</template>

<script>

export default {
  name: "App",

  components: {
    //    HelloWorld,
  },

  data: () => ({
    drawer: false,
    appName: process.env.VUE_APP_NAME
  }),
  methods: {
    logout: function () {
      console.log("Attempting to logout...")
      this.$store.commit('logout');
      this.$router.push("/login");
    }
  }
};
</script>
