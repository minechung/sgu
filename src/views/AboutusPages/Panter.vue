<template>
  <div>
    <div style="background-color: #f4f4f4;">
      <div class="firstWrapper">
        <div class="noticeTitle">
          <div class="leftTitle">{{$t('Aboutus.Panter.intro.title')}}</div>
          <div>
            <img src="../../assets/img_notice/point.png" alt />
          </div>
        </div>
        <div class="mainIntroduce">
          <p>{{$t('Aboutus.Panter.intro.contentOne')}}</p>
          <br />
          <br />
          <p>{{$t('Aboutus.Panter.intro.contentNext')}}</p>
        </div>
        <div class="bannerMain">
          <img src="../../assets/img_panter/背景1.jpg" alt />
        </div>
      </div>
    </div>

    <div :class="[{'curseImg':cn},{'curseImgEn':en}]">
      <!-- <img src="../../assets/img_panter/miancurse.jpg" alt /> -->
    </div>
    <div class="secondWrapper">
      <div class="noticeTitle">
        <div class="leftTitle">{{$t('Aboutus.Panter.team.title')}}</div>
        <div>
          <img src="../../assets/img_notice/point.png" alt />
        </div>
      </div>

      <div class="teamMain">
        <div class="teamCard" v-for="(v,i) in teamInfo" :key="i">
          <img src="../../assets/img_panter/团队成员.png" alt />
          <p>{{v.name}}</p>
          <p>{{v.job}}</p>
        </div>
      </div>
      <p class="mainTips">{{$t('Aboutus.Panter.team.notice')}}</p>
    </div>
    <div style="background-color: #f4f4f4;">
      <div class="thirdWrapper">
        <div class="panterMedia">{{$t('Aboutus.Panter.media')}}</div>
        <div class="mediaImg">
          <img v-for="(v,i) in imgListMedia" :key="i" :src="v.imgurl" alt />
        </div>
        <div class="invest">{{$t('Aboutus.Panter.invest')}}</div>
        <div class="investImg">
          <img v-for="(v,i) in imgListInvest" :key="i" :src="v.url" alt />
        </div>
        <div class="investImg">
          <img v-for="(v,i) in imgListInvest1" :key="i" :src="v.url" alt />
        </div>
      </div>
    </div>

    <div class="exchange">
      <div class="nextwrapper">
        <div class="exchangeTitle">{{$t('Aboutus.Panter.exchange')}}</div>
        <div class="exchangeImg">
          <img v-for="(v,i) in exchangeList" :key="i" :src="v.url" alt />
        </div>
        <div class="exchangeImg">
          <img v-for="(v,i) in exchangeList1" :key="i" :src="v.url" alt />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
  computed: {
    teamInfo() {
      return [
        {
          name: "James Charles",
          job: this.$t("Aboutus.Panter.team.teamname[0]")
        },
        {
          name: "Bruce P. Hansen ",
          job: this.$t("Aboutus.Panter.team.teamname[1]")
        },
        {
          name: "Michael A. Mogensen ",
          job: this.$t("Aboutus.Panter.team.teamname[2]")
        },
        {
          name: "Vanesa Brown",
          job: this.$t("Aboutus.Panter.team.teamname[3]")
        },
        {
          name: this.$t("Aboutus.Panter.team.teamname[4]"),
          job: this.$t("Aboutus.Panter.team.teamname[5]")
        },
        {
          name: this.$t("Aboutus.Panter.team.teamname[6]"),
          job: this.$t("Aboutus.Panter.team.teamname[7]")
        }
      ];
    }
  },
  data() {
    return {
      imgListMedia: [
        { imgurl: require("../../assets/img_panter/合作媒体-1.png") },
        { imgurl: require("../../assets/img_panter/合作媒体-2.png") },
        { imgurl: require("../../assets/img_panter/合作媒体-3.png") },
        { imgurl: require("../../assets/img_panter/合作媒体-4.png") },
        { imgurl: require("../../assets/img_panter/合作媒体-5.png") },
        { imgurl: require("../../assets/img_panter/合作媒体-6.png") },
        { imgurl: require("../../assets/img_panter/合作媒体-7.png") },
        { imgurl: require("../../assets/img_panter/合作媒体-8.png") },
        { imgurl: require("../../assets/img_panter/合作媒体-9.png") },
        { imgurl: require("../../assets/img_panter/合作媒体-10.png") },
        { imgurl: require("../../assets/img_panter/合作媒体-11.png") },
        { imgurl: require("../../assets/img_panter/合作媒体-12.png") }
      ],
      imgListInvest: [
        { url: require("../../assets/img_panter/投资机构-1.png") },
        { url: require("../../assets/img_panter/投资机构-2.png") },
        { url: require("../../assets/img_panter/投资机构-3.png") },
        { url: require("../../assets/img_panter/投资机构-4.png") }
      ],
      imgListInvest1: [
        { url: require("../../assets/img_panter/投资机构-5.png") },
        { url: require("../../assets/img_panter/投资机构-6.png") },
        { url: require("../../assets/img_panter/投资机构-7.png") },
        { url: require("../../assets/img_panter/投资机构-8.png") }
      ],
      exchangeList: [
        { url: require("../../assets/img_panter/预上交易所-1.png") },
        { url: require("../../assets/img_panter/预上交易所-2.png") },
        { url: require("../../assets/img_panter/预上交易所-3.png") },
        { url: require("../../assets/img_panter/预上交易所-4.png") },
        { url: require("../../assets/img_panter/预上交易所-5.png") }
      ],
      exchangeList1: [
        { url: require("../../assets/img_panter/预上交易所-6.png") },
        { url: require("../../assets/img_panter/预上交易所-7.png") },
        { url: require("../../assets/img_panter/预上交易所-8.png") },
        { url: require("../../assets/img_panter/预上交易所-9.png") },
        { url: require("../../assets/img_panter/预上交易所-10.png") }
      ],
      cn: true,
      en: false
    };
  }
};
</script>

<style lang="less" scoped>
.firstWrapper {
  padding: 84px 0 96px;
  width: 1248px;
  margin: 0 auto;
  .mainIntroduce {
    margin-top: 47px;
    margin-bottom: 48px;
    p {
      font-size: 16px;
      color: rgba(0, 0, 0, 0.7);
    }
  }
  .bannerMian {
    img {
      width: 1267px;
      height: 274px;
    }
    margin-bottom: 96px;
  }
}
.curseImg {
  height: 707px;
  background-image: url("../../assets/img_panter/miancurse.jpg");
  background-repeat: no-repeat;
  background-position: center;
}
.curseImgEn {
  height: 707px;
  background-image: url("../../assets/img_panter/min.jpg");
  background-repeat: no-repeat;
  background-position: center;
}
.secondWrapper {
  width: 1248px;
  margin: 0 auto;
  padding: 84px 0 96px 0;
}
.noticeTitle {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  height: 99px;
  padding-bottom: 48px;
  border-bottom: 1px solid #bebebe;
  .leftTitle {
    font-size: 40px;
    color: #000;
    font-weight: 500;
  }
}
.teamMain {
  margin-top: 48px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 45px;
  .teamCard {
    height: 333px;
    width: 173px;
    img {
      width: 173px;
      height: 220px;
      margin-bottom: 21px;
    }
    p {
      font-size: 15px;
      color: #7a7a7a;
      text-align: center;
    }
  }
}
.mainTips {
  text-align: center;
  font-size: 16px;
  color: #000;
}
.thirdWrapper {
  padding: 84px 0 48px 0;
  width: 1248px;
  margin: 0 auto;
  .panterMedia {
    text-align: center;
    font-size: 40px;
    color: #000;
    margin-bottom: 48px;
  }
  .mediaImg {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    img {
      width: 270px;
      height: 66px;
      margin-bottom: 48px;
    }
  }
  .invest {
    font-size: 40px;
    color: #000;
    text-align: center;
    margin-bottom: 48px;
  }
  .investImg {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    img {
      width: 226px;
      height: 66px;
      margin-bottom: 48px;
    }
  }
}
.exchange {
  background-image: url("../../assets/img_panter/背景3.jpg");
  background-repeat: no-repeat;
  padding: 96px 0 0 0;
  .nextwrapper {
    width: 1248px;
    margin: 0 auto;
    .exchangeTitle {
      font-size: 40px;
      color: #fff;
      text-align: center;
      font-family: Source Han Sans CN;
      font-weight: 500;
      margin-bottom: 48px;
    }
    .exchangeImg {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      img {
        width: 200px;
        height: 74px;
        margin-bottom: 48px;
      }
    }
  }
}
</style>