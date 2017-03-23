<template>
  <div class="cols">
    <div class="col J-col"><nav-group></nav-group></div>
    <div class="col J-col"><list-group></list-group></div>
    <div class="col J-col"><editor-group></editor-group></div>
  </div>
</template>

<script>
import EditorGroup from './Index/EditorGroup'
import ListGroup from './Index/ListGroup'
import NavGroup from './Index/NavGroup'
import $ from 'jquery'
import eventBus from '../libs/eventBus'
export default {
  components: {
    EditorGroup,
    ListGroup,
    NavGroup
  },
  mounted () {
    this.resize()
    $(window).resize(this.resize)
  },
  methods: {
    resize () {
      let w = $(window).width()
      let $col = $('.J-col')
      $('#J-editor').width(w - $col.eq(0).width() - $col.eq(1).width())
      eventBus.emit('window.resize')
    }
  },
  name: 'index'
}
</script>

<style lang="scss">
@import "bourbon";
.cols{
  display: flex;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
}
.col{
  position: relative;
  height: 100%;
  min-height: 100%;
  @include clearfix;
  
  &:nth-child(1){
    width: 170px;
    background: #1F2D3D;
  }
  &:nth-child(2){
    width: 260px;
    background-color: #F5F5F4;
  }
}
</style>
