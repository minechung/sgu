<template>
  <div>
    <div style="padding:0;min-width:1200px">
      <Banner></Banner>
      <div style="background:#f4f4f4">
        <div class="landEcological">
          <div class="noticeTitle">
            <div class="leftTitle">{{$t('Apply.landEco.title')}}</div>
            <div>
              <img src="../assets/img_notice/point.png" alt />
            </div>
          </div>
          <div class="ecologicalDescript">
            {{$t('Apply.landEco.des')}}
            <br />
            {{$t('Apply.landEco.desS')}}
          </div>
          <div class="ecologicalImgOne">
            <img v-show="cn" src="../assets/img_apply/背景1.jpg" alt />
            <img v-show="en" src="../assets/img_apply/落地应用.jpg" alt />
          </div>
          <div class="sguWallet">
            <div class="leftWallet">
              <div class="leftTitle">SGU wallet</div>
              <div class="leftPointOrg"></div>
              <div class="leftContentHead">{{$t('Apply.sguWallet.des')}}</div>
              <div class="leftMainContnet">{{$t('Apply.sguWallet.content')}}</div>
            </div>
            <div class="rightImg">
              <div>
                <img src="../assets/img_apply/安卓.png" alt />
                <div>{{$t('Apply.sguWallet.andown')}}</div>
              </div>
              <div>
                <img src="../assets/img_apply/苹果.png" alt />
                <div>{{$t('Apply.sguWallet.iosdown')}}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="sugMarket">
        <div class="marketImg">
          <img src="../assets/img_apply/背景2.jpg" alt />
        </div>
        <div class="marketDesript">
          <div class="marketRightHead">{{$t('Apply.mall.title')}}</div>
          <div class="marketRightPoint"></div>
          <div class="marketRightMain">{{$t('Apply.mall.content')}}</div>
        </div>
      </div>
      <div style="background: #e5e5e5;">
        <div class="sugApp">
          <div class="appLeftWrapper">
            <div class="apphead">{{$t('Apply.APP.title')}}</div>
            <div class="appLeftPoint"></div>
            <div class="appContent">{{$t('Apply.APP.content')}}</div>
            <div class="appBottomWrapper">
              <div class="appCard" v-for="(v,i) in appicon" :key="i">
                <img :src="v.url" alt />
                <div>{{v.title}}</div>
              </div>
            </div>
          </div>
          <div class="appRightWrapper">
            <img src="../assets/img_apply/app.png" alt />
          </div>
        </div>
      </div>

      <div class="taskCenter">
        <div class="taskTitle">
          <div class="taskHead">{{$t('Apply.taskCenter.title')}}</div>
          <div class="taskPoint"></div>
          <div class="taskDescript">{{$t('Apply.taskCenter.content')}}</div>
        </div>
        <div class="taskImg">
          <img v-show="cn" src="../assets/img_apply/背景3.jpg" alt />
          <img v-show="en" src="../assets/img_apply/落地应用2.jpg" alt />
        </div>
        <div class="taskBottom">
          <div class="taskBottomImg">
            <img src="../assets/img_apply/共识网络.png" alt />
          </div>
          <div class="taskBottomDes">
            <div class="taskBottomTitle">{{$t('Apply.dev.title')}}</div>
            <div class="taskBottomPoint"></div>
            <div class="taskBottomRightDes">
              {{$t('Apply.dev.content')}}
              <br />
              {{$t('Apply.dev.contentSecond')}}
            </div>
          </div>
        </div>
      </div>

      <div style="background: #f4f4f4;">
        <div class="trading">
          <div class="tradingWrapper">
            <div class="leftTRadingBar">
              <div class="tradingTitle">{{$t('Apply.trde.title')}}</div>
              <div class="tradingPoint"></div>
              <div class="tradingDes">{{$t('Apply.trde.content')}}</div>
            </div>
            <div class="rightImg">
              <img v-show="cn" src="../assets/img_apply/资产交易平台.png" alt />
              <img v-show="en" src="../assets/img_apply/应用落地3.png" alt />
            </div>
          </div>
        </div>
      </div>

      <Gamecenter></Gamecenter>
    </div>
  </div>
</template>

<script>
import Gamecenter from "../components/indexView/Gamecenter";
import Banner from "../components/Banner";
export default {
  components: {
    Gamecenter,
    Banner
  },

  mounted() {
    var lang = localStorage.getItem("locale");
    this.cn = lang == "zh" ? true : false;
    this.en = lang == "en" ? true : false;
  },
  beforeUpdate() {
    var lang = localStorage.getItem("locale");
    this.cn = lang == "zh" ? true : false;
    this.en = lang == "en" ? true : false;
  },
  data() {
    return {
      cn: true,
      en: false
    };
  },
  computed: {
    appicon() {
      return [
        {
          title: this.$t("Apply.APP.list[0]"),
          url: require("../assets/img_apply/社区功能-icon.png")
        },
        {
          title: this.$t("Apply.APP.list[1]"),
          url: require("../assets/img_apply/社区入驻-icon.png")
        },
        {
          title: this.$t("Apply.APP.list[2]"),
          url: require("../assets/img_apply/直播学习-icon.png")
        },
        {
          title: this.$t("Apply.APP.list[3]"),
          url: require("../assets/img_apply/实时交易-icon.png")
        },
        {
          title: this.$t("Apply.APP.list[4]"),
          url: require("../assets/img_apply/手机挖矿-icon.png")
        },
        {
          title: this.$t("Apply.APP.list[5]"),
          url: require("../assets/img_apply/商城天下-icon.png")
        },
        {
          title: this.$t("Apply.APP.list[6]"),
          url: require("../assets/img_apply/任务发布-icon.png")
        },
        {
          title: this.$t("Apply.APP.list[7]"),
          url: require("../assets/img_apply/日常任务-icon.png")
        },
        {
          title: this.$t("Apply.APP.list[8]"),
          url: require("../assets/img_apply/数字钱包-icon.png")
        },
        {
          title: this.$t("Apply.APP.list[9]"),
          url: require("../assets/img_apply/游戏世界-icon.png")
        },
        {
          title: this.$t("Apply.APP.list[10]"),
          url: require("../assets/img_apply/资讯发布-icon.png")
        },
        {
          title: this.$t("Apply.APP.list[11]"),
          url: require("../assets/img_apply/会员中心-icon.png")
        }
      ];
    }
  }
};
</script>

<style lang="less" scoped>
.landEcological {
  margin: 0 auto;
  width: 1248px;
  padding: 96px 0 96px 0;
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
  .ecologicalDescript {
    font-size: 16px;
    color: rgba(0, 0, 0, 0.7);
    margin-bottom: 48px;
  }
  .ecologicalImgOne {
    height: 426px;
    margin-bottom: 96px;
    img {
      height: 426px;
      width: 100%;
    }
  }
  .sguWallet {
    display: flex;
    .leftWallet {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 564px;
      .leftTitle {
        font-size: 40px;
        color: #000;
        margin-bottom: 50px;
      }
      .leftPointOrg {
        width: 11px;
        height: 4px;
        background: #ff7000;
        margin-bottom: 48px;
      }
      .leftContentHead {
        color: rgba(0, 0, 0, 0.7);
        font-size: 16px;
        margin-bottom: 70px;
      }
      .leftMainContnet {
        color: rgba(0, 0, 0, 0.7);
        font-size: 16px;
      }
    }
    .rightImg {
      display: flex;
      justify-content: space-between;
      flex: 1;
      margin-left: 50px;
      & > div {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        width: 288px;
        height: 350px;
        background: #00012d;
        & > div {
          font-size: 20px;
          font-family: Source Han Sans CN;
          font-weight: 500;
          color: rgba(255, 255, 255, 1);
          line-height: 24px;
        }
      }
    }
  }
}
.sugMarket {
  padding: 98px 0 96px 0;
  background: #fff;
  display: flex;
  margin: 0 auto;
  width: 1248px;
  .marketImg {
    width: 575px;
    height: 211px;
    margin-right: 96px;

    img {
      width: 575px;
      height: 211px;
    }
  }
  .marketDesript {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .marketRightHead {
      font-size: 40px;
      color: #000;
      font-weight: 500;
    }
    .marketRightMain {
      color: rgba(0, 0, 0, 0.7);
      font-size: 16px;
    }
    .marketRightPoint {
      width: 11px;
      height: 4px;
      background: #ff7000;
    }
  }
}
.sugApp {
  width: 1248px;
  margin: 0 auto;
  padding: 106px 0 75px 0;

  display: flex;
  .appLeftWrapper {
    width: 576px;
    .apphead {
      font-size: 40px;
      font-weight: 500;
      color: #000;
      margin-bottom: 46px;
    }
    .appLeftPoint {
      width: 11px;
      height: 4px;
      background: #ff7000;
      margin-bottom: 48px;
    }
    .appContent {
      font-size: 16px;
      color: rgba(0, 0, 0, 0.7);
      margin-bottom: 48px;
    }
    .appBottomWrapper {
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      .appCard {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        width: 15.7%;
        height: 100px;
        img {
          width: 66px;
          height: 66px;
        }
      }
    }
  }
  .appRightWrapper {
    flex: 1;
    display: flex;
    justify-content: center;
    img {
      height: 516px;
    }
  }
}
.taskCenter {
  width: 1248px;
  margin: 0 auto;
  padding: 103px 0 96px;
  .taskTitle {
    margin-bottom: 50px;
    .taskHead {
      font-size: 40px;
      color: #000;
      font-weight: 500;
      margin-bottom: 47px;
    }
    .taskPoint {
      width: 11px;
      height: 4px;
      background: #ff7000;
      margin-bottom: 48px;
    }
    .taskDescript {
      color: rgba(0, 0, 0, 0.7);
      font-size: 16px;
    }
  }
}
.taskImg {
  margin-bottom: 96px;
}
.taskBottom {
  display: flex;
  height: 316px;
  justify-content: space-between;
  .taskBottomDes {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 576px;
    .taskBottomTitle {
      font-size: 40px;
      color: #000;
      font-weight: 500;
    }
    .taskBottomPoint {
      width: 11px;
      height: 4px;
      background: #ff7000;
    }
    .taskBottomRightDes {
      font-size: 16px;
      color: rgba(0, 0, 0, 0.7);
    }
  }
}
.trading {
  margin: 0 auto;
  width: 1248px;
  height: 438px;
  .tradingWrapper {
    border-bottom: 1px solid #bebebe;
    display: flex;
    .leftTRadingBar {
      padding: 96px 0;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 576px;
      height: 243px;
      margin-right: 58px;
      .tradingTitle {
        font-size: 40px;
        color: #000;
      }
      .tradingPoint {
        width: 11px;
        height: 4px;
        background: #ff7700;
      }
      .tradingDes {
        color: rgba(0, 0, 0, 0.7);
        font-size: 16px;
      }
    }
    .rightImg {
      height: 435px;
      display: flex;
      align-items: center;
      img {
        height: 300px;
      }
    }
  }
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.el-menu-item.is-active {
  border-bottom: 4px solid #f98302 !important;
}
.el-menu-item {
  font-size: 16px;
}
.el-main {
  padding: 0;
}
.el-menu--horizontal > .el-submenu.is-active .el-submenu__title {
  border-bottom: 4px solid #f98302 !important;
}
.el-dropdown-link {
  cursor: pointer;
  color: #fff;
}
.el-dropdown {
  font-size: 16px !important;
}
.demonstration {
  display: block;
  color: #8492a6;
  font-size: 14px;
  margin-bottom: 20px;
}
.el-dropdown-link[data-v-fae5bece] {
  color: rgba(255, 255, 255, 0.6) !important;
  font-size: 14px !important;
}
.el-menu.el-menu--horizontal {
  border: none !important;
  height: 52px !important;
}
.el-menu--horizontal > .el-menu-item {
  height: 73px !important;
  line-height: 52px !important;
  font-size: 16px !important;
}
.el-dropdown-menu {
  z-index: 999999 !important;
}
</style>