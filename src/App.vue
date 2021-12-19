<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">とある魔術の禁書目録</v-list-item-title>
          <v-list-item-title class="text-h6">幻想収束 辅助工具集</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" :to="item.to" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      color="#fcb69f"
      dark
      src="AAA.png"
      prominent
      shrink-on-scroll
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
        ></v-img>
      </template>

      <v-app-bar-nav-icon @click="drawer=!drawer"></v-app-bar-nav-icon>

      <v-app-bar-title>{{$route.name}}
      </v-app-bar-title>

      <v-spacer></v-spacer>

      <!-- <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn> -->
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
    items: [
      { title: "卡片筛选", icon: "mdi-card-search-outline", to: "/" },
      { title: "效果帮助", icon: "mdi-help-box", to: "/help" },
      { title: "卡图征集", icon: "mdi-clipboard-check-multiple-outline", to: "/nopic" },
      { title: "参与汉化", icon: "mdi-translate", to: "/paratranz" },
      { title: "关于", icon: "mdi-information-variant", to: "/about" },
    ],
    right: null,
  }),
};
</script>