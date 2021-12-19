<template>
  <div class="nopic">
    <v-container>
      <v-img src="screenshots2.png" max-height="700"></v-img>
      <v-img src="screenshots1.jpg" max-height="700"></v-img>
      <v-card-title>
        请将下列6星卡图用所列文件名发送至 toaru.wiki@gmail.com
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
    </v-container>
    <v-data-table
      :headers="headers"
      :items="card"
      :items-per-page="100"
      :search="search"
      class="elevation-1"
    >
      <template v-slot:item.ID="{ item }">
        <v-img
          max-height="73"
          max-width="73"
          :src="require('@/assets/pic/s/' + item.ID + '.jpg')"
        >
        </v-img>
      </template>
      <template v-slot:item.id="{ item }"> {{ item.ID }}.jpg </template>
    </v-data-table>
  </div>
</template>

<script>
import card from "../assets/nopic.json";
export default {
  name: "Home",
  data() {
    return {
      search: "",
      headers: [
        {
          text: "头像",
          align: "left",
          sortable: false,
          value: "ID",
        },
        {
          text: "中文卡名",
          align: "start",
          sortable: false,
          value: "中文",
        },
        { text: "原名", value: "日文", sortable: false },
        { text: "文件名", value: "id", sortable: true },
      ],
    };
  },
  components: {},
  created: function () {
    this.card = card;
  },
  methods: {},
};
</script>