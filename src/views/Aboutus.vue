<template>
  <div>
    <div style="padding:0;min-width:1200px">
      <Banner></Banner>
      <div class="midNav">
        <div
          @click="changeview('Panter')"
          :class="{'notice':true,'activea':this.$route.path=='/Aboutus/Panter'}"
        >{{$t('Aboutus.topNav.panter')}}</div>
        <div
          @click="changeview('Prombles')"
          :class="{'blog':true,'activea':this.$route.path=='/Aboutus/Prombles'}"
        >{{$t('Aboutus.topNav.promble')}}</div>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Banner from "../components/Banner";
export default {
  components: {
    Banner
  },
  created() {
    this.path = "/Aboutus";
  },

  methods: {
    changeview(path) {
      this.$router.push("/Aboutus/" + path);
      this.clickClass = !this.clickClass;
    }
  },
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
      value: "",
      changeCN: true,
      changeEN: false,
      path: ""
    };
  }
};
</script>

<style lang="less" >
.midNav {
  height: 90px;
  background-color: #fff;
  display: flex;
  width: 1248px;
  margin: 0 auto;
  div {
    border-left: 1px solid #bebebe;
    border-right: 1px solid #bebebe;
  }
  .notice {
    width: 623px;
    height: 90px;
    text-align: center;
    line-height: 90px;
    font-size: 16px;
    color: rgba(0, 0, 0, 0.6);
    border-right: none;
    cursor: pointer;
  }

  .blog {
    flex: 1;
    border-left: none;
    text-align: center;
    line-height: 90px;
    color: rgba(0, 0, 0, 0.6);
    font-size: 16px;
    cursor: pointer;
  }
  .activea {
    background: #ff7000;
    color: #fff;
  }
}
</style>