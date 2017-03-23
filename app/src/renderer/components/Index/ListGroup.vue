<template>
  <div class="article-list">
    <header>
      <div class="hd-left">
        <a >
          <icon name="sort-amount-desc"></icon>
        </a>
      </div>
      <div class="note-title">
        <h3>笔记本名称很长很航很长很长很航很长</h3>
      </div>
      <div class="hd-right">
        <a class="add-note">
          <icon name="pencil"></icon>
        </a>
      </div>
    </header>
    <section id="J-article-list">
      <div class="search">
        <el-input placeholder="搜索..."
                  icon="search"
                  v-model="query"
                  :on-icon-click="handleIconClick">
        </el-input>
      </div>
      <ul class="articles">
        <li class="active">
          <el-badge is-dot class="item">
            <h4>这里是文章标题</h4>
            <article>
              <time>4小时前</time>这里是文章正文内容这里是文章正文内容这里是文章正文内容这里是文章正文内容这里是文章正文内容这里是文章正文内容这里是文章正文内容
            </article>
          </el-badge>
        </li>
        <li>
          <h4>这里是一个很长很长很长很长很长很长很长很长很长的文章标题</h4>
          <article>
            <time>4小时前</time>这里是文章正文内容这里是文章正文内容这里是文章正文内容这里是文章正文内容这里是文章正文内容这里是文章正文内容这里是文章正文内容
          </article>
        </li>
        <li class="">
          <h4>这里是文章标题</h4>
          <article>
            <time>4小时前</time>这里是文章正文内容这里是文章正文内容这里是文章正文内容这里是文章正文内容这里是文章正文内容这里是文章正文内容这里是文章正文内容
          </article>
        </li>
        <li class="">
          <h4>这里是文章标题</h4>
          <article>
            <time>4小时前</time>这里是文章正文内容这里是文章正文内容这里是文章正文内容这里是文章正文内容这里是文章正文内容这里是文章正文内容这里是文章正文内容
          </article>
        </li>
        <li class="">
          <h4>这里是文章标题</h4>
          <article>
            <time>4小时前</time>这里是文章正文内容这里是文章正文内容这里是文章正文内容这里是文章正文内容这里是文章正文内容这里是文章正文内容这里是文章正文内容
          </article>
        </li>
        <li class="">
          <h4>这里是文章标题</h4>
          <article>
            <time>4小时前</time>这里是文章正文内容这里是文章正文内容这里是文章正文内容这里是文章正文内容这里是文章正文内容这里是文章正文内容这里是文章正文内容
          </article>
        </li>
        <li class="">
          <h4>这里是文章标题</h4>
          <article>
            <time>4小时前</time>这里是文章正文内容这里是文章正文内容这里是文章正文内容这里是文章正文内容这里是文章正文内容这里是文章正文内容这里是文章正文内容
          </article>
        </li>
        <li class="">
          <h4>这里是文章标题</h4>
          <article>
            <time>4小时前</time>这里是文章正文内容这里是文章正文内容这里是文章正文内容这里是文章正文内容这里是文章正文内容这里是文章正文内容这里是文章正文内容
          </article>
        </li>
      </ul>
    </section>
  </div>
</template>
<script>
import 'vue-awesome/icons/pencil'
import 'vue-awesome/icons/sort-amount-asc'
import 'vue-awesome/icons/sort-amount-desc'
import Icon from 'vue-awesome/components/Icon.vue'
import $ from 'jquery'
import eventBus from '../../libs/eventBus'

var $win = $(window)
export default {
  name: 'listgroup',
  components: {
    Icon
  },
  data () {
    return {
      query: ''
    }
  },
  mounted () {
    this.resize()
    eventBus.on('window.resize', e => {
      this.resize()
    })
  },
  methods: {
    resize () {
      $('#J-article-list').height($win.height() - 34)
    },
    handleOpen (key, keyPath) {
    },
    handleClose (key, keyPath) {
    }
  }
}
</script>
<style lang="scss">
@import "bourbon";

.el-badge__content{
  border: none;
}
.article-list {
  $header-height: 34px;
  @include clearfix;

  header {
    -webkit-app-region: drag;
    height: $header-height;
    left: 0;
    top: 0;
    position: absolute;
    z-index: 2;
    width: 100%;
    @include clearfix;
    padding: 10px 10px 5px;
    box-sizing: border-box;
    
    .hd-left, .hd-right{
      width: 20px;
      float: left;
      @include clearfix;
    }
    .hd-right{
      float: right;
      text-align: right;
    }
    .note-title{
      width: 100%;
      margin: 0 -20px;
      float: left;
      @include clearfix;
      box-sizing: border-box;
    }
    .add-note{
      text-align: right;
    }
    h3{
      width: 70%;
      margin: -1px auto 0;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      text-align: center;
      font-size: 14px;
      font-weight: normal;
    }
  }
  section {
    margin-top: $header-height;
    position: relative;
    z-index: 1;
    overflow-y: auto;
    height: 500px;
  }
  .search{
    padding: 10px;
  }
  .el-input{
    font-size: 12px;

  }
  .el-input__inner{
    height: 30px;
  }
  .articles{
    li{
      cursor: default;
      padding:8px 10px;
      font-size: 12px;
      border-bottom: 1px solid #E8E8E8;
      color: #878787;
      overflow: hidden;
      box-sizing: border-box;
      height: 113px;
      &:hover{
        background-color: #E5E9F2;
      }
    }
    h4{
      line-height: 24px;
      font-size: 14px;
      font-weight: 500;
      height: 24px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      color: #191919;
    }
    time{
      margin-right: 8px;
      color: #58B7FF;
      font-weight: 200;
    }
    li.active{
      background-color: #5183FF;
      color: white;
      h4{
        color: white;
      }
      time{
        color: white;
      }
    }
  }
}
</style>
