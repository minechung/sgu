<template>
  <div style="background: #f4f4f4;">
    <div class="wrapperno">
      <div class="headWrapper">
        <div>{{name}}</div>
        <div>发布时间:{{data}}</div>
      </div>
      <div class="midImg">
        <img :src="imgurl" alt />
      </div>
      <div v-html="newscontent" class="mainContent">{{newscontent}}</div>
      <div class="changePage">
        <div v-show="showpre" @click="changePage(preid)">上一篇：{{prePage}}</div>
        <div v-show="shownext" @click="changePage(nextid)">下一篇：{{nextPage}}</div>
      </div>
      <div @click="returnF()" class="returnPre">返回上一页</div>
    </div>
  </div>
</template>

<script>
import { newsContent } from "../../../../api";
export default {
  data() {
    return {
      name: "",
      data: "",
      newscontent: "",
      prePage: " ",  
      nextPage: " ",
      imgurl: "",
      nextid: "",
      preid: "",
      shownext: true,
      showpre: true
    };
  },
  mounted() {
    var id = this.$route.query.nu;
    newsContent(id)
      .then(res => {
        // window.console.log(res.data.data);

        this.name = res.data.data.now.title;
        // 时间转换
        var date = new Date(res.data.data.now.createTime);
        var year = date.getFullYear();
        var month =
          date.getMonth() + 1 < 10
            ? "0" + (date.getMonth() + 1)
            : date.getMonth() + 1;
        var day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
        this.data = year + "-" + month + "-" + day;
        this.newscontent = res.data.data.now.content;
        this.imgurl = res.data.data.now.image;
        // console.log(res.data.data.last == null);
        // console.log(res.data.data.next == null);

        if (res.data.data.next == null) {
          this.shownext = false;
          this.prePage = res.data.data.last.title;
          this.preid = res.data.data.last.newsId;
        } else {
          this.shownext = true;
          this.nextPage = res.data.data.next.title;

          this.nextid = res.data.data.next.newsId;
        }
        // console.log(this.nextid);

        if (res.data.data.last == null) {
          this.showpre = false;
          this.nextPage = res.data.data.next.title;
          this.nextid = res.data.data.next.newsId;
        } else {
          this.showpre = true;

          this.prePage = res.data.data.last.title;

          this.preid = res.data.data.last.newsId;
        }
        // console.log(this.pretid);
        // console.log(this.showpre);

        // console.log(this.nextid);
        // console.log(this.preid);
      })
      .catch(err => {
        window.console.log(err);
      });
  },
  methods: {
    changePage(i) {

      newsContent(i)
        .then(res => {
          window.console.log(res.data.data);

          this.name = res.data.data.now.title;
          // 时间转换
          var date = new Date(res.data.data.now.createTime);
          var year = date.getFullYear();
          var month =
            date.getMonth() + 1 < 10
              ? "0" + (date.getMonth() + 1)
              : date.getMonth() + 1;
          var day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
          this.data = year + "-" + month + "-" + day;
          this.newscontent = res.data.data.now.content;
          this.imgurl = res.data.data.now.image;

          if (res.data.data.last == null) {
            this.showpre = false;
            this.prePage = res.data.data.next.title;
            this.preid = res.data.data.next.newsId;
          } else {
            this.showpre = true;

            this.prePage = res.data.data.last.title;

            this.preid = res.data.data.last.newsId;
          }

          if (res.data.data.next == null) {
            this.shownext = false;
            this.nextPage = res.data.data.last.title;
            this.nextid = res.data.data.last.newsId;
          } else {
            this.shownext = true;
            this.nextPage = res.data.data.next.title;
            this.nextid = res.data.data.next.newsId;
          }
        })
        .catch(err => {
          window.console.log(err);
        });
    },
    returnF() {
      this.$router.push("/Dynamic/notice");
    }
  }
};
</script>

<style lang="less" scoped>
.wrapperno {
  padding: 148px 0 96px 0;
  width: 1248px;
  margin: 0 auto;
  .headWrapper {
    padding-bottom: 48px;
    border-bottom: 1px solid #bebebe;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 48px;
    & > div:nth-child(1) {
      font-size: 40px;
      color: #000;
    }
    & > div:nth-child(2) {
      font-size: 16px;
      color: #000;
    }
  }
  .midImg {
    margin-bottom: 48px;
    img {
      width: 100%;
      height: 500px;
    }
  }
  .mainContent {
    font-size: 16px;
    color: #000;
    padding-bottom: 94px;
    border-bottom: 1px solid #bebebe;
  }
  .changePage {
    display: flex;
    justify-content: space-between;
    font-size: 16px;
    color: rgba(0, 0, 0, 0.8);
    padding: 48px 0;
    div {
      cursor: pointer;
    }
  }
  .returnPre {
    background: #ff7700;
    height: 60px;
    line-height: 60px;
    font-size: 16px;
    color: #fff;
    text-align: center;
    border-radius: 5px;
    cursor: pointer;
  }
}
</style>