<template>
  <div class="home">
    <v-data-table
      :headers="headers"
      :items="weapon"
      :items-per-page="10"
      class="elevation-1"
    ></v-data-table>
  </div>
</template>

<script>
import weapon from '../assets/weapon'
export default {
  name: "Home",
  data: () => ({
    headers: [
      {
        text: "Weapon",
        align: "start",
        sortable: false,
        value: "name",
      },
      { text: "Type", value: "class" },
      { text: "Ammo", value: "ammo" },
      { text: "Projectile Speed(UPS)", value: "projectileSpeed" },
      { text: "Protein (g)", value: "protein" },
      { text: "Iron (%)", value: "iron" },
    ],
  }),
  created:function(){
    this.weapon=weapon
  }

};
</script>