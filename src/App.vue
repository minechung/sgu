<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
export default {};
</script>

<style >
body {
  position: relative;
  min-width: 1200px;
}
@font-face {
  font-family: Source Han Sans CN;
  src: url("./common/font/SourceHanSansCN-Medium.otf");
}
@font-face {
  font-family: pha;
  src: url("./common/font/phagspa.ttf");
}
* {
  margin: 0;
  padding: 0;
}
.fontsS {
  font-family: Source Han Sans CN;
}
.fonte {
  font-family: pha;
}
#nprogress .bar {
  background: #ff7700 !important;
}
.swiper-pagination-bullet-active {
  background: #ff7700 !important;
}
.el-pagination {
  text-align: center;
}
</style>