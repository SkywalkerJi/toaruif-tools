<template>
  <div class="home">
    <v-container>
      <v-row>
        <v-col>
          <v-card-title
            >入手途径:
            <v-select
              v-model="cardSearch.obtain"
              :items="obtain"
              :error-messages="errors"
              label="可选择"
              data-vv-name="select"
              required
              @change="searchData"
            ></v-select> </v-card-title
        ></v-col>
        <v-col>
          <v-card-title
            >阵营:
            <v-select
              v-model="cardSearch.faction"
              :items="faction"
              :error-messages="errors"
              label="可选择"
              data-vv-name="select"
              required
              @change="searchData"
            ></v-select></v-card-title
        ></v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-card-title
            >初始星级:
            <v-btn-toggle
              v-model="cardSearch.initialrarity"
              color="deep-purple accent-3"
              tile
              @change="searchData"
              group
            >
              <v-btn value="☆1"> ☆ </v-btn>
              <v-btn value="☆2"> ☆☆ </v-btn>
              <v-btn value="☆3"> ☆☆☆ </v-btn>
            </v-btn-toggle>
          </v-card-title>
        </v-col>
        <v-col>
          <v-card-title
            >颜色:
            <v-btn-toggle
              v-model="cardSearch.attributes"
              tile
              group
              @change="searchData"
            >
              <v-btn value="红" color="red"> 红 </v-btn>
              <v-btn value="蓝" color="blue"> 蓝 </v-btn>
              <v-btn value="绿" color="green"> 绿 </v-btn>
              <v-btn value="黄" color="yellow"> 黄 </v-btn>
              <v-btn value="紫" color="purple"> 紫 </v-btn>
            </v-btn-toggle>
          </v-card-title>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-card-title
            >攻击类型:
            <v-btn-toggle
              v-model="cardSearch.attackMethod"
              tile
              @change="searchData"
              color="deep-purple accent-3"
              group
            >
              <v-btn value="异能攻击"> 异能攻击 </v-btn>

              <v-btn value="物理攻击"> 物理攻击 </v-btn>
            </v-btn-toggle>
          </v-card-title></v-col
        >
        <v-col>
          <v-card-title
            >攻击方向:
            <v-btn-toggle
              v-model="cardSearch.attackDirection"
              tile
              color="deep-purple accent-3"
              group
              @change="searchData"
              multiple
            >
              <v-btn value="1"> ← </v-btn>

              <v-btn value="2"> ↑ </v-btn>

              <v-btn value="3"> → </v-btn>
            </v-btn-toggle>
          </v-card-title>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-card-title
            >卡种:
            <v-btn-toggle
              v-model="cardSearch.class"
              tile
              @change="searchData"
              color="deep-purple accent-3"
              group
            >
              <v-btn value="BATTLE"> BATTLE </v-btn>

              <v-btn value="ASSIST"> ASSIST </v-btn>
            </v-btn-toggle>
          </v-card-title></v-col
        >
      </v-row>
    </v-container>
    <v-container>
      <v-card-title>
        搜索
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="card"
        :items-per-page="10"
        :search="search"
        class="elevation-1"
      >
        <template v-slot:item.attributes="{ item }">
          <v-chip :color="getColor(item.attributes)" dark>
            {{ item.attributes }}
          </v-chip>
        </template>
        <template v-slot:item.obtain="{ item }">
          {{ item.limited }}{{ item.obtain }}
        </template>
      </v-data-table>
    </v-container>
  </div>
</template>

<script>
import card from "../assets/card";
export default {
  name: "Home",
  data() {
    return {
      cardSearch: {
        obtain: "",
        faction: "",
        initialrarity: "",
        attackMethod: "",
        attackDirection: [],
      },
      obtain: ["通常", "期间限定", "幻想盛典限定", "活动"],
      faction: ["科学侧", "魔法侧", "其他阵营", "科学侧 魔法侧"],
      items: [],
      errors: [],
      select: [],
      text: [],
      search: "",
      headers: [
        {
          text: "卡名",
          align: "start",
          sortable: false,
          value: "chinese",
        },
        { text: "阵营", value: "faction" },
        { text: "星级", value: "initialrarity" },
        { text: "颜色", value: "attributes" },
        { text: "卡种", value: "class" },
        { text: "类型", value: "attackMethod" },
        { text: "方向", value: "attackDirection" },
        // { text: "HP", value: "hp" },
        // { text: "器用", value: "dexterity" },
        // { text: "异攻", value: "physicalAttack" },
        // { text: "物攻", value: "powerAttack" },
        // { text: "异防", value: "physicalDefense" },
        // { text: "物防", value: "powerDefense" },
        { text: "入手", value: "obtain" },
        { text: "技能", value: "skill1Effect" },
        { text: "大招", value: "nirvanaEffect" },
        { text: "潜在1", value: "potentialAbility1Effect" },
        { text: "潜在2", value: "potentialAbility2Effect" },
      ],
    };
  },
  created: function () {
    this.card = card;
    this.getColor("红");
  },
  methods: {
    getColor(attributes) {
      if (attributes == "红") return "red";
      else if (attributes == "蓝") return "blue";
      else return "green";
    },
    // 查询函数(被查询数组,关键词数组)
    searchKeysValues(lists, filters) {
      let resArr = [];
      lists.filter((item) => {
        let flag = 1;
        for (let i in filters) {
          if (!item[i].includes(filters[i])) {
            flag = 0;
          }
        }
        if (flag === 1) {
          resArr.push(item);
        }
      });
      this.card = resArr;
    },
    // 筛选非空关键词
    deleteEmptyKey(obj) {
      let keys = {};
      for (let key in obj) {
        if (obj[key] && obj[key] != "") {
          keys[key] = obj[key];
        }
      }
      return keys;
    },
    searchData() {
      let keys = this.deleteEmptyKey(this.cardSearch);
      if (this.cardSearch.attackDirection.length > 0) {
        keys.attackDirection = "";
        for (let i = 0; i < this.cardSearch.attackDirection.length; i++) {
          keys.attackDirection = +this.cardSearch.attackDirection[i];
        }
      }
      this.searchKeysValues(card, keys);
    },
  },
};
</script>