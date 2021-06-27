
<template>
  <v-container>
    <v-card max-width="500" class="mx-auto" flat>
      <v-row dense>
        <v-col cols="12">
          <v-card>
            <v-app-bar color="teal lighten-3">
              <v-toolbar-title>Registration</v-toolbar-title>
            </v-app-bar>
            <v-form ref="form">
              <v-container>
                <v-flex>
                  <v-text-field
                    v-model="userName"
                    label="User Name"
                    required
                    :rules="nameRules"
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
                    required
                    :rules="passwordRules"
                  ></v-text-field>
                </v-flex>
                <v-flex>
                  <v-text-field
                    v-model="passwordConfirm"
                    :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                    :type="show ? 'text' : 'password'"
                    name="input-10-1"
                    label="Password Confirmation"
                    hint="At least 8 characters"
                    @click:append="show = !show"
                    required
                    :rules="passwordRules.concat(passwordConfirmationRule)"
                  ></v-text-field>
                </v-flex>
                <v-text-field
                  v-model="firstName"
                  label="First Name"
                  required
                  :rules="[v => !!v || 'First Name is required']"
                ></v-text-field>
                <v-text-field
                  v-model="lastName"
                  label="Last Name"
                  required
                  :rules="[v => !!v || 'Last Name is required']"
                ></v-text-field>
                <v-text-field
                  v-model="email"
                  label="Email"
                  required
                  :rules="emailRules"
                ></v-text-field>
                <v-row>
                  <v-col>
                    <v-select
                      :items="phoneTypes"
                      label="Phone Type"
                      solo
                    ></v-select>
                  </v-col>
                  <v-col>
                    <v-text-field
                      v-model="phone"
                      label="Phone"
                      required
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-card-actions> 
                  <v-spacer></v-spacer>
                  <v-btn color="teal lighten-3" @click="submitRegistration">
                    Registration
                  </v-btn>
                </v-card-actions>
              </v-container>
            </v-form>
          </v-card>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    show: false,
    errors: [],
    nameRules: [
        v => !!v || 'User Name is required',
        v => (v && v.length >= 3) || 'User Name must be more than 3 characters',
     ],
     passwordRules: [
        v => !!v || 'Password is required',
     ],
     emailRules: [
        v => !!v || 'Email is required',
        v => (/.+@.+\..+/.test(v)) || 'E-mail must be valid',
     ],
    userName: "",
    password: "",
    passwordConfirm: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    phoneType: "",
    phoneTypes: ["Mobile", "Work", "Home"]
  }),
  methods: {
     async submitRegistration() {
       if (this.$refs.form.validate())
       {
        const rgstr = {  
                  username: this.userName, 
                  password: this.password,
                  firstName: this.firstName,
                  lastName: this.lastName,
                  email: this.email,
                  phone: this.phone,
                  phoneType: this.phoneType
              };
        this.$store.dispatch("register", rgstr)
            .then(()=> this.$router.push("/login"))
            .catch(err => {
              this.errors = [];
                this.errors.push(err.response.message);
            });
       }
    }
  },
  computed: {
    passwordConfirmationRule() {
        return () => (this.password === this.passwordConfirm) || 'Password must match'
    },
  }
};
</script>