<template>
  <div class="container">
    <header>
      <div class="hd-left">
        <a @click="" class="active" title="上一篇">
          <i class="el-icon-arrow-left"></i>
        </a>
        <a @click="" class="">
          <i class="el-icon-arrow-right" title="下一篇"></i>
        </a>
      </div>
      <div class="hd-right">
        <el-dropdown>
          <span class="el-dropdown-link" title="导出">
            <i class="el-icon-upload2"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>导出 HTML</el-dropdown-item>
            <el-dropdown-item>导出 PDF</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <a @click="" class="active">
          <i class="el-icon-delete2" title="删除"></i>
        </a>
        <el-dropdown>
          <span class="el-dropdown-link" title="更多">
            <i class="el-icon-more"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>导出 HTML</el-dropdown-item>
            <el-dropdown-item>导出 PDF</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </header>
    <div class="editor-wrap">
      <div class="editor-title">
        <input type="text" v-model="title" placeholder="请输入标题...">
      </div>
      <div class="editor-meta">
          <div class="note-flags">
            <el-dropdown>
              <span class="el-dropdown-link" title="颜色标记">
                标记<i class="fa fa-caret-down"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item v-for="flag in flags"><i v-bind:class="'fa fa-circle ' + flag.name"></i>{{ flag.color }}</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
          <div class="note-tags">
            <el-tag :key="tag"
                    v-for="tag in dynamicTags"
                    :closable="true"
                    :close-transition="false"
                    :type="tag.type"
                    @close="handleClose(tag)">
              {{tag.name}}
            </el-tag>
            <el-input class="input-new-tag"
                      v-if="inputVisible"
                      v-model="inputValue"
                      ref="saveTagInput"
                      size="mini"
                      @keyup.enter.native="handleInputConfirm"
                      @blur="handleInputConfirm">
            </el-input>
            <el-button v-else
                      class="button-new-tag"
                      size="small"
                      @click="showInput">+ Add Tag</el-button>
          </div>
        </div>
      <i-editor></i-editor>
    </div>
  </div>
</template>
<style lang="scss">
@import "bourbon";
$header-height: 34px;
.el-dropdown{
  font-size: 14px;
}
.el-dropdown-menu{
  min-width: 60px;
  .el-dropdown-menu__item{
    font-size: 12px;
    line-height: 28px;
  }
}
.container {
  display: flex;
  flex: 1;
  flex-direction: column;
  min-height: 0;
  
  header {
    -webkit-app-region: drag;
    height: $header-height;
    min-height: $header-height;
    display: flex;
    flex-direction: row;
    flex: 0;
    align-items: center;
    width: 100%;
    box-sizing: border-box;    
    padding: 0 10px 0;

    .hd-left, .hd-right{
      color: #5e6d82;
      display: flex;
      align-items: center;
      flex-direction: row;
      justify-content: flex-end;
      a{
        display: inline-block;
      }
      a:hover, a.active:hover, span.el-dropdown-link:hover{
        color: #20A0FF;
      }
    }
    .hd-left{
      flex: 0 1 auto;
      margin-right: 4px;
      a{
        color: rgba(0,0,0,0.15);
        display: flex;
        flex-direction: row;
        align-items: center;
        font-size: 12px;
        text-align: center;
        min-height: 1em;
        i{
          padding: 8px 10px;
          
        }
        &:first-child i{
          padding-left: 0;
        }
        &.active{
          color: #5e6d82;
        }
      }
    }
    .hd-right{
      flex: 1 0 auto;
      &>*{
        text-align: center;
        width: 30px;
        display: inline-block;
      }
      a{
        width: 30px;
      }
    }
  }
  .editor-wrap{
    display: flex;
    flex: 1;
    flex-direction: column;
    .editor-title{
      display: inline-flex;
      position: relative;
      font-size: 1em;
      width: 100%;
    }
    .editor-title input{
      font-size: 18px;
      font-weight: 400;
      line-height: 36px;
      border: none;
      width: 100%;
      box-sizing: border-box;
      flex: 1 0 auto;
      padding: 5px 10px;
      color: rgba(0,0,0,0.8);
      box-sizing: border-box;
      
      &:focus{
        outline: 0;
      }
    }
    .editor-meta{
      display: flex;
      flex-direction: row;
      padding: 5px 10px;
      border-bottom: 1px solid #E8E8E8;
      box-sizing: border-box;

      .note-flags{
        display: flex;
        justify-content: center;
        align-items: center;
        .el-dropdown i.fa{
          margin-left: 5px;
        }
      }
      .note-tags{
        flex: 1 auto;
      }
      .el-tag{
        margin-left: 10px;

        &:first-child{
          margin-left: 0;
        }
      }
      .button-new-tag{
        margin-left: 10px;
        height: 24px;
        line-height: 22px;
        padding-top: 0;
        padding-bottom: 0;
      }
      .input-new-tag {
        width: 78px;
        margin-left: 10px;
        vertical-align: bottom;
        .el-input__inner {
          height: 24px
        }
      }

    }
    
  }
}
</style>
<script>
import {mapGetters} from 'vuex'
import iEditor from './Editor'
// import $ from 'jquery'
// import eventBus from '../libs/eventBus'

export default {
  name: 'editorgroup',
  components: {
    iEditor
  },
  data () {
    return {
      dynamicTags: [{ name: '标签一', type: '' },
          { name: '标签四', type: 'success' },
          { name: '标签五', type: 'warning' },
          { name: '标签六', type: 'danger' }],
      inputVisible: false,
      inputValue: '',
      title: ''
    }
  },
  computed: {
    ...mapGetters({
      flags: 'allFlags'
    })
  },
  methods: {
    handleClose (tag) {
      this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1)
    },

    showInput () {
      this.inputVisible = true
      this.$nextTick(_ => {
        this.$refs.saveTagInput.$refs.input.focus()
      })
    },

    handleInputConfirm () {
      let inputValue = this.inputValue
      if (inputValue) {
        this.dynamicTags.push(inputValue)
      }
      this.inputVisible = false
      this.inputValue = ''
    }
  }
}
</script>
