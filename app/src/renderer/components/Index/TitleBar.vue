<template>
  <div>
    <header class="toolbar toolbar-header" style="-webkit-app-region: drag;-webkit-user-select: none;">
      <div class="toolbar-actions">
        <button class="btn btn-default" title="隐藏文件夹">
          <span class="icon"><octicon name="list-unordered"></octicon></span>
        </button>
        <button class="btn btn-default" title="删除">
          <span class="icon"><octicon name="trashcan"></octicon></span>
        </button>
        <button class="btn btn-default" title="添加新文件">
          <span class="icon"><octicon name="pencil"></octicon></span>
        </button>
        <div class="input-inline pull-right">
          <octicon name="search"></octicon>
          <input type="text" placeholder="">
        </div>
        <button class="btn btn-default pull-right" title="导出PDF">
          <span class="icon"><octicon name="file-pdf"></octicon></span>
        </button>
        <button class="btn btn-default btn-dropdown pull-right">
          <span class="icon icon-megaphone"></span>
        </button>
      </div>
    </header>
  </div>
</template>
<script>
  import Octicon from 'vue-octicon/components/Octicon.vue'
  import 'vue-octicon/icons/search'
  import 'icons'
  import 'vue-octicon/icons/pencil'
  import 'vue-octicon/icons/list-unordered'
  import 'vue-octicon/icons/trashcan'
  import 'vue-octicon/icons/file-pdf'
  export default {
    name: 'titlebar',
    components: {
      Octicon
    }
  }
</script>
<style lang="scss" scoped>
.icon{
  color: #333;
}
.input-inline{
  width: 140px;
  font-size: 12px;
  position: relative;
  display: inline-block;
  margin: 0 4px;

  svg{
    position: absolute;
    top: 0;
    left: 4px;
    color: #737475;
    height: 100%;
    text-align: center;
    width: 14px;
  }
  input{
    -webkit-appearance: none;
    appearance: none;
    background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #c2c0c2;
    border-bottom-color: #a19fa1;
    background-color: #fcfcfc;
    box-sizing: border-box;
    color: #1f2d3d;
    font-size: 12px;
    height: 24px;
    line-height: 1;
    outline: none;
    padding: 3px 10px;
    width: 100%;
    padding-left: 28px;
  }
}
.toolbar-header{
  padding-left: 70px;
}
.toolbar-actions{
  padding: 0;
  margin: 7px;
}
</style>
