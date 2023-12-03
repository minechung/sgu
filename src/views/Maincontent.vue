<template>
  <div :class="[{'fontsS':cn},{'fonte':en}]" style="padding:0;">
    <div class="banner">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <div class="firstSwiper">
              <div class="firstBannerTitle"></div>
              <div class="firstBannerContent"></div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="secondSwiper">
              <div class="firstBannerTitle"></div>
              <div class="firstBannerContent"></div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="thirdSwiper">
              <div class="firstBannerTitle"></div>
            </div>
          </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
        <div :class="{'swiper-button-prev':true }"></div>
        <div :class="{'swiper-button-next':true}"></div>
      </div>
    </div>
    <div class="mainContent">
      <div class="introduceTitle">
        <div>{{$t('intro.title')}}</div>
        <div class="introImg">
          <img src="../assets/img_notice/point.png" alt />
        </div>
      </div>
      <div class="introduceMain">
        <div class="introMainTitle">{{$t('intro.main')}}</div>
        <div class="introMainContent">{{$t('intro.content')}}</div>
      </div>
    </div>

    <div class="DynaIntr">
      <div class="DynaWrapper">
        <div class="DynaTitle">
          <div>{{$t('zoology.title')}}</div>
          <div>{{$t('zoology.des')}}</div>
        </div>
        <div class="DynaContent">
          <div class="DynaLeftContent">
            <div class="contentWrapper">
              <div class="leftTitle">{{$t('zoology.subtitle')}}</div>
              <div class="leftPoint"></div>
              <div class="firstContent">{{$t('zoology.content')}}</div>
              <div class="secondContent">{{$t('zoology.lastcontent')}}</div>
            </div>
          </div>
          <div class="DynaRightImg">
            <img v-show="this.cn" src="../assets/imgs/SGU生态.png" alt />
            <img v-show="this.en" src="../assets/imgs/首页3.png" alt />
          </div>
        </div>
      </div>
    </div>

    <Framework></Framework>
    <Dynamatrix></Dynamatrix>
    <Newadvan></Newadvan>
    <Gamecenter></Gamecenter>
  </div>
</template>

<script>
import Swiper from "swiper";
import Framework from "../components/indexView/Framework";
import Dynamatrix from "../components/indexView/Dynamatrix";
import Newadvan from "../components/indexView/Newadvan";
import Gamecenter from "../components/indexView/Gamecenter";
export default {
  data() {
    return {
      path: "",
      cn: true,
      en: false
    };
  },
  components: {
    Framework,
    Dynamatrix,
    Newadvan,
    Gamecenter
  },
  mounted() {
    new Swiper(".swiper-container", {
      loop: false, // 循环模式选项
      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination"
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      }
    });
    var lang = localStorage.getItem("locale");
    this.cn = lang == "zh" ? true : false;
    this.en = lang == "en" ? true : false;
  },
  beforeUpdate() {
    var lang = localStorage.getItem("locale");
    this.cn = lang == "zh" ? true : false;
    this.en = lang == "en" ? true : false;
  },
  methods: {}
};
</script>

<style lang="less" scoped>
.banner {
  .firstSwiper {
    height: 190px;
    background-image: url("../assets/imgs/banner2.png");
    background-size: 100% 100% !important;
    padding: 310px 16.7% 200px 16.7%;
    text-align: center;
  }
  .secondSwiper {
    height: 190px;
    background-image: url("../assets/imgs/banner1.jpg");
    background-size: 100% 100% !important;
    text-align: center;
    padding: 310px 16.7% 200px 16.7%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .thirdSwiper {
    height: 190px;
    background-image: url("../assets/imgs/banner3.jpg");
    background-size: 100% 100% !important;
    text-align: center;
    padding: 310px 16.7% 200px 16.7%;
  }
  .firstBannerTitle {
    font-size: 38px;
    font-family: Source Han Sans CN;
    font-weight: 500;
    color: rgba(255, 255, 255, 1);
    margin-bottom: 25px;
  }
  .firstBannerContent {
    font-size: 16px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
    line-height: 30px;
    opacity: 0.8;
    margin-bottom: 40px;
  }
}
.mainContent {
  width: 1248px;
  margin: 0 auto;
  height: 241px;
  padding: 84px 0 95px 0;
  .introduceTitle {
    padding-bottom: 48px;
    border-bottom: 1px solid #bebebe;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    & > div:nth-child(1) {
      font-size: 40px;
      font-weight: 500;
    }
  }
  .introduceMain {
    margin-top: 46px;
    .introMainTitle {
      font-size: 16px;
      color: rgba(0, 0, 0, 0.7);
      margin-bottom: 20px;
    }
    .introMainContent {
      font-size: 16px;
      color: rgba(0, 0, 0, 0.7);
    }
  }
}

.DynaIntr {
  height: 897px;
  // width: 1800px;
  margin: 0 auto;
  background-image: url("../assets/imgs/背景1.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  .DynaWrapper {
    margin: 0 auto;
    width: 1248px;
    padding: 84px 0 77px 0;
    height: 736px;
    .DynaTitle {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 102px;
      align-items: center;
      margin-bottom: 36px;
      & > div:nth-child(1) {
        color: #fff;
        font-size: 40px;
      }
      & > div:nth-child(2) {
        color: rgba(255, 255, 255, 0.7);
        font-size: 16px;
        text-align: center;
      }
    }
    .DynaContent {
      display: flex;
      .DynaLeftContent {
        .contentWrapper {
          width: 276px;
          height: 502px;
          background: #fff;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          padding: 46px 35px 53px 25px;
          .leftTitle {
            font-size: 30px;
            color: #000;
          }
          .leftPoint {
            width: 11px;
            height: 4px;
            background-color: #ff7000;
          }
          .firstContent {
            color: rgba(0, 0, 0, 0.7);
            font-size: 16px;
          }
          .secondContent {
            color: rgba(0, 0, 0, 0.7);
            font-size: 16px;
          }
        }
      }
    }
  }
}
.DynaRightImg {
  background: url("../assets/imgs/pc首页透明背景.png") no-repeat;
  background-size: 100% 100%;
  padding: 0 61px;
  display: flex;
  justify-content: center;
  align-items: center;
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

.swiper-button-prev,
.swiper-container-rtl .swiper-button-next {
  background-image: url("../assets/imgs/左翻页.png") !important;
  background-size: 100% 100% !important;
  width: 48px !important;
  height: 48px !important;
  border-radius: 24px;
  left: 16.7% !important;
}
.nextpicl {
  background-image: url("../assets/imgs/有颜色左翻页.png") !important;
}

.swiper-button-next,
.swiper-container-rtl .swiper-button-prev {
  background-image: url("../assets/imgs/右翻页.png") !important;
  background-size: 100% 100% !important;
  width: 48px !important;
  height: 48px !important;
  border-radius: 24px;
  right: 16.7% !important;
}
.nextpicr {
  background-image: url("../assets/imgs/有颜色右翻页.png") !important;
}

.swiper-pagination-bullet {
  border: 1px solid #fff !important;
}

.swiper-container-horizontal
  > .swiper-pagination-bullets
  .swiper-pagination-bullet {
  margin: 0 20px !important;
}
.swiper-pagination-bullet-active {
  opacity: 1;
  background: #fff !important;
}
.swiper-button-prev,
.swiper-button-next {
  background-color: #ff7700 !important;
}
.swiper-button-prev.swiper-button-disabled,
.swiper-button-next.swiper-button-disabled {
  background-color: transparent !important;
}
.swiper-pagination-fraction,
.swiper-pagination-custom,
.swiper-container-horizontal > .swiper-pagination-bullets {
  bottom: 120px !important;
}
</style>