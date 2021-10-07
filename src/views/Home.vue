<template>
  <div class="home">
    <infoDialog
      v-model="showInfoDialog"
      :inputCard="this.inputCard"
    ></infoDialog>
    <v-container>
      <v-row>
        <v-col>
          <v-card-title
            >入手途径:
            <v-select
              v-model="cardSearch.obtain"
              :items="obtain"
              :error-messages="errors"
              label="目前勿选，需要数据"
              data-vv-name="select"
              required
              disabled
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
      <v-row>
        <v-col>
          <v-card-title
            >特殊状态效果:
            <v-chip-group
              v-model="effect.key1"
              column
              multiple
              @change="searchData"
            >
              <v-chip filter>护盾</v-chip>
              <v-chip filter>贯穿</v-chip>
              <v-chip filter>不屈</v-chip>
              <v-chip filter>HP恢复妨碍</v-chip>
              <v-chip filter>强化解除耐性</v-chip>
              <v-chip filter>弱化状态耐性</v-chip>
              <v-chip filter>弱化解除耐性</v-chip>
              <v-chip filter>技能封印</v-chip>
              <v-chip filter>必杀技封印</v-chip>
              <v-chip filter>必杀技封印耐性</v-chip>
              <v-chip filter>辅助封印</v-chip>
              <v-chip filter>辅助封印耐性</v-chip>
              <v-chip filter>强化妨碍</v-chip>
              <v-chip filter>攻击力提升妨碍</v-chip>
              <v-chip filter>移动不能</v-chip>
              <v-chip filter>气绝</v-chip>
              <v-chip filter>感电</v-chip>
              <v-chip filter>天罚</v-chip>
              <v-chip filter>集中状态</v-chip>
              <v-chip filter>持续被害</v-chip>
              <v-chip filter>出血</v-chip>
              <v-chip filter>制御不能</v-chip>
              <v-chip filter>矢量操作</v-chip>
              <v-chip filter>强制咏唱待机</v-chip>
              <v-chip filter>外部供奉</v-chip>
              <v-chip filter>攻击方向</v-chip>
            </v-chip-group>
          </v-card-title>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-card-title
            >数值变化效果:
            <v-chip-group v-model="effect.key2" column multiple>
              <v-chip filter>暴击必中</v-chip>
              <v-chip filter>物理攻击力</v-chip>
              <v-chip filter>异能攻击力</v-chip>
              <v-chip filter>物理防御力</v-chip>
              <v-chip filter>异能防御力</v-chip>
              <v-chip filter>暴击发生率</v-chip>
              <v-chip filter>暴击回避率</v-chip>
              <v-chip filter>暴击威力</v-chip>
              <v-chip filter>威力上升</v-chip>
              <v-chip filter>伤害减轻</v-chip>
              <v-chip filter>属性伤害耐性</v-chip>
            </v-chip-group>
          </v-card-title>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-card-title
            >其他技能效果:
            <v-chip-group v-model="effect.key3" column multiple>
              <v-chip filter>强化状态解除</v-chip>
              <v-chip filter>强化buff解除</v-chip>
              <v-chip filter>防御力解除</v-chip>
              <v-chip filter>特殊状态解除</v-chip>
              <v-chip filter>弱体化状态解除</v-chip>
              <v-chip filter>攻击下降状态解除</v-chip>
              <v-chip filter>造成伤害无效化的特殊状态无视</v-chip>
              <v-chip filter>sp获得量</v-chip>
              <v-chip filter>sp</v-chip>
              <v-chip filter>这次攻击更容易发生暴击</v-chip>
              <v-chip filter>这次攻击必定发生暴击</v-chip>
              <v-chip filter>必杀技冷却时间</v-chip>
              <v-chip filter>技能冷却时间</v-chip>
              <v-chip filter>hp</v-chip>
              <v-chip filter>物理防御力当做物理攻击力</v-chip>
            </v-chip-group>
          </v-card-title>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-card-title
            >潜能:
            <v-chip-group v-model="effect.key4" column multiple>
              <v-chip filter>与该角色同色全体队友能力向上</v-chip>
              <v-chip filter>与该角色同色全体队友物理能力向上</v-chip>
              <v-chip filter>与该角色同色全体队友异能能力向上</v-chip>
              <v-chip filter
                >与该角色同色全体队友对克制属性角色物理防御力向上</v-chip
              >
              <v-chip filter
                >与该角色同色全体队友对克制属性角色异能防御力向上</v-chip
              >
              <v-chip filter
                >与该角色同色全体队友对克制属性角色物理攻击力向上</v-chip
              >
              <v-chip filter
                >与该角色同色全体队友对克制属性角色异能攻击力向上</v-chip
              >
              <v-chip filter>物攻向上</v-chip>
              <v-chip filter>物防向上</v-chip>
              <v-chip filter>异攻向上</v-chip>
              <v-chip filter>异防向上</v-chip>
              <v-chip filter>器用向上</v-chip>
              <v-chip filter>方向攻击强化</v-chip>
              <v-chip filter>集中力向上</v-chip>
              <v-chip filter>判断力向上</v-chip>
              <v-chip filter>sp获得量向上</v-chip>
              <v-chip filter>魔术连携力向上</v-chip>
              <v-chip filter>科学连携力向上</v-chip>
              <v-chip filter>术式解析</v-chip>
              <v-chip filter>构造解析</v-chip>
              <v-chip filter>科学支援</v-chip>
              <v-chip filter>魔术支援</v-chip>
            </v-chip-group>
          </v-card-title>
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
        :items-per-page="10"
        :search="search"
        @click:row="handleClick"
        class="elevation-1"
      >
        <template v-slot:item.Chinese.attributes="{ item }">
          <v-chip :color="getColor(item.Chinese.attributes)" dark>
            {{ item.Chinese.attributes }}
          </v-chip>
        </template>
        <template v-slot:item.Chinese.obtain="{ item }">
          {{ item.Chinese.limited }}{{ item.Chinese.obtain }}
        </template>
      </v-data-table>
    </v-container>
  </div>
</template>

<script>
// import card from "../assets/card";
import card from "../assets/data2.json";
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
        key1: [],
        key2: [],
        key3: [],
        key4: [],
      },
      text: [],
      search: "",
      headers: [
        {
          text: "中文卡名",
          align: "start",
          sortable: false,
          value: "nameCn",
        },
        { text: "原名", value: "nameJp" },
        { text: "阵营", value: "Chinese.faction" },
        { text: "星级", value: "Chinese.initialrarity" },
        { text: "颜色", value: "Chinese.attributes" },
        { text: "卡种", value: "Chinese.class" },
        { text: "类型", value: "Chinese.attackMethod" },
        { text: "方向", value: "Chinese.attackDirection" },
        // { text: "HP", value: "hp" },
        // { text: "器用", value: "dexterity" },
        // { text: "异攻", value: "physicalAttack" },
        // { text: "物攻", value: "powerAttack" },
        // { text: "异防", value: "physicalDefense" },
        // { text: "物防", value: "powerDefense" },
        { text: "入手", value: "Chinese.obtain" },
        // { text: "技能", value: "Chinese.skill1Effect" },
        // { text: "大招", value: "Chinese.nirvanaEffect" },
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
    checker (arr, target){
      return(target.every(v => arr.includes(v)))
    },
    // 查询函数(被查询数组,关键词数组)
    searchKeysValues(lists, filters) {
      let resArr = [];
      // console.log(filters)
      lists.filter((item) => {
        let flag = 1;
        for (let i in filters) {
          if (item.Chinese[i]) {
            if (!item.Chinese[i].includes(filters[i])) {
              flag = 0;
            }
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
    handleClick(value) {
      this.showInfoDialog = true;
      this.inputCard = value;
    },
    // 搜索
    searchData() {
      let keys = this.deleteEmptyKey(this.cardSearch);
      if (this.cardSearch.attackDirection.length > 0) {
        keys.attackDirection = "";
        for (let i = 0; i < this.cardSearch.attackDirection.length; i++) {
          keys.attackDirection += this.cardSearch.attackDirection[i];
        }
      }
      this.searchKeysValues(card, keys);
    },
  },
};
</script>