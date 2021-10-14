<template>
  <div class="home">
    <infoDialog
      v-model="showInfoDialog"
      :inputCard="this.inputCard"
    ></infoDialog>
    <v-container>
      <v-card-title>基础筛选: </v-card-title>
      <v-row>
        <v-col>
          <v-btn-toggle
            v-model="cardSearch.class"
            tile
            @change="searchData"
            color="deep-purple accent-3"
            group
          >
            <v-btn value="BATTLE" color="red" class="red--text"> BATTLE </v-btn>
            <v-btn value="ASSIST" color="blue" class="blue--text">
              ASSIST
            </v-btn>
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
            <v-btn value="红" color="red" class="red--text"> 红 </v-btn>
            <v-btn value="蓝" color="blue" class="blue--text"> 蓝 </v-btn>
            <v-btn value="绿" color="green" class="green--text"> 绿 </v-btn>
            <v-btn value="黄" color="yellow" class="amber--text"> 黄 </v-btn>
            <v-btn value="紫" color="purple" class="purple--text"> 紫 </v-btn>
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
              <v-icon> mdi-book-open-variant </v-icon>异能攻击
            </v-btn>
            <v-btn value="物理攻击" color="blue" class="blue--text">
              <v-icon> mdi-fencing </v-icon> 物理攻击
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
            label="阵营"
            filled
            @change="searchData"
          ></v-select
        ></v-col>
        <v-col>
          <v-select
            v-model="cardSearch.obtain"
            :items="obtain"
            label="入手途径"
            filled
            disabled
            @change="searchData"
          ></v-select
        ></v-col>
      </v-row>
      <v-card-title>技能&必杀技效果: </v-card-title>
      <v-row>
        <v-col>
          <v-chip-group
            v-model="effect.specialState"
            column
            multiple
            @change="searchData"
          >
            <v-chip
              filter
              v-for="(tag, index) in specialState"
              :key="index"
              :value="tag"
            >
              {{ tag }}
            </v-chip>
          </v-chip-group>
        </v-col>
      </v-row>
      <v-card-title>潜能效果: </v-card-title>
      <v-row>
        <v-col>
          <v-chip-group
            v-model="effect.potentialTags"
            column
            multiple
            @change="searchData"
          >
            <v-chip
              filter
              v-for="(tag, index) in potentialTags"
              :key="index"
              :value="tag"
            >
              {{ tag }}
            </v-chip>
          </v-chip-group>
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <v-card-title>
        筛选结果中搜索
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
        :items-per-page="20"
        :search="search"
        @click:row="handleClick"
        class="elevation-1"
      >
        <template v-slot:item.img="{ item }">
          <v-img
            max-height="73"
            max-width="73"
            :src="require('@/assets/pic/s/' + item.img + '.jpg')"
          >
          </v-img>
        </template>
        <template v-slot:item.Chinese.attributes="{ item }">
          <v-chip :color="getColor(item.Chinese.attributes)" dark>
            {{ item.Chinese.attributes }}
          </v-chip>
        </template>
        <template v-slot:item.Japanese.attackDirection="{ item }">
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
        <!-- <template v-slot:item.Chinese.obtain="{ item }">
          {{ item.Chinese.limited }}{{ item.Chinese.obtain }}
        </template> -->
      </v-data-table>
    </v-container>
  </div>
</template>

<script>
import card from "../assets/data.json";
import infoDialog from "./infoDialog";
export default {
  name: "Home",
  data() {
    return {
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
      },
      specialState: [
        "护盾",
        "贯穿",
        "不屈",
        "HP恢复妨碍",
        "强化解除耐性",
        "弱化状态耐性",
        "技能封印",
        "必杀技封印",
        "必杀技封印耐性",
        "辅助封印",
        "辅助封印耐性",
        "强化妨碍",
        "攻击力提升妨碍",
        "移动不能",
        "气绝",
        "感电",
        "感电耐性",
        "天罚",
        "集中状态",
        "持续被害",
        "出血",
        "制御不能",
        "矢量操作",
        "强制咏唱待机",
        "外部供奉",
        "攻击方向增加",
        "攻击方向减少",
        "暴击必中",
        "物攻增加",
        "物攻降低",
        "异攻增加",
        "异攻降低",
        "物防增加",
        "物防降低",
        "异防增加",
        "异防降低",
        "暴击发生率增加",
        "暴击发生率降低",
        "暴击回避率增加",
        "暴击发生率降低",
        "暴击威力增加",
        "暴击威力降低",
        "物理伤害减轻",
        "异能伤害减轻",
        "属性伤害减轻",
        "属性耐性降低",
        "强化状态解除",
        "数值强化解除",
        "特殊状态解除",
        "攻击强化解除",
        "防御强化解除",
        "弱化状态解除",
        "弱体化解除妨害",
        "数值弱化解除",
        "状态异常解除",
        "攻击弱化解除",
        "防御弱化解除",
        "SP获得量增加",
        "SP获得量降低",
        "SP增加",
        "SP减少",
        "技能冷却时间",
        "必杀技冷却时间",
        "行动槽减少",
        "HP回复",
        "HP减少",
      ],
      potentialTags: [
        "与该角色同色全体队友能力向上",
        "与该角色同色全体队友物理能力向上",
        "与该角色同色全体队友异能能力向上",
        "与该角色同色全体队友对克制属性角色物理防御力向上",
        "与该角色同色全体队友对克制属性角色异能防御力向上",
        "与该角色同色全体队友对克制属性角色物理攻击力向上",
        "与该角色同色全体队友对克制属性角色异能攻击力向上",
        "物攻向上",
        "物防向上",
        "异攻向上",
        "异防向上",
        "HP向上",
        "器用向上",
        "方向攻击强化",
        "集中力向上",
        "判断力向上",
        "SP获得量向上",
        "魔术连携力向上",
        "科学连携力向上",
        "术式解析",
        "构造解析",
        "科学支援",
        "魔术支援",
      ],
      text: [],
      search: "",
      headers: [
        {
          text: "头像",
          align: "left",
          sortable: false,
          value: "img",
        },
        {
          text: "中文卡名",
          align: "start",
          sortable: false,
          value: "nameCn",
        },
        { text: "原名", value: "nameJp", sortable: false },
        { text: "阵营", value: "Chinese.faction" },
        { text: "星级", value: "Japanese.initialrarity" },
        { text: "颜色", value: "Chinese.attributes" },
        // { text: "卡种", value: "Chinese.class" },
        { text: "类型", value: "Chinese.attackMethod" },
        { text: "方向", value: "Japanese.attackDirection" },
        { text: "HP", value: "Japanese.hp" },
        { text: "器用", value: "Japanese.dexterity" },
        { text: "异攻", value: "Japanese.physicalAttack" },
        { text: "物攻", value: "Japanese.powerAttack" },
        { text: "异防", value: "Japanese.physicalDefense" },
        { text: "物防", value: "Japanese.powerDefense" },
        // { text: "入手", value: "Chinese.obtain" },
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
      if (filters.potentialTags) {
        resArr = this.searchSkillValues(
          resArr,
          "potentialTags",
          filters.potentialTags
        );
      }
      delete filters.specialState;
      delete filters.potentialTags;
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
        specialState: this.effect.specialState,
        potentialTags: this.effect.potentialTags,
      };
      keys = this.deleteEmptyKey(keys);
      this.card = this.searchKeysValues(card, keys);
    },
  },
};
</script>