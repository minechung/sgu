<template>
  <div>
    <div style="padding:0;min-width:1200px">
      <Banner></Banner>
      <div class="midNav">
        <div
          @click="changeview('Ios')"
          :class="{'notice':true,'activew':this.$route.path=='/Wallet/Ios'}"
        >Ios</div>
        <div
          @click="changeview('Android')"
          :class="{'blog':true,'activew':this.$route.path=='/Wallet/Android'}"
        >Android</div>
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
    this.path = "/Wallet";
  },
  methods: {
    changeview(path) {
      this.$router.push("/Wallet/" + path);
      this.clickClass = !this.clickClass;
    }
  },
  data() {
    return {};
  }
};
</script>

<style lang="less" scoped>
.midNav {
  height: 90px;
  background-color: #fff;
  display: flex;
  margin: 0 auto;
  width: 1248px;
  div {
    border-left: 1px solid #bebebe;
    border-right: 1px solid #bebebe;
  }
  .notice {
    width: 621px;
    height: 90px;
    text-align: center;
    line-height: 90px;
    font-size: 16px;
    color: rgba(0, 0, 0, 0.6);
    border-right: none;
  }

  .blog {
    flex: 1;
    border-left: none;
    text-align: center;
    line-height: 90px;
    color: rgba(0, 0, 0, 0.6);
    font-size: 16px;
  }
  .activew {
    background: #ff7000;
    color: #fff;
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