  <template>
  <v-dialog transition="dialog-top-transition" max-width="700" v-model="show">
    <template v-slot:default="dialog">
      <v-card>
        <v-toolbar color="primary" dark>{{ $t("卡片详情") }}</v-toolbar>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col>
                <v-carousel
                  v-model="model"
                  height="auto"
                  :show-arrows="true"
                  hide-delimiter-background
                  delimiter-icon="mdi-minus"
                  show-arrows-on-hover
                >
                  <v-carousel-item
                    v-for="(url, i) in inputCard.imgUrl"
                    :key="i"
                  >
                    <!-- <v-sheet :color="colors" height="100%" tile>
                    <v-row class="fill-height" align="center" justify="center">
                      <div class="text-h2">{{ i ==1?"6星":"初始" }} 卡图</div>
                    </v-row>
                  </v-sheet> -->
                    <v-img max-height="300" :src="url" v-if="inputCard.img">
                    </v-img>
                  </v-carousel-item>
                </v-carousel>
              </v-col>
            </v-row>
            <v-row>
              <v-col v-if="$i18n.locale != 'ja'">
                <v-text-field
                  dense
                  v-model="inputCard.nameCn"
                  label="中文卡名"
                  outlined
                  readonly
                ></v-text-field>
              </v-col>
              <v-col v-if="$i18n.locale == 'ja'">
                <v-text-field
                  dense
                  v-model="inputCard.nameJp"
                  label="キャラ名"
                  outlined
                  readonly
                ></v-text-field>
              </v-col>
              <v-col v-if="$i18n.locale != 'ja'">
                <v-text-field
                  dense
                  v-model="inputCard.Chinese.attributes"
                  label="颜色"
                  outlined
                  readonly
                ></v-text-field>
              </v-col>
              <v-col v-if="$i18n.locale == 'ja'">
                <v-text-field
                  dense
                  v-model="inputCard.Japanese.attributes"
                  label="属性"
                  outlined
                  readonly
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col v-if="$i18n.locale != 'ja'">
                <v-textarea
                  dense
                  v-model="inputCard.Chinese.skill1Effect"
                  label="技能"
                  outlined
                  readonly
                  rows="2"
                ></v-textarea>
              </v-col>
              <v-col v-if="$i18n.locale == 'ja'">
                <v-textarea
                  dense
                  v-model="inputCard.Japanese.skill1Effect"
                  label="スキル"
                  outlined
                  readonly
                  rows="2"
                ></v-textarea>
              </v-col>
            </v-row>
            <v-row>
              <v-col
                v-if="inputCard.Chinese.skill2Effect && $i18n.locale != 'ja'"
              >
                <v-textarea
                  dense
                  v-model="inputCard.Chinese.skill2Effect"
                  label="技能2"
                  outlined
                  readonly
                  rows="2"
                ></v-textarea>
              </v-col>
              <v-col
                v-if="inputCard.Japanese.skill2Effect && $i18n.locale == 'ja'"
              >
                <v-textarea
                  dense
                  v-model="inputCard.Japanese.skill2Effect"
                  label="スキル2"
                  outlined
                  readonly
                  rows="2"
                ></v-textarea>
              </v-col>
            </v-row>
            <v-row>
              <v-col
                v-if="
                  inputCard.Chinese.class == 'BATTLE' && $i18n.locale != 'ja'
                "
              >
                <v-textarea
                  dense
                  v-model="inputCard.Chinese.nirvanaEffect"
                  label="必杀技"
                  outlined
                  readonly
                  rows="2"
                ></v-textarea>
              </v-col>
              <v-col
                v-if="
                  inputCard.Chinese.class == 'BATTLE' && $i18n.locale == 'ja'
                "
              >
                <v-textarea
                  dense
                  v-model="inputCard.Japanese.nirvanaEffect"
                  label="必殺技"
                  outlined
                  readonly
                  rows="2"
                ></v-textarea>
              </v-col>
            </v-row>
            <v-row>
              <v-col
                v-if="
                  inputCard.Chinese.potentialAbility1Effect &&
                  $i18n.locale != 'ja'
                "
              >
                <v-textarea
                  dense
                  v-model="inputCard.Chinese.potentialAbility1Effect"
                  label="潜在能力1"
                  outlined
                  readonly
                  rows="2"
                ></v-textarea>
              </v-col>
              <v-col
                v-if="
                  !inputCard.Chinese.potentialAbility1Effect &&
                  $i18n.locale == 'ja'
                "
              >
                <v-textarea
                  dense
                  v-model="inputCard.Japanese.potentialAbility1Effect"
                  label="潜在能力1"
                  outlined
                  readonly
                  rows="2"
                ></v-textarea>
              </v-col>
            </v-row>
            <v-row>
              <v-col
                v-if="
                  inputCard.Chinese.potentialAbility2Effect &&
                  $i18n.locale != 'ja'
                "
              >
                <v-textarea
                  dense
                  v-model="inputCard.Chinese.potentialAbility2Effect"
                  label="潜在能力2"
                  outlined
                  readonly
                  rows="2"
                ></v-textarea>
              </v-col>
              <v-col
                v-if="
                  inputCard.Japanese.potentialAbility2Effect &&
                  $i18n.locale == 'ja'
                "
              >
                <v-textarea
                  dense
                  v-model="inputCard.Japanese.potentialAbility2Effect"
                  label="潜在能力2"
                  outlined
                  readonly
                  rows="2"
                ></v-textarea>
              </v-col>
            </v-row>
            <v-row>
              <v-col v-if="inputCard.Chinese.class == 'BATTLE'">
                <v-text-field
                  dense
                  v-model="inputCard.arrow"
                  label="方向"
                  outlined
                  readonly
                ></v-text-field>
              </v-col>
              <v-col v-if="$i18n.locale != 'ja'">
                <v-text-field
                  dense
                  v-model="inputCard.Chinese.attackMethod"
                  label="类型"
                  outlined
                  readonly
                ></v-text-field>
              </v-col>
              <v-col v-if="$i18n.locale == 'ja'">
                <v-text-field
                  dense
                  v-model="inputCard.Japanese.attackMethod"
                  label="タイプ"
                  outlined
                  readonly
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col v-if="$i18n.locale != 'ja'">
                <v-text-field
                  dense
                  v-model="inputCard.Chinese.class"
                  label="卡种"
                  outlined
                  readonly
                ></v-text-field>
              </v-col>
              <v-col v-if="$i18n.locale == 'ja'">
                <v-text-field
                  dense
                  v-model="inputCard.Japanese.class"
                  label="タイプ"
                  outlined
                  readonly
                ></v-text-field>
              </v-col>
              <v-col v-if="$i18n.locale != 'ja'">
                <v-text-field
                  dense
                  v-model="inputCard.Chinese.faction"
                  label="阵营"
                  outlined
                  readonly
                ></v-text-field>
              </v-col>
              <v-col v-if="$i18n.locale == 'ja'">
                <v-text-field
                  dense
                  v-model="inputCard.Japanese.faction"
                  label="サイド"
                  outlined
                  readonly
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-text-field
                  dense
                  v-model="inputCard.Japanese.initialrarity"
                  label="星级"
                  outlined
                  readonly
                ></v-text-field>
              </v-col>
              <v-col v-if="$i18n.locale != 'ja'">
                <v-text-field
                  dense
                  v-model="inputCard.Chinese.obtain"
                  label="入手"
                  outlined
                  readonly
                ></v-text-field>
              </v-col>
              <v-col v-if="$i18n.locale == 'ja'">
                <v-text-field
                  dense
                  v-model="inputCard.Japanese.obtain"
                  label="入手"
                  outlined
                  readonly
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions class="justify-end">
          <v-btn text @click="dialog.value = false">关闭</v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>
   
<script>
export default {
  name: "infoDialog",
  props: {
    value: Boolean,
    inputCard: {},
  },
  data() {
    return {
      model: 0,
    };
  },
  computed: {
    show: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      },
    },
  },
  mounted() {},
  methods: {},
};
</script>