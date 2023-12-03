<template>
  <div class="warapper">
    <div class="leftContent">
      <div class="leftTitle">{{$t('advance.title')}}</div>
      <div class="leftPoint"></div>
      <div class="firstContnet">{{$t('advance.first')}}</div>
      <div class="secondContent">{{$t('advance.second')}}</div>
    </div>
    <div class="rightImg">
      <img src="../../assets/imgs/创新优势.png" alt />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cn: true,
      en: false
    };
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
  }
};
</script>

<style lang="less" scoped>
.warapper {
  margin: 0 auto;
  width: 1248px;
  padding: 49px 0 52px 0;
  background-color: #fff;
  display: flex;
  .leftContent {
    padding: 47px 175px 44px 0;
    width: 567px;
    height: 274px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .leftTitle {
      font-size: 40px;
      color: #000;
    }
    .leftPoint {
      width: 11px;
      height: 4px;
      background-color: #ff7000;
    }
    .firstContnet {
      font-size: 16px;
      color: rgba(0, 0, 0, 0.7);
    }
    .secondContent {
      font-size: 16px;
      color: rgba(0, 0, 0, 0.7);
    }
  }
  .rightImg {
    flex: 1;
    display: flex;
    align-items: center;
    img {
      width: 576px;
    }
  }
}
</style>