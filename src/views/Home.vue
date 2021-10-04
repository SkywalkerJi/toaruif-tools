<template>
  <div class="home">
    <v-container>
      <v-row>
        <v-col>
          <v-select
            v-model="select"
            :items="items"
            :error-messages="errors"
            label="入手途径"
            data-vv-name="select"
            required
          ></v-select
        ></v-col>
        <v-col>
          <v-select
            v-model="select"
            :items="items"
            :error-messages="errors"
            label="阵营"
            data-vv-name="select"
            required
          ></v-select
        ></v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-subheader>初始星级</v-subheader>
          <v-btn-toggle v-model="text" color="deep-purple accent-3" tile group>
            <v-btn value="☆1"> ☆ </v-btn>
            <v-btn value="☆2"> ☆☆ </v-btn>
            <v-btn value="☆3"> ☆☆☆ </v-btn>
          </v-btn-toggle></v-col
        >
        <v-col>
          <v-subheader>颜色</v-subheader>
          <v-btn-toggle v-model="text" tile group>
            <v-btn value="红" color="red"> 红 </v-btn>
            <v-btn value="蓝" color="blue"> 蓝 </v-btn>
            <v-btn value="绿" color="green"> 绿 </v-btn>
            <v-btn value="黄" color="yellow"> 黄 </v-btn>
            <v-btn value="紫" color="purple"> 紫 </v-btn>
          </v-btn-toggle>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-subheader>攻击类型</v-subheader>
          <v-btn-toggle v-model="text" tile color="deep-purple accent-3" group>
            <v-btn value="left"> 异能攻击 </v-btn>

            <v-btn value="center"> 物理攻击 </v-btn>
          </v-btn-toggle></v-col
        >
        <v-col>
          <v-subheader>攻击方向</v-subheader>
          <v-btn-toggle
            v-model="text"
            tile
            color="deep-purple accent-3"
            group
            multiple
          >
            <v-btn value="left"> Left </v-btn>

            <v-btn value="center"> Center </v-btn>

            <v-btn value="right"> Right </v-btn>
          </v-btn-toggle></v-col
        >
      </v-row>
      <v-row> </v-row>
    </v-container>
    <v-container>
      <v-data-table
        :headers="headers"
        :items="card"
        :items-per-page="10"
        class="elevation-1"
      >
        <template v-slot:item.attributes="{ item }">
          <v-chip 
          :color="getColor(item.attributes)" dark>
            {{ item.attributes }}
          </v-chip>
        </template>
      </v-data-table>
    </v-container>
  </div>
</template>

<script>
import card from "../assets/card";
export default {
  name: "Home",
  data(){
    return{
    items:[],
    errors:[],
    select:[],
    text:[],
    headers: [
      {
        text: "卡名",
        align: "start",
        sortable: false,
        value: "chinese",
      },
      { text: "阵营", value: "faction" },
      { text: "初始星级", value: "initialrarity" },
      { text: "颜色", value: "attributes" },
      { text: "攻击类型", value: "attackMethod" },
      { text: "HP", value: "hp" },
      { text: "器用", value: "dexterity" },
      { text: "异攻", value: "physicalAttack" },
      { text: "物攻", value: "powerAttack" },
      { text: "异防", value: "physicalDefense" },
      { text: "物防", value: "powerDefense" },
      { text: "入手途径", value: "obtain" },
    ],
  }
  },
  created: function () {
    this.card = card;
    this.getColor("红");
  },
  methods: {
    getColor(attributes) {
      console.log(1111);
      if (attributes == "红") return "red";
      else if (attributes == "蓝") return "blue";
      else return "green";
    },
  },
};
</script>