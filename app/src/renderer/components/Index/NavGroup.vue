<template>
  <div>
    <nav class="nav-group">
      <h5 class="nav-group-title">Favorites</h5>
      <a class="nav-group-item active">
        <span class="icon icon-home"></span>
        connors
      </a>
      <span class="nav-group-item">
        <span class="icon icon-download"></span>
        Downloads
      </span>
      <span class="nav-group-item">
        <span class="icon icon-folder"></span>
        Documents
      </span>
      <span class="nav-group-item">
        <span class="icon icon-signal"></span>
        AirPlay
      </span>
      <span class="nav-group-item">
        <span class="icon icon-print"></span>
        Applications
      </span>
      <span class="nav-group-item">
        <span class="icon icon-cloud"></span>
        Desktop
      </span>
    </nav>
    <nav class="bottom">
      <a class="nav-group-item">
        <octicon name="add"></octicon>
        <span>新建文件夹</span>
      </a>
    </nav>
  </div>
</template>
<script>
  import Octicon from 'vue-octicon/components/Octicon.vue'
  import 'icons/add'
  export default {
    name: 'titlebar',
    components: {
      Octicon
    }
  }
</script>
<style lang="scss" scoped>
.nav-group-item:active, .nav-group-item.active{
  background-color: #3F86FD;
  color: white;
  .icon{
    color: white;
  }
}
  nav.bottom{
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;

    a.nav-group-item{
      padding: 8px;
      width: 100%;
      height: 32px;
      overflow: hidden;
      &:hover{
        background-color:#f0f0f0
      }
    }
    a svg{
      color: #787878;
    }
    a span{
      display: inline-block;
      position: absolute;
      top: 7px;
      font-size: 12px;
      padding-left: 7px;
    }
  }
</style>
