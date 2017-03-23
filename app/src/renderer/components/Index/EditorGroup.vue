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
        <el-dropdown>
          <span class="el-dropdown-link" title="导出">
            <i class="el-icon-more"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>导出 HTML</el-dropdown-item>
            <el-dropdown-item>导出 PDF</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <a @click="" class="" title="复制">
          <i class="el-icon-document"></i>
        </a>
        <a @click="" class="active">
          <i class="el-icon-delete2" title="删除"></i>
        </a>
        
      </div>
    </header>
    <div class="editor-wrap">
      <div class="article-title">
        <div class="title">
          <input type="text" v-model="title" placeholder="请输入标题...">
        </div>
        <div class="tags">
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
                    @click="showInput">+ New Tag</el-button>
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
  .el-dropdown-menu__item{
    font-size: 12px;
    line-height: 28px;
  }
}
.container {
  position: relative;
  
  header {
    -webkit-app-region: drag;
    height: $header-height;
    z-index: 2;
    width: 100%;
    @include clearfix;
    box-sizing: border-box;    
    padding: 10px 10px 5px;

    .hd-left, .hd-right{
      float: left;
      @include clearfix;
      width: 40px;
      text-align: left;
      color: #5e6d82;
      font-size: 14px;
      a{
        display: inline-block;
        float: left;
        width: 20px;
      }
    }
    .hd-left{
      a{
        color: #E5E9F2;
        &.active{
          color: #5e6d82;
        }
      }
    }
    .hd-right{
      width: 124px;
      float: right;
      margin-right: -6px;
      &>*{
        text-align: center;
        width: 30px;
        display: inline-block;
      }
      a{
        width: 30px;
      }
      .el-dropdown{
        // float: right;
      }
    }
  }
  .editor-wrap{
    .title input{
      font-size: 18px;
      font-weight: 400;
      line-height: 36px;
      border: none;
      width: 100%;
      box-sizing: border-box;
      padding: 5px 0;
      &:focus{
        outline: 0;
      }
    }
    .tags{
      padding: 5px 0;
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
    .article-title{
      border-bottom: 1px solid #E8E8E8;
      padding: 10px 10px 0;
    }
  }
}
</style>
<script>

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
