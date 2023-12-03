<template>
  <div style="background-color: #e5e5e5;">
    <div class="wrapper">
      <div class="noticeTitle">
        <div class="leftTitle">{{$t('Aboutus.problems.faq')}}</div>
        <div>
          <img src="../../assets/img_notice/point.png" alt />
        </div>
      </div>
      <div class="accordion">
        <div @click="showAnswer('first')">
          <div :class="{active:first}">
            <div class="leftTitle">
              <div>·</div>
              <div>{{$t('Aboutus.problems.first.one')}}</div>
            </div>
            <div>{{$t('Aboutus.problems.first.title')}}</div>
          </div>
          <div v-show="first" class="promblesList">
            <div class="promblesCard" v-for="(v,i) in proFirst " :key="i">
              <div class="Ptitle">
                <div class="pIcon">
                  <img src="../../assets/img_problems/iocn.png" alt />
                </div>
                <div class="pHead">{{v.name}}</div>
              </div>
              <div class="pContent">{{v.content}}</div>
            </div>
          </div>
        </div>
        <div @click="showAnswer('second')">
          <div :class="{active:second}">
            <div class="leftTitle">
              <div>·</div>
              <div>{{$t('Aboutus.problems.second.one')}}</div>
            </div>
            <div>{{$t('Aboutus.problems.second.title')}}</div>
          </div>
          <div v-show="second" class="promblesList">
            <div class="promblesCard" v-for="(v,i) in proSecond " :key="i">
              <div class="Ptitle">
                <div class="pIcon">
                  <img src="../../assets/img_problems/iocn.png" alt />
                </div>
                <div class="pHead">{{v.name}}</div>
              </div>
              <div class="pContent">{{v.content}}</div>
            </div>
          </div>
        </div>
        <div @click="showAnswer('third')">
          <div :class="{active:third}">
            <div class="leftTitle">
              <div>·</div>
              <div>{{$t('Aboutus.problems.third.one')}}</div>
            </div>
            <div>{{$t('Aboutus.problems.third.title')}}</div>
          </div>
          <div v-show="third" class="promblesList">
            <div class="promblesCard" v-for="(v,i) in proThird " :key="i">
              <div class="Ptitle">
                <div class="pIcon">
                  <img src="../../assets/img_problems/iocn.png" alt />
                </div>
                <div class="pHead">{{v.name}}</div>
              </div>
              <div class="pContent">{{v.content}}</div>
            </div>
          </div>
        </div>

        <div @click="showAnswer('fourth')">
          <div :class="{active:fourth}">
            <div class="leftTitle">
              <div>·</div>
              <div>{{$t('Aboutus.problems.fourth.one')}}</div>
            </div>
            <div>{{$t('Aboutus.problems.fourth.title')}}</div>
          </div>
          <div v-show="fourth" class="promblesList">
            <div class="promblesCard" v-for="(v,i) in proFourth " :key="i">
              <div class="Ptitle">
                <div class="pIcon">
                  <img src="../../assets/img_problems/iocn.png" alt />
                </div>
                <div class="pHead">{{v.name}}</div>
              </div>
              <div class="pContent">{{v.content}}</div>
            </div>
          </div>
        </div>
        <div @click="showAnswer('fifth')">
          <div :class="{active:fifth}">
            <div class="leftTitle">
              <div>·</div>
              <div>{{$t('Aboutus.problems.fifth.one')}}</div>
            </div>
            <div>{{$t('Aboutus.problems.fifth.title')}}</div>
          </div>
          <div v-show="fifth" class="promblesList">
            <div class="promblesCard" v-for="(v,i) in profifth " :key="i">
              <div class="Ptitle">
                <div class="pIcon">
                  <img src="../../assets/img_problems/iocn.png" alt />
                </div>
                <div class="pHead">{{v.name}}</div>
              </div>
              <div class="pContent">{{v.content}}</div>
            </div>
          </div>
        </div>

        <div @click="showAnswer('sixth')">
          <div :class="{active:sixth}">
            <div class="leftTitle">
              <div>·</div>
              <div>{{$t('Aboutus.problems.sixth.one')}}</div>
            </div>
            <div>{{$t('Aboutus.problems.sixth.title')}}</div>
          </div>
          <div v-show="sixth" class="promblesList">
            <div class="promblesCard" v-for="(v,i) in prosixth " :key="i">
              <div class="Ptitle">
                <div class="pIcon">
                  <img src="../../assets/img_problems/iocn.png" alt />
                </div>
                <div class="pHead">{{v.name}}</div>
              </div>
              <div class="pContent">{{v.content}}</div>
            </div>
          </div>
        </div>

        <div @click="showAnswer('seventh')">
          <div :class="{active:seventh}">
            <div class="leftTitle">
              <div>·</div>
              <div>{{$t('Aboutus.problems.seveth.one')}}</div>
            </div>
            <div>{{$t('Aboutus.problems.seveth.title')}}</div>
          </div>
          <div v-show="seventh" class="promblesList">
            <div class="promblesCard" v-for="(v,i) in proseventh " :key="i">
              <div class="Ptitle">
                <div class="pIcon">
                  <img src="../../assets/img_problems/iocn.png" alt />
                </div>
                <div class="pHead">{{v.name}}</div>
              </div>
              <div class="pContent">{{v.content}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    proFirst() {
      return [
        {
          name: this.$t("Aboutus.problems.first.list[0].name"),
          content: this.$t("Aboutus.problems.first.list[0].content")
        },
        {
          name: this.$t("Aboutus.problems.first.list[1].name"),
          content: this.$t("Aboutus.problems.first.list[1].content")
        },
        {
          name: this.$t("Aboutus.problems.first.list[2].name"),
          content: this.$t("Aboutus.problems.first.list[2].content")
        }
      ];
    },
    proSecond() {
      return [
        {
          name: this.$t("Aboutus.problems.second.list[0].name"),
          content: this.$t("Aboutus.problems.second.list[0].content")
        },
        {
          name: this.$t("Aboutus.problems.second.list[1].name"),
          content: this.$t("Aboutus.problems.second.list[1].content")
        }
      ];
    },
    proThird() {
      return [
        {
          name: this.$t("Aboutus.problems.third.list[0].name"),
          content: this.$t("Aboutus.problems.third.list[0].content")
        }
      ];
    },
    proFourth() {
      return [
        {
          name: this.$t("Aboutus.problems.fourth.list[0].name"),
          content: this.$t("Aboutus.problems.fourth.list[0].content")
        },
        {
          name: this.$t("Aboutus.problems.fourth.list[1].name"),
          content: this.$t("Aboutus.problems.fourth.list[1].content")
        }
      ];
    },
    profifth() {
      return [
        {
          name: this.$t("Aboutus.problems.fifth.list[0].name"),
          content: this.$t("Aboutus.problems.fifth.list[0].content")
        },
        {
          name: this.$t("Aboutus.problems.fifth.list[1].name"),
          content: this.$t("Aboutus.problems.fifth.list[1].content")
        }
      ];
    },
    prosixth() {
      return [
        {
          name: this.$t("Aboutus.problems.sixth.list[0].name"),
          content: this.$t("Aboutus.problems.sixth.list[0].content")
        },
        {
          name: this.$t("Aboutus.problems.sixth.list[1].name"),
          content: this.$t("Aboutus.problems.sixth.list[1].content")
        }
      ];
    },
    proseventh() {
      return [
        {
          name: this.$t("Aboutus.problems.seveth.list[0].name"),
          content: this.$t("Aboutus.problems.seveth.list[0].content")
        },
        {
          name: this.$t("Aboutus.problems.seveth.list[1].name"),
          content: this.$t("Aboutus.problems.seveth.list[1].content")
        }
      ];
    }
  },
  data() {
    return {
      first: true,
      second: false,
      third: false,
      fourth: false,
      fifth: false,
      sixth: false,
      seventh: false
    };
  },
  methods: {
    showAnswer(num) {
      if (num == "first") {
        this.first = true;
        this.second = false;
        this.third = false;
        this.fourth = false;
        this.fifth = false;
        this.sixth = false;
        this.seventh = false;
      }
      if (num == "second") {
        this.second = true;
        this.first = false;
        this.third = false;
        this.fourth = false;
        this.fifth = false;
        this.sixth = false;
        this.seventh = false;
      }
      if (num == "third") {
        this.third = true;
        this.first = false;
        this.second = false;
        this.fourth = false;
        this.fifth = false;
        this.sixth = false;
        this.seventh = false;
      }
      if (num == "fourth") {
        this.fourth = true;
        this.first = false;
        this.third = false;
        this.second = false;
        this.fifth = false;
        this.sixth = false;
        this.seventh = false;
      }
      if (num == "fifth") {
        this.fifth = true;
        this.first = false;
        this.third = false;
        this.fourth = false;
        this.second = false;
        this.sixth = false;
        this.seventh = false;
      }
      if (num == "sixth") {
        this.sixth = true;
        this.first = false;
        this.third = false;
        this.fourth = false;
        this.fifth = false;
        this.second = false;
        this.seventh = false;
      }
      if (num == "seventh") {
        this.seventh = true;
        this.first = false;
        this.third = false;
        this.fourth = false;
        this.fifth = false;
        this.sixth = false;
        this.second = false;
      }
    }
  }
};
</script>

<style lang="less" scoped>
.wrapper {
  height: 1400px;
  padding: 96px 0 96px;
  width: 1248px;
  margin: 0 auto;

  .noticeTitle {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    height: 99px;
    border-bottom: 1px solid #bebebe;
    margin-bottom: 48px;
    padding-bottom: 48px;
    .leftTitle {
      font-size: 40px;
      color: #000;
    }
  }
  .accordion {
    & > div {
      padding: 0 47px;
      margin-bottom: 24px;
      margin-top: 24px;
      background: #fff;
      & > div:nth-child(1) {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .leftTitle {
          display: flex;
          align-items: center;
          & > div:nth-child(1) {
            color: #ff7000;
            font-size: 40px;
          }
        }
      }
    }
  }
}
.promblesList {
  margin-top: 48px;
  padding-bottom: 54px;
  .Ptitle {
    display: flex;
    align-items: center;
    margin-bottom: 24px;
    .pIcon {
      display: flex;
      align-items: center;
      img {
        width: 28px;
        height: 28px;
        margin-right: 67px;
      }
    }
    .pHead {
      font-size: 24px;
      color: #716f6f;
    }
  }
  .pContent {
    font-size: 16px;
    color: rgba(0, 0, 0, 0.7);
    margin-left: 96px;
  }
}
.promblesCard {
  margin-bottom: 54px;
}
.active {
  border-bottom: 1px solid #bebebe;
}
</style>