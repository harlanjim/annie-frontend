<template>
  <v-card max-width="400" class="mx-auto" flat>
    <v-row dense>
      <v-col cols="12">
        <v-card>
          <v-app-bar color="teal lighten-3"
            ><v-toolbar-title>Annie Login</v-toolbar-title></v-app-bar
          >
          <v-form ref="form" lazy-validation>
            <v-container>
              <v-flex>
                <v-text-field
                  v-model="userName"
                  label="User Name"
                  required
                ></v-text-field>
              </v-flex>
              <v-flex>
                <v-text-field
                  v-model="password"
                  :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                  :type="show ? 'text' : 'password'"
                  name="input-10-1"
                  label="Password"
                  hint="At least 8 characters"
                  @click:append="show = !show"
                ></v-text-field>
              </v-flex>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="teal lighten-3" @click="submitLogin"> Login </v-btn>
              </v-card-actions>
            </v-container>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import {mapActions} from "vuex";

export default {
  data: () => ({
    show: false,
    userName: "",
    password: "",
  }),
  methods: {
     async submitLogin() {
      this.login({userName: this.userName, password: this.password});
    }
  },
  computed: {
    ...mapActions([
      'login'
    ])
  }
};
</script>