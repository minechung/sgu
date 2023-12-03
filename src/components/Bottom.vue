<template>
  <el-footer style="padding:0;">
    <div style="background:#0d0d17">
      <div class="bottomNav">
        <div class="bottomHead">
          <div class="leftLogo">
            <img src="../assets/imgs/logo.svg" alt />
          </div>
          <ul class="rightList">
            <li>{{$t('bottom.rightList.first')}}</li>
            <li>{{$t('bottom.rightList.second')}}</li>
            <li>{{$t('bottom.rightList.last')}}</li>
          </ul>
        </div>
        <div class="bottomNavBar">
          <div class="leftIconBar">
            <img
              @click="toOutUrl('https://weibo.com/p/1005057334437097?is_hot=1')"
              src="../assets/imgs/底部iocn (1).png"
              alt
            />
            <img
              @click="toOutUrl('https://medium.com/@SuperGameUnion')"
              src="../assets/imgs/底部iocn (2).png"
              alt
            />
            <img
              @click="toOutUrl('https://www.reddit.com/user/SUPCHAIN001')"
              src="../assets/imgs/底部iocn (3).png"
              alt
            />
            <img
              @click="toOutUrl('https://twitter.com/SGU_Global')"
              src="../assets/imgs/底部iocn (4).png"
              alt
            />
            <img
              @click="toOutUrl('https://t.me/SGU_official')"
              src="../assets/imgs/底部iocn (5).png"
              alt
            />
          </div>
          <div class="rightNavList">
            <ul :class="[{'firstList':en},{'firstEn':cn}]">
              <li @click="toDyna('/Dynamic/notice')">{{$t('bottom.rightNav.f')}}</li>
              <li @click="toDyna('/Dynamic/blog')">{{$t('bottom.rightNav.s')}}</li>
            </ul>
            <ul class="secondList">
              <li @click="openbook()">{{$t('bottom.rightNav.t')}}</li>
              <li
                @click="toOutUrl('https://supersignhub.com/sign?pid=SuhGtxEl')"
              >{{$t('bottom.rightNav.for')}}</li>
              <li @click="toOutUrl('https://fir.im/xe1c')">{{$t('bottom.rightNav.five')}}</li>
              <li @click="toOutUrl('https://github.com/suchain')">Github</li>
              <li @click="toOutUrl('http://www.sguchain.io/sdk')">API&SDK</li>
            </ul>
            <ul>
              <li>SGU PTE.LTD</li>
              <li>business@sguchain.io</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="bottomTap">Copyrights 2019 SGU LTD</div>
  </el-footer>
</template>

<script>
import { book } from "../../api";
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
  },
  methods: {
    toOutUrl(url) {
      window.location.href = url;
    },
    toDyna(path) {
      this.$router.push(path);
    },
    openbook() {
      if (this.cn == true) {
        book(1)
          .then(res => {
            let opurl = res.data.data[0].downUrl;
            window.open(opurl);
          })
          .catch(err => {
            window.console.log(err);
          });
      } else {
        book(2)
          .then(res => {
            let opurl = res.data.data[0].downUrl;
            window.open(opurl);
          })
          .catch(err => {
            window.console.log(err);
          });
      }
    }
  }
};
</script>

<style lang="less" scoped>
.bottomNav {
  padding: 70px 0 50px;
  width: 1248px;
  margin: 0 auto;
  .bottomHead {
    height: 52px;
    padding-right: 8%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 38px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    margin-bottom: 48px;

    .leftLogo {
      img {
        width: 129px;
        height: 52px;
      }
    }
    .rightList {
      display: flex;
      justify-content: space-between;
      width: 448px;
      list-style: none;
      li {
        font-size: 16px;
        color: rgba(255, 255, 255, 0.5);
      }
    }
  }
  .bottomNavBar {
    height: 140px;
    display: flex;
    justify-content: space-between;
    .leftIconBar {
      padding: 31px 0 55px;
      width: 33%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      img {
        width: 40px;
        height: 40px;
        cursor: pointer;
      }
    }
    .rightNavList {
      width: 549px;
      display: flex;
      ul {
        list-style: none;
        li {
          font-size: 13px;
          color: #c2c2c2;
          cursor: pointer;
        }
      }
      .firstList {
        margin-right: 15%;
      }
      .firstEn {
        margin-right: 26%;
      }
      .secondList {
        margin-right: 12%;
      }
    }
  }
}
.bottomTap {
  height: 72px;
  border: solid 1px #404040;
  background-color: #050508;
  text-align: center;
  line-height: 72px;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.7);
}
</style>