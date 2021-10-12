<template>
  <v-expansion-panels>
    <v-expansion-panel v-for="(item, i) in 5" :key="i">
      <v-expansion-panel-header> 矢量操作 </v-expansion-panel-header>
      <v-expansion-panel-content>
        受到所属侧包含‘科学侧’的攻击的伤害的情况下，将伤害无效化再进行反击。
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
export default {
  name: "strengthen",
  data() {
    return {

    };
  },
};
</script>

<style>
</style>