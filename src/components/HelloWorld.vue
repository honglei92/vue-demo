<template>
  <div id="container">
    <div id="left">
      <h1>2019年最新今日头条/抖音推荐算法原理全文详解</h1>
    </div>
    <div id="right">
      <h1>{{ msg }}</h1>
      <h1>site：{{site}}</h1>
      <h1>url：{{url}}</h1>
      <h1>{{details()}}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "简书会员",
      site: "百度首页",
      url: "www.baidu.com",
      alexa: "10000"
    };
  },
  methods: {
    details: function() {
      return this.site + "-学的不是技术,是未来-";
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
#container {
  display: flex;
  width: 70%;
  margin: 15px;
  margin-left: 20%;
  flex-direction: row;
}
#left {
  width: 60%;
}
#right {
  width: 0.4;
}
</style>
