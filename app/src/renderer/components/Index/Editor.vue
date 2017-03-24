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
import Editor from '../../libs/Editor.js'
import eventBus from '../../libs/eventBus'
import $ from 'jquery'
const $win = $(window)
var editor
export default {
  name: 'editor',
  components: {
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
