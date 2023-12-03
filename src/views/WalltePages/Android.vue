<template>
  <div class="wrapper">
    <div class="titleImg">
      <img src="../../assets/img_wallet/photo@2x.png" alt />
    </div>
    <div class="name">
      <img src="../../assets/img_wallet/Android@2x.png" alt />
      <p>SGU Wallet</p>
    </div>
    <div
      class="version"
    >{{$t('wallet.down.v')}}：{{version}}/{{$t('wallet.down.size')}}：{{size}}/{{$t('wallet.down.time')}}：{{updateTime}}</div>
    <div class="scan">{{$t('wallet.down.qr')}}</div>
    <div class="open">{{$t('wallet.down.open')}}：{{url}}</div>
    <div class="dowmLoadImg">
      <img :src="qrimg" alt />
    </div>
  </div>
</template>

<script>
import { getdownload } from "../../../api";
export default {
  mounted() {
    getdownload(2)
      .then(res => {
        this.version = res.data.data[0].teVersion;
        this.size = res.data.data[0].size;
        this.updateTime = res.data.data[0].updateTime;
        this.url = res.data.data[0].url;
        this.qrimg = res.data.data[0].qrCodeImage;
      })
      .catch(err => {
        window.console.log(err);
      });
  },
  data() {
    return {
      version: "",
      size: "",
      updateTime: "",
      url: "",
      qrimg: ""
    };
  }
};
</script>

<style lang="less" scoped>
.wrapper {
  background: #f4f4f4;
  height: 566px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 98px 0;
  .titleImg {
    width: 110px;
    height: 125px;
    img {
      width: 110px;
      height: 125px;
    }
  }
  .name {
    display: flex;
    align-items: center;
    img {
      width: 34px;
      height: 40px;
      margin-right: 20px;
    }
    p {
      font-size: 36px;
      color: #1679f4;
    }
  }
  .version {
    font-size: 16px;
    color: #3d3d3d;
  }
  .scan {
    font-size: 16px;
    color: #929292;
  }
  .open {
    font-size: 16px;
    color: #92929f;
  }
  .dowmLoadImg {
    border: 4px solid #e4e4e4;
    border-radius: 10px;
    img {
      width: 158px;
      height: 158px;
    }
  }
}
</style>