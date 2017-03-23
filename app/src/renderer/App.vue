<template>
  <div id="#app">
    <router-view></router-view>
  </div>
</template>

<script>
  import store from 'renderer/vuex/store'
  export default {
    store
  }
</script>

<style>
*{
  margin: 0;
  padding:0;
}
html { overflow: hidden; }
html, body{
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
}
body{
  color: #5e6d82;
  box-sizing: border-box;
  user-select: none;
  -webkit-user-select: none;
  background-color: white;
}
body, #app{
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
::-webkit-scrollbar {
    width:9px;
}

::-webkit-scrollbar-track {
    -webkit-border-radius:5px;
    border-radius:5px;
    background:rgba(0,0,0,0.1);
}

::-webkit-scrollbar-thumb {
    -webkit-border-radius:5px;
    border-radius:5px;
    background:rgba(255,255,255,0.2);
}

::-webkit-scrollbar-thumb:hover {
    background:rgba(255,255,255,0.5);
}

::-webkit-scrollbar-thumb:window-inactive {
    background:rgba(0,0,0,0.05);
}
</style>
