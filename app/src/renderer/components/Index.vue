<template>
  <div>
    <title-bar></title-bar>
    <div class="pane-group">
      <div class="pane pane-nav">
        <nav-group></nav-group>
      </div>
      <div class="pane">
        <list-group></list-group>
      </div>
      <div class="pane"></div>
      <div class="pane"></div>
    </div>

  </div>
</template>

<script>
import TitleBar from './Index/TitleBar'
import NavGroup from './Index/NavGroup'
import ListGroup from './Index/ListGroup'
export default {
  components: {
    TitleBar,
    NavGroup,
    ListGroup
  },
  name: 'index'
}
</script>

<style lang="scss">
.pane-nav{
  background-color: #f0f0f0;
}
.pane-group{
  top: 40px;
}
.pane{
  flex: none;
  min-width: 200px;
}
</style>
