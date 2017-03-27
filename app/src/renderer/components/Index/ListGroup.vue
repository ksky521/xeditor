<template>
  <div class="article-list">
    <header>
      <div class="hd-left">
        <el-dropdown>
          <span class="el-dropdown-link" title="导出">
            <i class="fa fa-sort-amount-desc"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>导出 HTML</el-dropdown-item>
            <el-dropdown-item>导出 PDF</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <div class="note-title">
        <h3>笔记本名称很长很航很长很长很航很长</h3>
      </div>
      <div class="hd-right">
        <a class="add-note">
          <i class="fa fa-edit"></i>
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
              <div class="info">
                <time>1s前</time>
                <span class="el-tag">tag</span>
                <span class="el-tag">标签</span>
                <span class="el-tag">tag3</span>
                <span class="el-tag">tag4</span>
              </div>
              <p>这里是文章正文内容这里是文章正文内容这里是文章正文内容这里是文章正文内容这里是文章正文内容这里是文章正文内容这里是文章正文内容</p>
            </article>
          </el-badge>
        </li>
        <li>
          <h4>这里是一个很长很长很长很长很长很长很长很长很长的文章标题</h4>
          <article>
            <div class="info">
              <time>4小时前</time>
              <span class="el-tag">tag</span>
                <span class="el-tag">标签</span>
              <span class="el-tag">tag2</span>
              <span class="el-tag">tag3</span>
              <span class="el-tag">tag4</span>
            </div>
            <p>这里是文章正文内容这里是文章正文内容这里是文章正文内容这里是文章正文内容这里是文章正文内容这里是文章正文内容这里是文章正文内容</p>
          </article>
        </li>
        <li class="">
          <h4>这里是文章标题</h4>
          <article>
            <div class="info">
              <time>4小时前</time>
              <span class="el-tag">tag</span>
            </div>
            <p>这里是文章正文内容这里是文章正文内容这里是文章正文内容这里是文章正文内容这里是文章正文内容这里是文章正文内容这里是文章正文内容</p>
          </article>
        </li>
        <li class="">
          <h4>这里是文章标题</h4>
          <article>
            <div class="info">
              <time>4小时前</time>
            </div>
            <p>这里是文章正文内容这里是文章正文内容这里是文章正文内容这里是文章正文内容这里是文章正文内容这里是文章正文内容这里是文章正文内容</p>
          </article>
        </li>
        <li class="">
          <h4>这里是文章标题</h4>
          <article>
            <div class="info">
              <time>4小时前</time>
            </div>
            <p>这里是文章正文内容这里是文章正文内容这里是文章正文内容这里是文章正文内容这里是文章正文内容这里是文章正文内容这里是文章正文内容</p>
          </article>
        </li>
        <li class="">
          <h4>这里是文章标题</h4>
          <article>
            <div class="info">
              <time>4小时前</time>
            </div>
            <p>这里是文章正文内容这里是文章正文内容这里是文章正文内容这里是文章正文内容这里是文章正文内容这里是文章正文内容这里是文章正文内容</p>
          </article>
        </li>
        <li class="">
          <h4>这里是文章标题</h4>
          <article>
            <div class="info">
              <time>4小时前</time>
              <span class="el-tag">tag</span>
            </div>
            <p>这里是文章正文内容这里是文章正文内容这里是文章正文内容这里是文章正文内容这里是文章正文内容这里是文章正文内容这里是文章正文内容</p>
          </article>
        </li>
      </ul>
    </section>
  </div>
</template>
<script>
import $ from 'jquery'
import eventBus from '../../libs/eventBus'

var $win = $(window)
export default {
  name: 'listgroup',
  components: {
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
    handleIconClick () {
      console.log(this.query)
    },
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
  display: flex;
  margin: 0;
  width: 100%;
  flex-direction: column;
  box-sizing: border-box;
  position: relative;

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
      a:hover, a.active:hover, span.el-dropdown-link:hover{
        color: #20A0FF;
      }
    }
    .hd-right{
      float: right;
      text-align: right;
      margin-top: -2px;
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
      font-size: 18px;
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
    .info{
      margin-bottom: 3px;
      time{
        margin-right: 6px;
        color: #58B7FF;
        font-weight: 200;
      }
      .el-tag{
        display: inline-block;
        line-height: 1;
        height: auto;
        margin-right: 2px;
        border-radius: 10px;
        border: none;
        box-shadow: 0 0 0 1px rgba(24,26,28,0.25) inset;
        color:#191919;
        background-color: #E8E8E8;
        padding: 3px 4px;
        font-weight: normal;
        font-size: 10px;
      }
    }
    p{
      height: 50px;
      -webkit-line-clamp: 3;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
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
