<template>
  <div class="help">
    <v-card>
      <v-tabs v-model="tab" align-with-title>
        <v-tabs-slider color="blue"></v-tabs-slider>
        <v-tab v-for="(item,i) in items" :key="i">
          {{ item }}
        </v-tab>
      </v-tabs>
      <v-tabs-items v-model="tab">
        <v-tab-item v-for="(item,i)  in items" :key="i">
          <strengthen :inputTitle="item"></strengthen>
        </v-tab-item>
      </v-tabs-items>
    </v-card>
  </div>
</template>

<script>
import strengthen from "./help/strengthen.vue";
export default {
  name: "Help",
  data() {
    return {
      tab: null,
      items: [
        "强化状态",
        "弱体化状态",
        "技能·必杀技的效果",
        "关于强化状态与弱体化状态的攻击方向",
      ],
    };
  },
  components: {
    strengthen,
  },
  methods: {},
};
</script>

<style>
</style>