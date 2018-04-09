<template>
  <div id="app">
      <nav class="navbar">
        <router-link :to="{path: '/home'}">主页</router-link>
        <!-- <router-link :to="{path: '/tags'}">标签</router-link> -->
        <router-link :to="{path: '/web-works'}">web作品</router-link>
        <!-- <router-link :to="{path: '/painting-works'}">绘画作品</router-link> -->
        <router-link :to="{path: '/about'}">关于我</router-link>
        <router-link :to="{path: '/admin/login'}">管理员</router-link>
      </nav>
      <div class="iconnav-border">
        <i class="iconfont iconnav" @click="mNav">&#xe62a;</i> 
      </div>
      <nav class="m-navbar" v-if="mNavShow">
        <router-link :to="{path: '/home'}" tag="li">主页</router-link>
        <!-- <router-link :to="{path: '/tags'}">标签</router-link> -->
        <router-link :to="{path: '/web-works'}" tag="li">web作品</router-link>
        <!-- <router-link :to="{path: '/painting-works'}">绘画作品</router-link> -->
        <router-link :to="{path: '/about'}" tag="li">关于我</router-link>
        <router-link :to="{path: '/admin/login'}" tag="li">管理员</router-link>
      </nav>
    <router-view :mnav="mNavShow"/>
    <footer class="footer">
      <div class="contact">
        <a href="https://weibo.com/6437899619/profile?rightmod=1&wvr=6&mod=personinfo&is_all=1" class="iconfont weibo">&#xe62f;</a>
        <a href="https://github.com/noyanse1023" class="iconfont github">&#xe7ab;</a>
        <a href="https://www.jianshu.com/u/84e78d51ad4e" class="iconfont myemail">&#xe722;</a>
      </div>
      <p class="copyright">Copyright © Feng Lu 2018 </p>
    </footer>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      isShowLogDialog:false,
      mNavShow: false
    }
  },
  methods:{
    logClick() {
      this.isShowLogDialog = true
    },
    mNav() {
       this.mNavShow = !this.mNavShow;
    }
  }
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
}
html, body, div, span, applet, object, iframe,
, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,input,textarea,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
h1, h2, h3, h4, h5, h6{
  margin: 0;
  padding: 0;
  border: 0;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
  display: block;
}
body {
  line-height: 1;
  overflow-x: hidden;
  min-height: 100vh; 
  background: url(assets/dust_scratches.png);
}
ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
a {
  color: inherit;
  text-decoration: none;
}
body {
  font-family: "Helvetica Neue",Helvetica,Arial,"Hiragino Sans GB","Hiragino Sans GB W3","Microsoft YaHei UI","Microsoft YaHei","WenQuanYi Micro Hei",sans-serif;
  font-size: 14px;
  color: #444;
}
input,textarea,select {
    font-family: -apple-system,SF UI Text,Arial,PingFang SC,Hiragino Sans GB,Microsoft YaHei,WenQuanYi Micro Hei,sans-serif;
}
ul, ol, li {list-style-type:none;vertical-align:0;}
img{border: 0;outline: none;}
i{display: block;}
.btn{
    display: inline-block;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    border: 1px solid transparent;
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: .25rem;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}
.navbar{
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  background: rgba(124,124,124,0.6);
  text-align: right;
}
.navbar a{
  display: inline-block;
  color: #fff;
  font-weight: 700;
  font-size: 14px;
  margin-left: 10px;
  padding: 10px;
}
.active{
  opacity: 0.7;
}
.footer{
  width: 100%;
  text-align: center;
  padding: 3rem 0;
  border: 1px dotted #ccc;
}
.footer .contact{
  padding: 8px 0;
}
@font-face {
  font-family: 'iconfont';  /* project id 620398 */
  src: url('//at.alicdn.com/t/font_620398_d1dzjnzp6w78ehfr.eot');
  src: url('//at.alicdn.com/t/font_620398_d1dzjnzp6w78ehfr.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_620398_d1dzjnzp6w78ehfr.woff') format('woff'),
  url('//at.alicdn.com/t/font_620398_d1dzjnzp6w78ehfr.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_620398_d1dzjnzp6w78ehfr.svg#iconfont') format('svg');
}
.iconfont{
    font-family:"iconfont" !important;
    font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
}
.contact > a{
  font-size:26px;
}
.contact > a:hover{
  display: inline-block;
  transform:scale(1.1);
  -ms-transform:scale(1.1);   /* IE 9 */
  -moz-transform:scale(1.1);  /* Firefox */
  -webkit-transform:scale(1.1); /* Safari 和 Chrome */
  -o-transform:scale(1.1); /* Opera */
  color: #E6162D;
}
.github,.myemail{
  margin-left: 1rem;
}
.iconnav-border{
  display: none;
}
@media screen and (max-width: 500px){
  .navbar{
    display: none;
  }
  .iconnav-border{
    display: block;
    position: absolute;
    top: 3px;
    right: 8px;
  }
  .iconnav{
    display: block;
    color: #7EBAEB;
    font-size: 2rem;
  }
  .m-navbar{
    width: 100%;
    position: absolute;
    margin-top: 2rem;
    color: #fff;
  }
  .m-navbar li{
    width: 100%;
    height: 2rem;
    border-top: 1px solid #fff;
    line-height: 2rem;
    background: #202F37;
    text-align: center;
  }
  .row .right{
    position: none;
  }
}
</style>
