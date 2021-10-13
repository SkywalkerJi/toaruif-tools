<template>
  <div class="container">
    <markdown-it-vue
      class="md-body"
      :content="content"
      :options="options"
      @render-complete="hdlCmplete"
    />
  </div>
</template>

<script>
import MarkdownItVue from "markdown-it-vue";
import 强化状态 from "../../assets/强化状态";
import 弱体化状态 from "../../assets/弱体化状态";
import 技能必杀技的效果 from "../../assets/技能必杀技的效果";
import 关于强化状态与弱体化状态的攻击方向 from "../../assets/关于强化状态与弱体化状态的攻击方向";

export default {
  name: "strengthen",
  props: {
    inputTitle: String,
  },
  data() {
    return {
      title: this.inputTitle,
      options: {
        markdownIt: {
          linkify: true,
        },
        linkAttributes: {
          attrs: {
            target: "_blank",
            rel: "noopener",
          },
        },
      },
      content: "",
    };
  },
  components: {
    MarkdownItVue,
  },
  methods: {
    hdlCmplete() {
      // console.log("reder complete");
    },
    write() {
      switch (this.inputTitle) {
        case "强化状态":
          this.content = 强化状态;
          break;
        case "弱体化状态":
          this.content = 弱体化状态;
          break;
        case "技能·必杀技的效果":
          this.content = 技能必杀技的效果;
          break;
        case "关于强化状态与弱体化状态的攻击方向":
          this.content = 关于强化状态与弱体化状态的攻击方向;
          break;
      }
    },
  },
  created() {
    this.write();
  },
  mounted() {},
};
</script>

<style>
</style>