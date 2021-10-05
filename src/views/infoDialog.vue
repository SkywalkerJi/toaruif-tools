  <template>
  <v-dialog transition="dialog-top-transition" max-width="600" v-model="show">
    <template v-slot:default="dialog">
      <v-card>
        <v-toolbar color="primary" dark>卡片详情</v-toolbar>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col>
                <v-text-field
                  dense
                  v-model="inputCard.chinese"
                  label="卡名"
                  outlined
                  readonly
                ></v-text-field>
              </v-col>
              <v-col>
                <v-text-field
                  dense
                  v-model="inputCard.attributes"
                  label="颜色"
                  outlined
                  readonly
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-textarea
                  dense
                  v-model="inputCard.skill1Effect"
                  label="技能"
                  outlined
                  readonly
                  rows="2"
                ></v-textarea>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-textarea
                  dense
                  v-model="inputCard.nirvanaEffect"
                  label="大招"
                  outlined
                  readonly
                  rows="2"
                ></v-textarea>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-textarea
                  dense
                  v-model="inputCard.potentialAbility1Effect"
                  label="潜在能力1"
                  outlined
                  readonly
                  rows="2"
                ></v-textarea>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-textarea
                  dense
                  v-model="inputCard.potentialAbility2Effect"
                  label="潜在能力2"
                  outlined
                  readonly
                  rows="2"
                ></v-textarea>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-text-field
                  dense
                  v-model="inputCard.attackDirection"
                  label="方向"
                  outlined
                  readonly
                ></v-text-field>
              </v-col>
              <v-col>
                <v-text-field
                  dense
                  v-model="inputCard.attackMethod"
                  label="类型"
                  outlined
                  readonly
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-text-field
                  dense
                  v-model="inputCard.class"
                  label="卡种"
                  outlined
                  readonly
                ></v-text-field>
              </v-col>
              <v-col>
                <v-text-field
                  dense
                  v-model="inputCard.faction"
                  label="阵营"
                  outlined
                  readonly
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-text-field
                  dense
                  v-model="inputCard.initialrarity"
                  label="星级"
                  outlined
                  readonly
                ></v-text-field>
              </v-col>
              <v-col>
                <v-text-field
                  dense
                  v-model="inputCard.obtain"
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
    return {};
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
  created() {},
  methods: {},
};
</script>