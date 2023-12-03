<template>
  <div>
    <div class="banner">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <div class="firSwiper">
              <div class="firstBannerTitle">SGU雷神网络</div>
              <div class="firstBannerContent">多层节点架构 多分支节点 高效便捷 专利技术</div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="secSwiper">
              <div class="firstBannerTitle">SGU首批合作社区名单公示</div>
              <div class="firstBannerContent">KS-西瓜 、 KWT社区 、 LC-链共识社区 、 BG社区 、 币游联盟加入SGU社区</div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="thrSwiper">
              <div class="firstBannerTitle">SGU 开发者平台</div>
              <div class="firstBannerContent">无门槛 0手续费、融聚全球开发者 每个人都是游戏创意师</div>
            </div>
          </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
        <div :class="{'swiper-button-prev':true }"></div>
        <div :class="{'swiper-button-next':true}"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
export default {
  data() {
    return {
      isclickl: false,
      isclickr: false
    };
  },
  mounted: function() {
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
  },
  methods: {}
};
</script>

<style lang="less" scoped>
.banner {
  .firSwiper {
    height: 100px;
    background-image: url("../assets/img_dyn/baner1.jpg");
    background-size: 100% 100% !important;
    padding: 220px 16.7% 220px 16.7%;
  }
  .secSwiper {
    height: 100px;
    background-image: url("../assets/img_dyn/banner2.jpg");
    background-size: 100% 100% !important;
    padding: 220px 16.7% 220px 16.7%;
  }
  .thrSwiper {
    height: 100px;
    background-image: url("../assets/img_dyn/bnner3.jpg");
    background-size: 100% 100% !important;
    padding: 220px 16.7% 220px 16.7%;
  }
  .firstBannerTitle {
    font-size: 38px;
    font-family: Source Han Sans CN;
    font-weight: 500;
    color: rgba(255, 255, 255, 1);
    margin-bottom: 24px;
    text-align: center;
  }
  .firstBannerContent {
    font-size: 16px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
    line-height: 30px;
    opacity: 0.8;
    margin-bottom: 0;
    text-align: center;
  }
}
.swiper-button-prev,
.swiper-container-rtl .swiper-button-next {
  top: 50% !important;
  left: 16.7% !important;
  right: auto !important;
  background-image: url("../assets/imgs/左翻页.png") !important;
  background-size: 100% 100% !important;
  width: 48px !important;
  height: 48px !important;
  border-radius: 24px;
}
.swiper-button-prev,
.swiper-button-next {
  background-color: #ff7700 !important;
}
.swiper-button-prev.swiper-button-disabled,
.swiper-button-next.swiper-button-disabled {
  background-color: transparent !important;
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
  top: 50% !important;
  right: 16.7% !important;
  left: auto !important;
}
.nextpicr {
  background-image: url("../assets/imgs/有颜色右翻页.png") !important;
}
.swiper-pagination-fraction,
.swiper-pagination-custom,
.swiper-container-horizontal > .swiper-pagination-bullets {
  width: 150px !important;
  bottom: 96px !important;
  left: 45% !important;
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
</style>