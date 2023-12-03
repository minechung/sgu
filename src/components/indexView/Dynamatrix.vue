<template>
  <div :class="[{'bg':cn},{'bgEn':en}]">
    <div class="wrapper">
      <div class="matrixTitle">{{$t('dyna.title')}}</div>
      <div class="middleLine"></div>
      <div class="matrixContent">{{$t('dyna.content')}}</div>
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
.bg {
  height: 897px;
  background-image: url("../../assets/imgs/背景2.jpg");
  background-color: transparent !important;
  background-position: center;
}
.bgEn {
  height: 897px;
  background-image: url("../../assets/imgs/首页背景1.jpg");
  background-color: transparent !important;
  background-position: center;
}
.wrapper {
  width: 1248px;
  padding: 48px 0;
  margin: 0px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  .matrixTitle {
    color: #fff;
    font-size: 40px;
  }
  .middleLine {
    width: 11px;
    height: 4px;
    background: #ff7000;
    margin: 48px 0;
  }
  .matrixContent {
    font-size: 14px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: rgba(255, 255, 255, 0.7);
    line-height: 30px;
    margin-bottom: 55px;
    text-align: center;
  }
}
</style>