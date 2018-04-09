<template>
<div class="home">
	<nav-header></nav-header>
	<div class="home-wrapper">				
		<article class="content">
			<router-link class="read-more" :to="'/articles/detail/' + item.ID" :key="item.ID" tag="li" v-for="item in articleInfoList">
				<div class="row">
					<div class="left">
						<h3 class="title">{{item.title}}</h3>
						<p class="summary">{{item.summary}}</p>
					</div>
					<div class="right">
						<span>{{item.post_time}}</span>
					</div>					
				</div>
				
			</router-link>
			<div class="block">
			  <el-pagination
			    @current-change="currentPageNum"
			    :current-page="currentPage"
			    :page-sizes="[10, 20, 30, 40]"
			    :page-size="pagesize"
			    layout="prev, pager, next"
			    :total="len">
			  </el-pagination>
			</div>
		</article>
		<aside class="rightbar">
			<div class="title">
				ABOUT ME
			</div>
			<div class="avatar">
			    <figure> 
			    	<img src="../assets/logo.png" width="150" height="150">
  					<figcaption>LULU</figcaption>
  				</figure>
				
			</div>
			<div class="contact">
				<h5 class="about-title">
					contant me
				</h5>
				<span class="iconfont email">&#xe724; mottoko@163.com</span>
				<span class="iconfont website">&#xe62d; 4ashoot.club</span>
			</div>
		</aside>

	</div>
</div>
</template>
<script>
import navHeader from '@/components/header'
import Vue from 'vue'
export default {
	data(){
		return {
			articleInfoList: [],
			pageData: [],//每页显示的数据
			articleList: [],//所有的数据
        	currentPage: 1,//当前页
        	len: 0,//默认总的数据长度
            pagesize: 10,//默认每页显示的数量

		}
	},
	created(){
    	Vue.axios.post('/api/article')
	    	.then(res => {
	    		this.articleList = res.data;	
	    		this.len = res.data.length;
	    		console.log(this.articleInfoList)
	    		this.computeArr();

		    })
		    .catch(err => console.log(err))		
       
        .catch(err => console.log(err))
	},
	methods: {
		 computeArr() {
	      // 页数，如果有小数，只取整数部分
	      let pageNum = Number(String(this.len / this.pagesize).split(".")[0]);
	      // 定义一个空数组
	      let newArr = [];
	      // 遍历获取的数据，每次遍历都把数组的0位置开始截取，截取数量为每页显示的数量
	      for (let i = 0; i < pageNum; i++) {
	        newArr.push(this.articleList.splice(0, this.pagesize));
	      }
	      // 判断剩余的数据有没有小于每一页的数量，如果小于，就把剩余的数据放进newArr数组
	      if (this.articleList.length < this.pagesize) {
	        newArr.push(this.articleList.splice(0, this.articleList.length));
	      }
	      // 将新的数组赋给infoList[],用来渲染页面
	      this.articleList = newArr;
	      // 第一次进入页面显示this.articleList[]数组的第一个元素
	      this.articleInfoList = this.articleList[0]
	    },
	    currentPageNum(currentPage) {
	      // currentPage为当前的页数
	      // 显示当前页数对应的数据
	      this.articleInfoList = this.articleList[currentPage - 1];
		}
	},
	components: {
	    navHeader
	  }
	
}
</script>
<style>
.home{

}
.home-wrapper{
	display: flex;
/*	width: 1170px;*/
	margin: 0 auto;
	padding: 5%;
}
.content{
	flex: 1;
	padding: 0 8.8%;
}
.rightbar{
	flex: 0 0 200px;
	width: 200px;
}
.read-more .title{
	font-weight: 700;
	color: #404040;
	font-size: 20px;
}
.row{
	position: relative;
	margin-top: 20px;
	cursor: pointer;
	border-bottom: 1px dotted #ccc;
	padding: 20px 0;
}
.read-more .summary{
	margin-top: 10px;
	font-size: 14px;
	color: #1f4e6e;
	line-height: 1.5
}
.row:hover{
	opacity: 0.8;
}
.row:hover .title{
	color: blue;
}
.row .right{
 	margin-top: 1rem;
}
.rightbar .title{
	font-weight: 700;
	font-size: 16px;
	color: #808080;
	padding-bottom: 10px;
}
.rightbar span{
	color:#bfbfbf;
}
.contact{
	padding-top: 10px;

}
.about-title{
	padding-bottom:6px;
	border-bottom: 1px dotted #ccc;
	color: #bfbfbf;
	font-size: 14px;
	font-weight: 700;
}
.email,.website{
	display: block;
	padding:10px;
}
.block {
	padding-top: 3rem;
}
.avatar{
	perspective: 500;
}
.avatar figure{
	position: relative; 
	transform-style: preserve-3d; 
	transition: 1s transform;
}
/*.avatar figure img { width: 100%; height: auto; }*/
.avatar figure figcaption { 
	position: absolute; 
	width: 150px; 
	height: 150px; 
	border-radius: 1rem;
	line-height: 150px;
	top: 0;  
	transform: rotateY(.5turn) translateZ(1px);
	background: rgba(255,255,255,0.9); 
	text-align: center; 
	opacity: 0.6; 
	transition: 1s .5s opacity; 
}
.avatar:hover figure { 
	transform: rotateY(.5turn);
}
.avatar:hover figure figcaption { 
	opacity: 1; 
}
.avatar figure:after {
 	content: " "; 
 	display: block; 
 	height: 30px;
 	width: 150px; 
 	transform: rotateX(90deg); 
 	background-image: radial-gradient(ellipse closest-side, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 100%); 
 }
@media screen and (max-width: 500px){
	.rightbar{
		display: none;
	}
	.block{
		text-align: center;
	}
	.content{
		width: auto;
	}
}
</style>