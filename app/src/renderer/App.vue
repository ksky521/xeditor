<template>
  <div id="#app" class="window">
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
html,
body { height: 100%; }
body{
  border-radius: 4px;
  box-sizing: border-box;
  user-select: none;
  -webkit-user-select: none;
  background-color: #f6f6f4;
}
</style>
