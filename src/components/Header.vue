<template>
  <div>
    <div id="nav">
      <img id="logo" src="../assets/images/nav-logo.png" v-on:click="back">
      <ul id="navul">
        <li v-for="(list,index) in navList" :key="list.name">
          <router-link class="link" :to="list.url" active-class="active">{{list.name}}</router-link>
        </li>
      </ul>
      <div id="searchcontainer">
        <input id="search" placeholder="搜索" @focus="open" @blur="open">
        <img id="searchimg" src="../assets/images/search.svg">
      </div>
      <div id="headarea">
        <img id="headicon" src="../assets/images/ic_head_default.png">
        <img id="headselect" src="../assets/images/m_icon_choose.png">
      </div>
      <i class="theme">Aa</i>
    </div>
    <hr id="line">
  </div>
</template>
<script>
export default {
  name: "header-nav",
  data: function() {
    return {
      navList: [
        { name: "发现", url: "/Home", index: 0 },
        { name: "关注", url: "/Follow", index: 1 },
        { name: "消息", url: "/Message", index: 2 }
      ]
    };
  },
  methods: {
    open: function() {
      var con = document.getElementById("searchcontainer");
      var searchimg = document.getElementById("searchimg");
      var width = parseInt(
        con.style.width || con.clientWidth || con.offsetWidth || con.scrollWidth
      );
      console.log(width);
      if (width == 240) {
        con.style.width = "300px";
        searchimg.style.backgroundColor = "#777";
      } else {
        con.style.width = "240px";
        searchimg.style.backgroundColor = "#eee";
      }
    },
    back: function() {
      this.$router.push('/Home')
    }
  }
};
</script>
<style>
#nav {
  height: 56px;
  width: 100%;
  margin-top: 0%;
}
#logo {
  width: 100px;
  margin-left: 40px;
  float: left;
  cursor: pointer;
}
#navul {
  height: 100%;
  margin-left: 110px;
  float: left;
  vertical-align: middle;
}
#navul li {
  float: left;
  width: 89px;
  height: 56px;
  line-height: 56px;
  align-content: center;
  list-style: none;
}
.link {
  width: 89px;
  height: 56px;
  line-height: 56px;
  display: inline-block;
  cursor: pointer;
  font-size: 16px;
  color: #333333;
  text-decoration: none;
}
.link:hover {
  text-decoration: none;
}
.active {
  color: #ea6f5a;
}
#navul li:hover {
  background: #eee;
}
#searchcontainer {
  height: 38px;
  margin-left: 20px;
  width: 240px;
  margin-top: 9px;
  background: #eeeeee;
  float: left;
  transition: width 0.5s;
  border-radius: 19px;
}
#search {
  float: left;
  margin-left: 19px;
  height: 36px;
  line-height: 56px;
  border: 0;
  outline: none;
  background-color: transparent;
  text-align: left;
  font-size: 14px;
  font-family: "Times New Roman", Georgia, Serif;
  vertical-align: middle;
}
#searchimg {
  float: right;
  margin: 7px;
  height: 24px;
  cursor: pointer;
  border-radius: 12px;
}
.theme {
  line-height: 56px;
  float: right;
  height: 56px;
  margin-right: 10px;
  font-size: 18px;
  color: #999;
  cursor: pointer;
}
#headarea {
  height: 56px;
  float: right;
  margin-right: 100px;
  padding-left: 20px;
  padding-right: 10px;
  align-items: center;
}
#headarea:hover {
  background-color: #eeeeee;
  cursor: pointer;
}
#headicon {
  height: 36px;
  margin-top: 10px;
  float: left;
}
#headselect {
  height: 10px;
  float: left;
  line-height: 56px;
  vertical-align: center;
  margin-top: 23px;
  margin-left: 10px;
  align-content: center;
}
#line {
  height: 1px;
  width: 100%;
  background: #eee;
}
</style>
