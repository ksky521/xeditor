<template>
  <div class="nav">
    <header >
      <a>
        <icon name="list-ul"></icon>
      </a>
    </header>
    <nav id="J-nav">
      <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
        <el-submenu index="1">
          <template slot="title"><icon name="book"></icon>笔记本</template>
          <el-menu-item-group>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title"><icon name="tags"></icon>标签</template>
          <el-menu-item-group>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </nav>
  </div>
</template>
<script>
  
  import 'vue-awesome/icons/list-ul'
  import 'vue-awesome/icons/book'
  import 'vue-awesome/icons/tags'
  import Icon from 'vue-awesome/components/Icon.vue'
  import $ from 'jquery'
  import eventBus from '../../libs/eventBus'

  var $win = $(window)
  export default {
    name: 'titlebar',
    components: {
      Icon
    },
    mounted () {
      this.resize()
      eventBus.on('window.resize', e => {
        this.resize()
      })
    },
    methods: {
      resize () {
        $('#J-nav').height($win.height() - 34)
      },
      handleOpen (key, keyPath) {
        console.log(key, keyPath)
      },
      handleClose (key, keyPath) {
        console.log(key, keyPath)
      }
    }
  }
</script>
<style lang="scss">
$header-height: 34px;
.nav{
  header{
    -webkit-app-region: drag;
    height: $header-height;
    left: 0;
    top: 0;
    position: absolute;
    background: #1F2D3D;
    z-index: 2;
    width: 100%; 
    
    a{
      float: right;
      padding: 10px 10px 5px 10px;
      color: #8492A6;
      &:hover{
        color: #D3DCE6;
      }
    }
  }
  nav{
    margin-top: $header-height;
    position: relative;
    z-index: 1;
    overflow-y: auto;
    height: 500px;
  }
  
  .el-menu {
    color: #797B7F;
    border-radius: 0;
    background-color: transparent;

    svg{
      position: relative;
      top: 3px;
      margin-right: 10px;
    }
  }
  .el-submenu .el-menu {
    border-radius: 0;
    background-color: transparent;
  }
  .el-submenu .el-menu-item{
    padding: 0 20px;
  }
  .el-submenu .el-menu-item:hover, 
  .el-submenu__title:hover, 
  .el-menu-item:hover{
    background-color: #475669;
    color: #D3DCE6;
  }
  .el-menu-item, .el-submenu__title{
    height: 36px;
    line-height: 36px;
    color: #8492A6;
  }
  .el-menu-item-group__title{
    padding-top: 0;
  }
  
}
</style>
