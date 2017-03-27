<template>
  <div class="editor" id="J-editor">
    <markdown-editor v-model="content"
                     ref="markdownEditor"
                     :configs="configs"></markdown-editor>
  </div>
</template>

<style lang="scss">
.editor {
  color: #D3DCE6;
  display: flex;
  flex-direction: column;
  width: 100%;
  flex: 1 0 0;
  min-height: 0;
}
.editor-toolbar{
  border: none;
  padding: 0 5px;
  border-radius: 0 !important;
  &.fullscreen{
    text-align: right;
  }
  a{
    outline: none;
  }
}
.CodeMirror {
  border: none;
  padding: 5px;
}
</style>

<script>
import { markdownEditor } from 'vue-simplemde'
export default {
  components: {
    markdownEditor
  },
  data () {
    return {
      content: '',
      configs: {
        placeholder: 'Type here...',
        status: false,
        spellChecker: false,
        toolbar: ['preview', 'side-by-side', 'fullscreen', '|', 'bold', 'italic', 'strikethrough', '|', 'heading', 'quote', '|', 'unordered-list', 'ordered-list', '|', 'link', 'table', 'image']
      }
    }
  },
  mounted () {
  }
}
</script>
