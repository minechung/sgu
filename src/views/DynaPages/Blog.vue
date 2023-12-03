<template>
  <div style="background:#f4f4f4">
    <div class="wrapperBlog">
      <div class="noticeTitle">
        <div class="leftTitle">{{$t('blog.title')}}</div>
        <div>
          <img src="../../assets/img_notice/point.png" alt />
        </div>
      </div>
      <div v-for="(v,i) in rows" class="blogTable" :key="i">
        <div class="blogBanner">
          <img :src="v.image" alt />
        </div>
        <div class="blogTitle">{{v.title}}</div>
        <div class="TitleDescript">
          <div class="newPublic">
            <img src="../../assets/img_blog/新闻iocn.png" alt />
            <span>{{v.dynamicType}}</span>
          </div>
          <div class="newsDate">
            <img src="../../assets/img_blog/时间iocn.png" alt />
            <span>{{v.createTime}}</span>
          </div>
          <div class="newControl">
            <img src="../../assets/img_blog/管理iocn.png" alt />
            <span>{{$t('blog.Admin')}}</span>
          </div>
        </div>
        <div v-html="v.content" class="newsMainContnet">{{v.content}}</div>
      </div>

      <div class="readMoreNews">
        <button @click="getMore()">{{$t('blog.read')}}</button>
      </div>
    </div>
  </div>
</template>

<script>
import { content } from "../../../api";
export default {
  mounted() {
    let p = this.allpage;
    content(1, p, 2)
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
        this.rows = res.data.rows;
      })
      .catch(err => {
        window.console.log(err);
      });
  },
  data() {
    return {
      rows: [],
      allpage: 1
    };
  },
  methods: {
    getMore() {
      this.allpage += 1;
      let p = this.allpage;
      content(1, p, 2)
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
          this.rows = res.data.rows;
        })
        .catch(err => {
          window.console.log(err);
        });
    }
  }
};
</script>

<style lang="less" scoped>
.wrapperBlog {
  padding: 84px 0 96px 0;
  width: 1248px;
  margin: 0 auto;
  .noticeTitle {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding-bottom: 48px;
    height: 99px;
    border-bottom: 1px solid #bebebe;
    .leftTitle {
      font-size: 40px;
      color: #000;
    }
  }
  .blogBanner {
    margin-top: 48px;
    height: 500px;
    width: 1267px;
    margin-bottom: 48px;
    img {
      width: 1267px;
      height: 500px;
    }
  }
  .blogTitle {
    font-size: 20px;
    color: #000;
    margin-bottom: 48px;
  }
  .TitleDescript {
    display: flex;
    justify-content: space-between;
    margin-bottom: 48px;
    div {
      width: 240px;
      height: 50px;
      border: 1px solid rgba(155, 155, 159, 1);
      opacity: 0.6;
      border-radius: 5px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .newPublic {
      img {
        width: 26px;
        height: 22px;
        margin-right: 17px;
      }
      span {
        font-size: 16px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: rgba(155, 155, 159, 1);
      }
    }
    .newsDate {
      img {
        width: 26px;
        height: 26px;
        margin-right: 17px;
      }
      span {
        font-size: 16px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: rgba(155, 155, 159, 1);
      }
    }
    .newControl {
      img {
        width: 19px;
        height: 21px;
        margin-right: 12px;
      }
      span {
        font-size: 16px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: rgba(155, 155, 159, 1);
      }
    }
  }
  .newsMainContnet {
    margin-bottom: 47px;
    p {
      font-size: 16px;
      color: rgba(0, 0, 0, 0.7);
    }
  }
  .readMoreNews {
    button {
      height: 60px;
      background: rgba(255, 112, 0, 1);
      border-radius: 5px;
      border: none;
      outline: none;
      width: 100%;
      font-size: 16px;
      color: #fff;
      font-family: Source Han Sans CN;
      font-weight: 400;
      margin-bottom: 40px;
    }
  }
  .blogTable {
    margin-bottom: 130px;
  }
}
</style>