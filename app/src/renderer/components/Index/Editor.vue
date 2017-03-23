<template>
  <div class="editor" id="J-editor">
    
  </div>
</template>

<style lang="scss">
.editor{
  // padding: 10px;
  color: #D3DCE6;
}
</style>

<script>
import Icon from 'vue-awesome/components/Icon.vue'
import 'vue-awesome/icons/eye'
import 'vue-awesome/icons/columns'
import 'vue-awesome/icons/clipboard'
import 'vue-awesome/icons/save'
import Editor from '../../libs/Editor.js'
import eventBus from '../../libs/eventBus'
import $ from 'jquery'
const $win = $(window)
var editor
export default {
  name: 'editor',
  components: {
    Icon
  },
  mounted () {
    editor = new Editor('#J-editor', { text: '' })
    eventBus.on('window.resize', e => {
      this.resize()
    })
  },
  methods: {
    resize () {
      let height = $win.height() - 34 - 91
      $('#J-editor').height(height)
      editor.resize.bind(editor)(height)
    }
  }
}
</script>
