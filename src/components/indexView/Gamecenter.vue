<template>
  <div class="wrapper">
    <div class="content">
      <div class="title">
        <div>{{$t('Game.have')}}</div>
        <div>{{$t('Game.someGame')}}</div>
      </div>
      <div class="gameList">
        <div class="lineOne">
          <div v-for="(v,i) in gamelistone" :key="i" class="gameTable">
            <img :src="v.url" alt />
            <p class="gamename">{{v.name}}</p>
          </div>
        </div>
        <div class="lineSecond">
          <div v-for="(v,i) in gamelistsecond" :key="i" class="gameTable">
            <img :src="v.url" alt />
            <p class="gamename">{{v.name}}</p>
          </div>
        </div>
        <div class="lineThird">
          <div v-for="(v,i) in gamelistthird" :key="i" class="gameTable">
            <img :src="v.url" alt />
            <p class="gamename">{{v.name}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      gamelistone: [
        { name: "Critical strike ", url: require("../../assets/imgs/1.png") },
        { name: "AFK arena", url: require("../../assets/imgs/2.png") },
        { name: "Card heroes", url: require("../../assets/imgs/3.png") },
        { name: "Fw.entertainment ", url: require("../../assets/imgs/4.png") }
      ],
      gamelistsecond: [
        { name: "Shadow deck", url: require("../../assets/imgs/5.png") },
        {
          name: "Deck warlords tcg card game",
          url: require("../../assets/imgs/6.png")
        },
        {
          name: "Deck heroes legacy ",
          url: require("../../assets/imgs/7.png")
        },
        {
          name: "Dragon ball entertainment ",
          url: require("../../assets/imgs/8.png")
        }
      ],
      gamelistthird: [
        { name: "Call of duty ", url: require("../../assets/imgs/9.png") },
        {
          name: "Fight with walking dead ",
          url: require("../../assets/imgs/10.png")
        },
        { name: "Age of z", url: require("../../assets/imgs/11.png") },
        { name: "War robots ", url: require("../../assets/imgs/12.png") }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
.wrapper {
  background: #f4f4f4;
}
.content {
  padding: 89px 0 96px 0;
  width: 1248px;
  margin: 0 auto;
  .title {
    margin-bottom: 68px;
  }
  .title > div:nth-child(1) {
    text-align: center;
    font-size: 40px;
    color: #000;
    margin-bottom: 46px;
  }
  .title > div:nth-child(2) {
    text-align: center;
    font-size: 16px;
    color: rgba(0, 0, 0, 0.7);
  }
  .gameList {
    .lineOne {
      margin-bottom: 82px;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
    }
    .lineSecond {
      margin-bottom: 82px;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
    }
    .lineThird {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
    }
  }
  .gameTable {
    position: relative;
    width: 240px;
    height: 122px;
    background: #ebebeb;
    border-radius: 10px;
    img {
      width: 99px;
      height: 99px;
      position: absolute;
      top: -46px;
      left: 28.5%;
    }
    .gamename {
      margin: 76px 61px 23px 65px;
      text-align: center;
      font-size: 14px;
    }
  }
  .gameTable:hover {
    background: #fff;
  }
}
</style>