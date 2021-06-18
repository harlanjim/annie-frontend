<template>
    <v-container>
        <h1>Profiles</h1>
  <v-data-table
    single-select
    :headers="headers"
    :items="$store.state.profiles"
    :sort-by.sync="sortBy"
    :sort-desc.sync="sortDesc"
    disable-pagination
    disable-items-per-page
    hide-default-footer
    height="600"
    fixed-header
    item-key="id"
    v-model="select"
    :loading="loading"
    loading-text="Loading... Please wait"
    class="elevation-2 "
    @item-selected="itemSelected"
  >
         <template v-slot:item="{ item, isSelected, select }">
                  <tr :class="isSelected?'teal lighten-4 elevation-5':''" @click="toggle(isSelected,select,$event)">
                      <td>{{item.firstName}}</td>
                      <td>{{item.lastName}}</td>
                      <td>{{item.email}}</td>
                      <td>{{item.address}}</td>
                      <td>{{item.city}}</td>
                      <td>{{item.state}}</td>
                  </tr>
              </template>
  </v-data-table>

    </v-container>
</template>

<script>
export default {
   data() {
    return {
     select: [],
     loading: true,
     sortBy: "",
     sortDesc: false,
     headers: [
       { text: "Last Name", align: "start", value: "lastName", class: "teal lighten-3 elevation-5" },
       { text: "First Name", value: "firstName" , class: "teal lighten-3 elevation-5"},
       { text: "Email", value: "email", class: "teal lighten-3 elevation-5" },
       { text: "Address", value: "address", class: "teal lighten-3 elevation-5" },
       { text: "City", value: "city", class: "teal lighten-3 elevation-5" },
       { text: "State", value: "state", class: "teal lighten-3 elevation-5" },
     ],
    };
  },
  async mounted() {
      this.$store.commit("updateProfiles", []);
      this.$store.dispatch("getProfiles");
      this.loading = false;
  },
  methods: {
   itemSelected(item) {
     console.log('Item : ' + item)
   },
   toggle(isSelected,select,e) {
      select(!isSelected);
      console.log(e);
   }
 }
}
</script>