<template>
  <div class="warapper">
    <div class="leftContent">
      <div class="leftTitle">{{$t('framework.title')}}</div>
      <div class="leftPoint"></div>
      <div class="firstContnet">{{$t('framework.firstcontent')}}</div>
      <div class="secondContent">{{$t('framework.secondContent')}}</div>
    </div>
    <div class="rightImg">
      <img v-show="this.cn" src="../../assets/imgs/三层六节点架构.png" alt />
      <img v-show="this.en" src="../../assets/imgs/背景2.png" alt />
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
  padding: 76px 0 84px 0;
  background-color: #fff;
  display: flex;
  .leftContent {
    padding: 20px 96px 12px 0;
    width: 567px;
    height: 316px;
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
      width: 100%;
      min-width: 380px;
    }
  }
}
</style>