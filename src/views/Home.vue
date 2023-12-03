<template>
  <div :class="[{'fontsS':changeCN},{'fonte':changeEN}]">
    <div :class="{'loadingLine':loadingLine}"></div>
    <div :class="['indexHeaderWapper',{'changeTop':startscroll}]">
      <div :class="{'scrollWrapper':startscroll}">
        <div :class="{'scrollTop':startscroll}">
          <div class="leftLogo">
            <img v-show="!startscroll" src="../assets/imgs/logo.svg" alt="!" />
            <img v-show="startscroll" src="../assets/imgs/logo黑.svg" alt />
          </div>
          <div class="TopNav">
            <ul>
              <li
                @mousemove="changehoverin('/maincontent')"
                :class="{'active':'/maincontent'==value}"
                @click="changeView('/maincontent')"
              >{{$t('nav.HOME')}}</li>
              <li
                @mousemove="changehoverin('/Dynamic')"
                :class="{'active':'/Dynamic'==value}"
                @click="changeView('/Dynamic')"
              >{{$t('nav.NEWS')}}</li>
              <li
                @mousemove="changehoverin('/Wallet')"
                :class="{'active':'/Wallet'==value}"
                @click="changeView('/Wallet')"
              >{{$t('nav.Wallet')}}</li>
              <li
                @mousemove="changehoverin('/Technology')"
                :class="{'active':'/Technology'==value}"
                @click="changeView('/Technology')"
              >{{$t('nav.Technology')}}</li>
              <li
                @mousemove="changehoverin('/')"
                @click="changeView('/')"
                :class="{'active':'/'==value}"
              >{{$t('nav.Explorer')}}</li>
              <li
                @mousemove="changehoverin('/Apply')"
                :class="{'active':'/Apply'==value}"
                @click="changeView('/Apply')"
              >{{$t('nav.Application')}}</li>
              <li
                @mousemove="changehoverin('/Aboutus')"
                :class="{'active':'/Aboutus'==value}"
                @click="changeView('/Aboutus')"
              >{{$t('nav.About')}}</li>
            </ul>
          </div>
          <div class="rightMenu">
            <div class="languageIcon">
              <img v-show="changeCN" src="../assets/imgs/中文图标.png" alt />
              <img v-show="changeEN" src="../assets/imgs/美国.png" alt />
            </div>
            <el-dropdown @command="handleCommand" trigger="click" style="width:65px">
              <span class="el-dropdown-link">
                <span>·</span>
                <span v-show="changeCN">简体中文</span>
                <span v-show="changeEN">English</span>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="1">简体中文</el-dropdown-item>
                <el-dropdown-item command="2">English</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            <div style="width:156px; margin-left: 32px;">
              <button @click="openBook()" class="downLoadBook">{{$t('book')}}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <router-view></router-view>

    <Bottom></Bottom>
  </div>
</template>

<script>
import Bottom from "../components/Bottom";
import { book } from "../../api";
export default {
  components: {
    Bottom
  },
  created() {
    this.path = this.$route.path;
  },

  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    this.value = this.$route.path;
    localStorage.setItem("locale", this.$i18n.locale);
    this.changeEN = localStorage.getItem("locale") == "en" ? true : false;
    this.changeCN = localStorage.getItem("locale") == "zh" ? true : false;
  },

  data() {
    return {
      value: "/main",
      startscroll: false,
      changeCN: true,
      changeEN: false,
      loadingLine: false
    };
  },
  updated: function() {
    this.loadingLine = true;
  },
  methods: {
    handleScroll() {
      let scrollY = window.scrollY;
      if (scrollY > 100) {
        this.startscroll = true;
      } else {
        this.startscroll = false;
      }
    },
    changehoverin(p) {
      this.value = p;
    },
    // changehoverout(p){
    //   this.value=p
    // },
    changeView(path) {
      this.loadingLine = false;
      if (path == "/") {
        window.location.href = "http://ex.sguchain.io";
      } else {
        this.$router.push(path);
        this.value = path;
      }
    },
    handleCommand(command) {
      if (command == 2) {
        this.changeCN = false;
        this.changeEN = true;
        this.$i18n.locale = "en";
        localStorage.setItem("locale", "en");
      } else {
        this.changeCN = true;
        this.changeEN = false;
        this.$i18n.locale = "zh";
        localStorage.setItem("locale", "zh");
      }
    },
    openBook() {
      if (this.changeCN == true) {
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
</script >

<style lang="less" >
.loadingLine {
  height: 1px;
  background: #ff7700;
}
.indexHeaderWapper {
  position: absolute;
  width: 100%;
  z-index: 999;
  top: 20px;
  height: 141px !important;
  padding: 0 !important;
  transition: all 0.45 ease-in-out;

  & > div > div {
    margin: 0 auto;
    width: 1248px;
    display: flex;
    background-color: transparent;
    height: 96px;
    z-index: 9999;
    border-bottom: 1px solid #fff;

    .TopNav {
      ul {
        list-style: none;
        display: flex;
        width: 603px;
        justify-content: space-between;
        li {
          color: rgba(255, 255, 255, 0.5);
          font-size: 16px;
          line-height: 95px;
          cursor: pointer;
        }
      }
    }
  }

  .scrollWrapper {
    background: #fff;
    border-top: 2px solid #ff7700;
  }
  .scrollTop {
    padding: 0;
    .TopNav {
      ul {
        li {
          color: rgba(0, 0, 0, 0.6);
        }
      }
    }
    .el-dropdown-link {
      color: #ff7000;
    }
  }
  .leftLogo {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 96px;
    margin-right: 176px;
    img {
      width: 129px;
      height: 52px;
    }
  }

  .rightMenu {
    display: flex;
    align-items: center;
    margin-left: 48px;
    .languageIcon {
      width: 26px;
      height: 26px;
      margin-right: 12px;
    }
    .downLoadBook {
      width: 156px;
      height: 31px;
      font-size: 16px;
      line-height: 31px;
      color: #ff7000;
      border-radius: 5px;
      outline: none;
      border: none;
      font-family: Source Han Sans CN;
      font-weight: 400;

      cursor: pointer;

      &:hover {
        background: #ff7000;
        color: #fff;
      }
    }
  }
  a {
    text-decoration: none;
  }
}
.changeTop {
  position: fixed;
  top: 0px !important;
}
.active {
  border-bottom: 2px solid #ff7700;
  color: #ff7000 !important;
}
.activenext {
  border-bottom: 2px solid #ff7700;
}
.swiper-container-horizontal
  > .swiper-pagination-bullets
  .swiper-pagination-bullet {
  margin: 0 12px !important;
}
.el-dropdown {
  cursor: pointer;
}
</style>