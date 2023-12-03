<template>
  <div style="background:#e5e5e5">
    <div class="wrapperNotice">
      <div class="noticeTitle">
        <div class="leftTitle">{{$t('noticePage.info')}}</div>
        <div>
          <img src="../../assets/img_notice/point.png" alt />
        </div>
      </div>
      <div class="newsList">
        <div class="newscontent" v-for="(v) in news " :key="v.newsId">
          <div @click="readmoreinfo(v.newsId)" class="newsImg">
            <img :src="v.image" alt />
          </div>
          <div @click="readmoreinfo(v.newsId)" class="newsTitle">{{v.title}}</div>
          <div @click="readmoreinfo(v.newsId)" class="newsMain">{{v.newsAbstract}}</div>
          <div class="newsDate">
            <div class="dateP">{{v.createTime}}</div>
            <div class="readMore">
              <button @click="readmoreinfo(v.newsId)">{{$t('noticePage.read')}}</button>
            </div>
          </div>
        </div>
      </div>
      <div class="bottomNavNotice">
        <el-pagination
          :prev-text="page.pre"
          :next-text="page.next"
          :pager-count="5"
          layout="prev, pager, next"
          :page-size="6"
          :total="totalPage"
          @prev-click="pageprev"
          @next-click="pagenext"
          @current-change="nowPage"
        ></el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import { getNews } from "../../../api";
export default {
  mounted() {
    getNews(1, 6, "desc", "id")
      .then(res => {
        for (let v of res.data.rows) {
          var date = new Date(v.createTime);
          var year = date.getFullYear();
          var month =
            date.getMonth() + 1 < 10
              ? "0" + (date.getMonth() + 1)
              : date.getMonth() + 1;
          var day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();

          v.createTime = year + "-" + month + "-" + day;
        }
        this.totalPage = res.data.total;
        this.news = res.data.rows;
      })
      .catch(err => {
        window.console.log(err);
      });
  },
  data() {
    return {
      news: [],
      totalPage: 100
    };
  },
  computed: {
    page() {
      return {
        pre: this.$t("noticePage.pre"),
        next: this.$t("noticePage.next")
      };
    }
  },
  methods: {
    readmoreinfo(i) {
      this.$router.push({ path: "/Dynamic/notice/info", query: { nu: i } });
    },
    pageprev(i) {
      getNews(i, 6, "desc", "id")
        .then(res => {
          for (let v of res.data.rows) {
            var date = new Date(v.createTime);
            var year = date.getFullYear();
            var month =
              date.getMonth() + 1 < 10
                ? "0" + (date.getMonth() + 1)
                : date.getMonth() + 1;
            var day =
              date.getDate() < 10 ? "0" + date.getDate() : date.getDate();

            v.createTime = year + "-" + month + "-" + day;
          }
          this.totalPage = res.data.total;
          this.news = res.data.rows;
        })
        .catch(err => {
          window.console.log(err);
        });
    },
    pagenext(n) {
      getNews(n, 6, "desc", "id")
        .then(res => {
          for (let v of res.data.rows) {
            var date = new Date(v.createTime);
            var year = date.getFullYear();
            var month =
              date.getMonth() + 1 < 10
                ? "0" + (date.getMonth() + 1)
                : date.getMonth() + 1;
            var day =
              date.getDate() < 10 ? "0" + date.getDate() : date.getDate();

            v.createTime = year + "-" + month + "-" + day;
          }
          this.totalPage = res.data.total;
          this.news = res.data.rows;
        })
        .catch(err => {
          window.console.log(err);
        });
    },
    nowPage(p) {
      getNews(p, 6, "desc", "id")
        .then(res => {
          for (let v of res.data.rows) {
            var date = new Date(v.createTime);
            var year = date.getFullYear();
            var month =
              date.getMonth() + 1 < 10
                ? "0" + (date.getMonth() + 1)
                : date.getMonth() + 1;
            var day =
              date.getDate() < 10 ? "0" + date.getDate() : date.getDate();

            v.createTime = year + "-" + month + "-" + day;
          }
          this.totalPage = res.data.total;
          this.news = res.data.rows;
        })
        .catch(err => {
          window.console.log(err);
        });
    }
  }
};
</script>

<style lang="less"  >
.wrapperNotice {
  height: 1620px;
  padding: 84px 0 96px 0;
  width: 1248px;
  margin: 0 auto;
  background-color: #e5e5e5;
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
    }
  }
  .newsList {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .newscontent {
      width: 336px;
      height: 612px;
      margin: 48px 0 44px 0;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .newsImg {
        img {
          width: 336px;
          height: 300px;
          cursor: pointer;
        }
        margin-bottom: 48px;
      }
      .newsTitle {
        color: rgba(0, 0, 0, 0.6);
        font-size: 20px;
        cursor: pointer;
      }
      .newsMain {
        font-size: 16px;
        color: rgba(0, 0, 0, 0.7);
        cursor: pointer;
        width: 336px;
        height: 120px;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 5;
        overflow: hidden;
      }
      .newsDate {
        display: flex;
        justify-content: space-between;
        padding-bottom: 24px;
        border-bottom: 1px solid #9b9b9f;
        .dateP {
          color: rgba(0, 0, 0, 0.6);
          font-size: 16px;
        }
        .readMore {
          button {
            color: rgba(0, 0, 0, 0.6);
            font-size: 16px;
            border: none;
            outline: none;
            background: none;
            cursor: pointer;
          }
        }
      }
    }
  }
}
.newscontent:hover {
  .newsTitle {
    color: #000 !important;
  }
  .newsDate {
    .dateP {
      color: #000 !important;
    }
    .readMore {
      button {
        color: rgba(0, 0, 0, 1) !important;
      }
    }
  }
}
.bottomNavNotice {
  display: flex;
  justify-content: center;
  margin-top: 52px;
  .el-pager li {
    width: 52px !important;
    height: 52px !important;
    border-radius: 27px !important;
    line-height: 52px !important;
    font-size: 16px !important;
    background: transparent !important;
    border: 1px solid #9b9b9f;
    color: #9b9b9f;
    margin: 0 21px !important;
    padding: 0 !important;
  }

  .el-pagination span:not([class*="suffix"]) {
    width: 52px !important;
    height: 52px !important;
    border-radius: 27px !important;
    line-height: 52px !important;
    font-size: 16px !important;
    padding: 0 !important;
    background: transparent !important;
    color: #9b9b9f;
  }
  .el-pagination button {
    width: 52px !important;
    height: 52px !important;
    border-radius: 27px !important;
    line-height: 52px !important;
    font-size: 16px !important;
    padding: 0 !important;
    background: transparent !important;
    border: 1px solid #9b9b9f;
    margin: 0 21px;
  }
  .el-pagination span:not([class*="suffix"]):active {
    color: #fff !important;
  }
  .el-pagination button:active {
    background: #ff7000 !important;
  }
  .el-pager li.active {
    color: #fff !important;
    background: #ff7000 !important;
  }
  .el-pagination {
    width: 750px;
  }
}
</style>