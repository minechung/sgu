<template>
  <div>
    <div style="padding:0 ;min-width:1200px;">
      <Banner></Banner>
      <div style="  background: #f4f4f4;">
        <div class="landEcological">
          <div class="noticeTitle">
            <div class="leftTitle">{{$t('tec.landEcological.title')}}</div>
            <div>
              <img src="../assets/img_notice/point.png" alt />
            </div>
          </div>
          <div class="tecList">
            <div class="memory">
              <img src="../assets/img_technology/iocn1.png" alt />
              <div class="memoryRight">
                <p>{{$t('tec.landEcological.memory')}}</p>
                <p>{{$t('tec.landEcological.des')}}</p>
              </div>
            </div>
            <div class="DPOS">
              <img src="../assets/img_technology/iocn2.png" alt />
              <div class="DPOSRight">
                <p>{{$t('tec.DPOS.title')}}</p>
                <p>{{$t('tec.DPOS.des')}}</p>
              </div>
            </div>
            <div class="contrac">
              <img src="../assets/img_technology/iocn3.png" alt />
              <div class="contracRight">
                <p>{{$t('tec.DPOS.rightTitle')}}</p>
                <p>{{$t('tec.DPOS.content')}}</p>
              </div>
            </div>
            <div class="prove">
              <img src="../assets/img_technology/iocn4.png" alt />
              <div class="proveRight">
                <p>{{$t('tec.prove.title')}}</p>
                <p>{{$t('tec.prove.des')}}</p>
              </div>
            </div>
          </div>
          <div class="midImg">
            <div class="midImgTitle">{{$t('tec.prove.midtitle')}}</div>
            <div class="midImgLine"></div>
            <div class="midImgContent">{{$t('tec.prove.midcontent')}}</div>
          </div>
        </div>
      </div>

      <div class="frameBg">
        <Framework></Framework>
      </div>
      <div class="DPOSContent">
        <div class="DPOSLeftImg">
          <img src="../assets/img_technology/背景2.png" alt />
        </div>
        <div class="DPOSRightMain">
          <div class="DPOSRightHead">{{$t('tec.bottomDPOS.title')}}</div>
          <div class="DPOSRightPoint"></div>
          <div class="DPOSRightDes">{{$t('tec.bottomDPOS.content')}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Framework from "../components/indexView/Framework";
import Banner from "../components/Banner";
export default {
  components: {
    Framework,
    Banner
  },

  created() {
    this.path = this.$route.path;
  },
  methods: {},
  data() {
    return {
      clickClass: true,
      path: ""
    };
  }
};
</script>

<style lang="less" scoped>
.landEcological {
  padding-top: 96px;
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
  .tecList {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-bottom: 17px;
    & > div {
      margin-top: 48px;
      width: 491px;
      height: 86px;
      background: #fff;
      padding: 47px 36px 57px 49px;
      p {
        margin-bottom: 24px;
      }
    }
    .memory {
      display: flex;
      img {
        width: 78px;
        height: 86px;
        margin-right: 64px;
      }
      .memoryRight {
        & > p:nth-child(1) {
          font-size: 20px;
          font-family: Source Han Sans CN;
          font-weight: 500;
          color: rgba(0, 0, 0, 1);
          line-height: 24px;
        }
        & > p:nth-child(2) {
          font-size: 16px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: rgba(0, 0, 0, 1);
          line-height: 30px;
          opacity: 0.7;
        }
      }
    }
    .DPOS {
      display: flex;
      img {
        width: 78px;
        height: 86px;
        margin-right: 64px;
      }
      .DPOSRight {
        & > p:nth-child(1) {
          font-size: 20px;
          font-family: Source Han Sans CN;
          font-weight: 500;
          color: rgba(0, 0, 0, 1);
          line-height: 24px;
        }
        & > p:nth-child(2) {
          font-size: 16px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: rgba(0, 0, 0, 0.7);
          line-height: 30px;
        }
      }
    }
    .contrac {
      display: flex;
      img {
        width: 78px;
        height: 86px;
        margin-right: 64px;
      }
      .contracRight {
        & > p:nth-child(1) {
          font-size: 20px;
          font-family: Source Han Sans CN;
          font-weight: 500;
          color: rgba(0, 0, 0, 1);
          line-height: 24px;
        }
        & > p:nth-child(2) {
          font-size: 16px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: rgba(0, 0, 0, 0.7);
          line-height: 30px;
        }
      }
    }

    .prove {
      display: flex;
      img {
        width: 78px;
        height: 86px;
        margin-right: 64px;
      }
      .proveRight {
        & > p:nth-child(1) {
          font-size: 20px;
          font-family: Source Han Sans CN;
          font-weight: 500;
          color: rgba(0, 0, 0, 1);
          line-height: 24px;
        }
        & > p:nth-child(2) {
          font-size: 16px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: rgba(0, 0, 0, 0.7);
          line-height: 30px;
        }
      }
    }
  }
}
.midImg {
  background-image: url("../assets/img_technology/背景1.png");
  background-size: 100% 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 124px 0 80px 48px;
  .midImgTitle {
    font-size: 40px;
    color: #fff;
  }
  .midImgLine {
    width: 11px;
    height: 4px;
    background: #fff;
  }
  .midImgContent {
    width: 484px;
    color: rgba(255, 255, 255, 0.7);
    font-size: 16px;
    margin-bottom: 40px;
  }
}
.DPOSContent {
  width: 1248px;
  margin: 0 auto;
  padding: 96px 0;
  display: flex;
  .DPOSLeftImg {
    width: 559px;
    height: 238px;
    margin-right: 96px;
  }
  .DPOSRightMain {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .DPOSRightHead {
      font-size: 40px;
      color: #000;
      font-weight: 500;
    }
    .DPOSRightPoint {
      width: 11px;
      height: 4px;
      background: #ff7700;
    }
    .DPOSRightDes {
      font-size: 16px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: rgba(0, 0, 0, 0.7);
      line-height: 30px;
    }
  }
}
.frameBg {
  background: #f4f4f4;
  .warapper {
    background: #f4f4f4;
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