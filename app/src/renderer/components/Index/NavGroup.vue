<template>
  <div class="nav">
    <header >
      <a>
        <i class="fa fa-gear"></i>
      </a>
    </header>
    <nav id="J-nav">
      <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
        <el-submenu index="1">
          <template slot="title"><i class="fa fa-book"></i>笔记本</template>
          <el-menu-item-group>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title"><i class="fa fa-flag"></i>标记</template>
          <el-menu-item-group>
            <el-menu-item index="1-1"><i class="fa fa-circle default"></i>蓝色</el-menu-item>
            <el-menu-item index="1-2"><i class="fa fa-circle success"></i>绿色</el-menu-item>
            <el-menu-item index="1-2"><i class="fa fa-circle warning"></i>橙色</el-menu-item>
            <el-menu-item index="1-2"><i class="fa fa-circle danger"></i>红色</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title"><i class="fa fa-tags"></i>标签</template>
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
        <el-menu-item index="4"><i class="fa fa-trash"></i>回收站</el-menu-item>
      </el-menu>
    </nav>
  </div>
</template>
<script>
  import $ from 'jquery'
  // import eventBus from '../../libs/eventBus'

  var $win = $(window)
  export default {
    name: 'titlebar',
    components: {
    },
    mounted () {
      // this.resize()
      // eventBus.on('window.resize', e => {
      //   this.resize()
      // })
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
  display: flex;
  flex-direction: column;
  width: 100%;

  header{
    -webkit-app-region: drag;
    -webkit-user-select: none;
    height: $header-height;
    min-height: $header-height;
    display: flex;
    
    a{
      display: flex;
      flex: 1 1 auto;
      align-items: center;
      justify-content: flex-end;
      padding: 10px 10px 5px 10px;
      color: #8492A6;
      &:hover{
        color: #D3DCE6;
      }
    }
  }
  nav{
    overflow-y: auto;
    display: flex;
    flex: 1 auto;
    height: auto;
  }
  
  .el-menu {
    color: #797B7F;
    border-radius: 0;
    background-color: transparent;
    width: 100%;

    .el-submenu__title i.fa{
      margin-right: 10px;
    }
    .el-menu-item i.fa.fa-trash{
      margin-right: 13px;
    }
    .el-menu-item i.fa{
      margin-right: 5px;
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
