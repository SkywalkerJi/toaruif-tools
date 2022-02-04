<template>
  <div class="home">
    <infoDialog
      v-model="showInfoDialog"
      :inputCard="this.inputCard"
    ></infoDialog>
    <v-container>
      <v-card-title>{{ $t("基础筛选") }}</v-card-title>
      <v-row>
        <v-col>
          <v-btn-toggle
            v-model="cardSearch.class"
            tile
            @change="searchData"
            color="deep-purple accent-3"
            group
          >
            <v-btn value="BATTLE" color="red" class="red--text">{{
              $t("BATTLE")
            }}</v-btn>
            <v-btn value="ASSIST" color="blue" class="blue--text">{{
              $t("ASSIST")
            }}</v-btn>
          </v-btn-toggle></v-col
        >
        <v-col>
          <v-btn-toggle
            v-model="cardSearch.initialrarity"
            color="deep-purple accent-3"
            tile
            @change="searchData"
            group
          >
            <v-btn value="☆1" color="amber">
              <v-icon> mdi-star-outline </v-icon>
            </v-btn>
            <v-btn value="☆2" color="amber">
              <v-icon> mdi-star-outline </v-icon>
              <v-icon> mdi-star-outline </v-icon>
            </v-btn>
            <v-btn value="☆3" color="amber">
              <v-icon> mdi-star-outline </v-icon
              ><v-icon> mdi-star-outline </v-icon
              ><v-icon> mdi-star-outline </v-icon>
            </v-btn>
          </v-btn-toggle>
        </v-col>
        <v-col>
          <v-btn-toggle
            v-model="cardSearch.attributes"
            tile
            group
            @change="searchData"
          >
            <v-btn value="红" color="red" class="red--text">{{
              $t("红")
            }}</v-btn>
            <v-btn value="蓝" color="blue" class="blue--text">{{
              $t("蓝")
            }}</v-btn>
            <v-btn value="绿" color="green" class="green--text">{{
              $t("绿")
            }}</v-btn>
            <v-btn value="黄" color="yellow" class="amber--text">{{
              $t("黄")
            }}</v-btn>
            <v-btn value="紫" color="purple" class="purple--text">{{
              $t("紫")
            }}</v-btn>
          </v-btn-toggle>
        </v-col>
        <v-col>
          <v-btn-toggle
            v-model="cardSearch.attackMethod"
            tile
            @change="searchData"
            color="deep-purple accent-3"
            group
          >
            <v-btn value="异能攻击" color="red" class="red--text">
              <v-icon> mdi-book-open-variant </v-icon>{{ $t("异能攻击") }}
            </v-btn>
            <v-btn value="物理攻击" color="blue" class="blue--text">
              <v-icon> mdi-fencing </v-icon>{{ $t("物理攻击") }}
            </v-btn>
          </v-btn-toggle>
        </v-col>
        <v-col>
          <v-btn-toggle
            v-model="cardSearch.arrow"
            tile
            color="deep-purple accent-3"
            group
            @change="searchData"
            multiple
          >
            <v-btn value="1" color="grey">
              <v-icon> mdi-arrow-top-left </v-icon>
            </v-btn>
            <v-btn value="2" color="grey">
              <v-icon> mdi-arrow-up </v-icon>
            </v-btn>
            <v-btn value="3" color="grey">
              <v-icon> mdi-arrow-top-right</v-icon>
            </v-btn>
          </v-btn-toggle>
        </v-col>
        <v-col>
          <v-select
            v-model="cardSearch.faction"
            :items="faction"
            :label="$t('阵营')"
            filled
            @change="searchData"
          ></v-select
        ></v-col>
        <v-col>
          <v-select
            v-model="cardSearch.obtain"
            :items="obtain"
            label="入手途径（暂不支持）"
            filled
            disabled
            @change="searchData"
          ></v-select
        ></v-col>
      </v-row>
      <v-card-title>{{ $t("高级筛选") }}</v-card-title>
      <v-combobox
        v-model="effect.specialState"
        :items="$t('specialState')"
        chips
        clearable
        :label="$t('技能 & 必杀技效果')"
        multiple
        prepend-icon="mdi-filter-variant"
        solo
        @change="searchData"
      >
        <template v-slot:selection="{ attrs, item, select, selected }">
          <v-chip
            v-bind="attrs"
            :input-value="selected"
            close
            @click="select"
            @click:close="remove(item, effect.specialState)"
          >
            <strong>{{ item.text }}</strong
            >&nbsp;
            <span>✔</span>
          </v-chip>
        </template>
      </v-combobox>
      <v-combobox
        v-model="effect.potentialTags"
        :items="$t('potentialTags')"
        chips
        clearable
        :label="$t('潜能效果')"
        multiple
        prepend-icon="mdi-filter-variant"
        solo
        @change="searchData"
      >
        <template v-slot:selection="{ attrs, item, select, selected }">
          <v-chip
            v-bind="attrs"
            :input-value="selected"
            close
            @click="select"
            @click:close="remove(item, effect.potentialTags)"
          >
            <strong>{{ item.text }}</strong
            >&nbsp;
            <span>✔</span>
          </v-chip>
        </template>
      </v-combobox>
      <v-combobox
        v-model="effect.enemyRange"
        :items="$t('enemyRange')"
        chips
        clearable
        :label="$t('敌方作用范围')"
        multiple
        prepend-icon="mdi-filter-variant"
        solo
        @change="searchData"
      >
        <template v-slot:selection="{ attrs, item, select, selected }">
          <v-chip
            v-bind="attrs"
            :input-value="selected"
            close
            @click="select"
            @click:close="remove(item, effect.enemyRange)"
          >
            <strong>{{ item.text }}</strong
            >&nbsp;
            <span>✔</span>
          </v-chip>
        </template>
      </v-combobox>
      <v-combobox
        v-model="effect.ourScope"
        :items="$t('ourScope')"
        chips
        clearable
        :label="$t('我方作用范围')"
        multiple
        prepend-icon="mdi-filter-variant"
        solo
        @change="searchData"
      >
        <template v-slot:selection="{ attrs, item, select, selected }">
          <v-chip
            v-bind="attrs"
            :input-value="selected"
            close
            @click="select"
            @click:close="remove(item, effect.ourScope)"
          >
            <strong>{{ item.text }}</strong
            >&nbsp;
            <span>✔</span>
          </v-chip>
        </template>
      </v-combobox>
      <v-combobox
        v-model="effect.occurrenceCond"
        :items="$t('occurrenceCond')"
        chips
        clearable
        :label="$t('发生条件')"
        multiple
        prepend-icon="mdi-filter-variant"
        solo
        @change="searchData"
      >
        <template v-slot:selection="{ attrs, item, select, selected }">
          <v-chip
            v-bind="attrs"
            :input-value="selected"
            close
            @click="select"
            @click:close="remove(item, effect.occurrenceCond)"
          >
            <strong>{{ item.text }}</strong
            >&nbsp;
            <span>✔</span>
          </v-chip>
        </template>
      </v-combobox>
      <v-combobox
        v-model="effect.power"
        :items="$t('power')"
        chips
        clearable
        :label="$t('威力 & 特攻')"
        multiple
        prepend-icon="mdi-filter-variant"
        solo
        @change="searchData"
      >
        <template v-slot:selection="{ attrs, item, select, selected }">
          <v-chip
            v-bind="attrs"
            :input-value="selected"
            close
            @click="select"
            @click:close="remove(item, effect.power)"
          >
            <strong>{{ item.text }}</strong
            >&nbsp;
            <span>✔</span>
          </v-chip>
        </template>
      </v-combobox>
    </v-container>
    <v-container>
      <v-card-title>
        {{ $t("筛选结果中搜索") }}
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
      :items-per-page="20"
      :search="search"
      :sort-by="['ID']"
      :sort-desc="[true]"
      @click:row="handleClick"
      class="elevation-1"
      :footer-props="{ 'items-per-page-options': [15, 30, 50, 100, -1] }"
    >
      <template v-slot:[`item.img`]="{ item }">
        <v-img
          max-height="73"
          max-width="73"
          :src="require('@/assets/pic/s/' + item.img + '.jpg')"
        >
        </v-img>
      </template>
      <template v-slot:[`item.Chinese.attributes`]="{ item }">
        <v-chip :color="getColor(item.Chinese.attributes)" dark>
          {{ item.Chinese.attributes }}
        </v-chip>
      </template>
      <template v-slot:[`item.Japanese.attackDirection`]="{ item }">
        <v-img
          max-height="20"
          max-width="80"
          :src="
            require('@/assets/pic/arrow/' +
              item.Japanese.attackDirection +
              '.jpg')
          "
          v-if="item.Japanese.attackDirection"
        >
        </v-img>
      </template>
      <template v-slot:[`item.Japanese.obtain`]="{ item }">
        {{ item.Japanese.limited }}{{ item.Japanese.obtain }}
      </template>
    </v-data-table>
  </div>
</template>

<script>
import card from "../assets/data.json";
import infoDialog from "./infoDialog";
export default {
  name: "Home",
  data() {
    return {
      // publicPath:process.env.BASE_URL,
      inputCard: {},
      showInfoDialog: false,
      cardSearch: {
        obtain: "",
        faction: "",
        initialrarity: "",
        attackMethod: "",
        attackDirection: [],
      },
      obtain: ["", "通常", "期间限定", "幻想盛典限定", "活动"],
      faction: ["", "科学侧", "魔法侧", "其他阵营", "魔法侧 科学侧"],
      items: [],
      errors: [],
      select: [],
      effect: {
        specialState: [],
        potentialTags: [],
        enemyRange: [],
        ourScope: [],
        occurrenceCond: [],
        power: [],
      },
      text: [],
      search: "",
      headers: [
        {
          text: this.$t("头像"),
          align: "left",
          sortable: false,
          value: "img",
        },
        { text: "キャラ名", value: "nameJp", sortable: false },
        {
          text: "中文卡名",
          align: "start",
          sortable: false,
          value: "nameCn",
        },
        { text: this.$t("阵营"), value: "Chinese.faction", width: "90px" },
        {
          text: this.$t("星级"),
          value: "Japanese.initialrarity",
          width: "80px",
        },
        { text: this.$t("颜色"), value: "Chinese.attributes", width: "80px" },
        // { text: "卡种", value: "Chinese.class" },
        { text: this.$t("类型"), value: "Chinese.attackMethod", width: "80px" },
        {
          text: this.$t("方向"),
          value: "Japanese.attackDirection",
          width: "80px",
        },
        { text: this.$t("HP"), value: "Japanese.hp", width: "40px" },
        { text: this.$t("灵巧"), value: "Japanese.dexterity", width: "80px" },
        {
          text: this.$t("物攻"),
          value: "Japanese.physicalAttack",
          width: "80px",
        },
        { text: this.$t("异攻"), value: "Japanese.powerAttack", width: "80px" },
        {
          text: this.$t("物防"),
          value: "Japanese.physicalDefense",
          width: "80px",
        },
        {
          text: this.$t("异防"),
          value: "Japanese.powerDefense",
          width: "80px",
        },
        // { text: "入手", value: "Japanese.obtain" },
        { text: "ID", value: "ID" },
        // { text: "技能", value: "Chinese.skill1Effect" },
        // { text: "必杀技", value: "Chinese.nirvanaEffect" },
        // { text: "潜在1", value: "Chinese.potentialAbility1Effect" },
        // { text: "潜在2", value: "Chinese.potentialAbility2Effect" },
      ],
    };
  },
  components: {
    infoDialog,
  },
  created: function () {
    this.card = card;
  },
  methods: {
    remove(item, chips) {
      chips.splice(chips.indexOf(item), 1);
      chips = [...chips];
      this.searchData();
    },
    getColor(attributes) {
      if (attributes == "红") return "red";
      else if (attributes == "蓝") return "blue";
      else if (attributes == "绿") return "green";
      else if (attributes == "紫") return "purple";
      else if (attributes == "黄") return "yellow";
      else return "gray";
    },
    // Check if array contains all elements of another array
    checker(arr, target) {
      return target.every((v) => arr.includes(v));
    },
    // 查询函数(被查询数组,关键词数组)

    searchKeysValues(lists, filters) {
      let key = Object.keys(filters);
      if (key.length == 0) {
        return card;
      }
      let resArr = lists;

      if (filters.specialState) {
        resArr = this.searchSkillValues(
          resArr,
          "specialState",
          filters.specialState
        );
      }
      delete filters.specialState;
      // const specialKey=[
      //   "specialState",
      //   "potentialTags",
      //   "enemyRange",
      //   "ourScope",
      //   "occurrenceCond",
      //   "power",
      // ]
      // for (let i in specialKey){
      //   resArr=this.specialSearch(filters, i, resArr);
      // }
      if (filters.potentialTags) {
        resArr = this.searchSkillValues(
          resArr,
          "potentialTags",
          filters.potentialTags
        );
      }
      delete filters.potentialTags;

      if (filters.enemyRange) {
        resArr = this.searchSkillValues(
          resArr,
          "enemyRange",
          filters.enemyRange
        );
      }
      delete filters.enemyRange;
      if (filters.ourScope) {
        resArr = this.searchSkillValues(resArr, "ourScope", filters.ourScope);
      }
      delete filters.ourScope;
      if (filters.occurrenceCond) {
        resArr = this.searchSkillValues(
          resArr,
          "occurrenceCond",
          filters.occurrenceCond
        );
      }
      delete filters.occurrenceCond;
      if (filters.power) {
        resArr = this.searchSkillValues(resArr, "power", filters.power);
      }
      delete filters.power;
      if (filters.arrow) {
        resArr = this.searchArrow(resArr, "arrow", filters.arrow);
      }
      delete filters.arrow;
      key = Object.keys(filters);
      if (key.length > 0) {
        resArr = resArr.filter((item) =>
          key.every((k) => item.Chinese[k] == filters[k])
        );
      }
      return resArr;
    },
    //特殊状态搜索
    // specialSearch(filters, key, resArr){
    //   let res;
    //   if (filters.key) {
    //    res = this.searchSkillValues(
    //       resArr,
    //       key,
    //       filters.key
    //     );
    //   }
    //   delete filters.key;
    //   return res;
    // },
    // 查询方向(被查询数组,obj属性,关键词数组)
    searchArrow(lists, key, valueArr) {
      let res = lists.filter((item) => {
        if (item.arrow.toString() == valueArr.toString()) return true;
        else return false;
      });
      return res;
    },
    // 查询效果(被查询数组,obj属性,关键词数组)
    searchSkillValues(lists, key, valueArr) {
      let res = lists.filter((item) => {
        if (key == "specialState") {
          item.Chinese[key] = item.Chinese.skill1Search
            .concat(item.Chinese.skill2Search)
            .concat(item.Chinese.nirvanaSearch);
        } else if (key == "potentialTags") {
          item.Chinese[key] = item.Chinese.potentialSearch1.concat(
            item.Chinese.potentialSearch2
          );
        } else if (
          key == "enemyRange" ||
          key == "ourScope" ||
          key == "occurrenceCond" ||
          key == "power"
        ) {
          item.Chinese[key] = item.Chinese.skill1SearchS
            .concat(item.Chinese.skill2SearchS)
            .concat(item.Chinese.nirvanaSearchS);
        }
        let res1 = valueArr.every((x) => {
          return item.Chinese[key].includes(x);
        });
        return res1;
      });
      return res;
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
    handleClick(value) {
      this.showInfoDialog = true;
      this.inputCard = value;
      // this.inputCard.imgUrl = [this.publicPath+"origin/", this.publicPath+"L6/"];
      this.inputCard.imgUrl = ["./origin/", "./L6/"];
      this.inputCard.imgUrl[0] = this.inputCard.imgUrl[0] + value.img + ".jpg";
      this.inputCard.imgUrl[1] = this.inputCard.imgUrl[1] + value.img + ".jpg";
    },
    // 搜索
    searchData() {
      if (this.cardSearch.arrow) {
        this.cardSearch.arrow.sort(function (a, b) {
          return a - b;
        });
      }
      let keys = {
        arrow: this.cardSearch.arrow,
        effect: [],
        attributes: this.cardSearch.attributes,
        class: this.cardSearch.class,
        faction: this.cardSearch.faction,
        attackMethod: this.cardSearch.attackMethod,
        initialrarity: this.cardSearch.initialrarity,
        obtain: this.cardSearch.obtain,
      };
      keys.specialState = this.getValueFromArray(this.effect.specialState);
      keys.potentialTags = this.getValueFromArray(this.effect.potentialTags);
      keys.enemyRange = this.getValueFromArray(this.effect.enemyRange);
      keys.ourScope = this.getValueFromArray(this.effect.ourScope);
      keys.occurrenceCond = this.getValueFromArray(this.effect.occurrenceCond);
      keys.power = this.getValueFromArray(this.effect.power);
      keys = this.deleteEmptyKey(keys);
      this.card = this.searchKeysValues(card, keys);
    },
    getValueFromArray(array) {
      let valueArr = [];
      array.forEach((element) => {
        valueArr.push(element.value);
      });
      return valueArr;
    },
  },
};
</script>