<template>
<div>
	<nav-header></nav-header>
	<div class="article">
		<div class="content">
			<div class="row">
				<h3 class="title">{{articleDetail.title}}</h3>
				<span class="post_time">{{articleDetail.post_time}}</span>
<!-- 				<div class="zan">
					<span @click="zan">{{articleDetail.n_like}}</span>
				</div> -->
				<article class="context">
					<mavon-editor
			              class="md"
		          		 :value="articleDetail.context"
					     :subfield = "prop.subfield"
					     :defaultOpen = "prop.defaultOpen"
					     :toolbarsFlag = "prop.toolbarsFlag"
					     :editable="prop.editable"
					     :scrollStyle="prop.scrollStyle"
			          ></mavon-editor>
			          <div class="comment">
					<!-- 评论功能待开发 -->
						<form @submit.prevent="comment">
							<h3 class="comment-title">评论</h3>
							<div class="comment-outer">
								<input type="text" v-model="comment_username" placeholder="用户名" class="comment-user">
								<textarea v-model="comment_text" placeholder="评价内容" class="comment-text"></textarea><br>

								<div class="comment-btn-outer">
									<input type="submit" value="发送" @click="insertComment" class="comment-btn">	
								</div>
							</div>
						</form>
					</div>
					<!-- 显示评价内容 -->
					<div class="have-comment-wrapper">
						<h4 class="comment-count">{{showCommentData.length}}条评论</h4>
						<div class="have-comment" v-for="item in showCommentData">
						<div class="have-comment-outer">
							<span class="have-user">{{item.comment_user}}</span>
							<p class="have-comment">{{item.comment}}</p>
							<span class="comment-time">{{item.comment_time}}</span>
							<!-- <button>回复</button>暂时不写回复功能 -->
						</div>
					</div>
					</div>
					
				</article>
				
			</div>						
		</div>
	</div>
</div>
</template>
<script>
import navHeader from '@/components/header'
import Vue from 'vue'
export default {
	computed: {
	    prop () {
	      let data = {
	        subfield: false,// 单双栏模式
	        defaultOpen: 'preview',//edit： 默认展示编辑区域 ， preview： 默认展示预览区域 
	        editable: false,//是否允许编辑
	        toolbarsFlag: false,//工具栏是否显示
	        scrollStyle: true//开启滚动条样式(暂时仅支持chrome)
	      }
	      return data
	    }
	  },
	data() {
		return {
			articleDetail: [],
			comment_username: [],
			comment_text: [],
			showCommentData: []
		}
	},
	created(){
		// console.log(typeof this.$route.query.page)
		const artId=this.$route.params.id;
	    Vue.axios.get(`/api/article/detail?id=${artId}`)
	    	.then(res => {
	    		this.articleDetail = res.data[0];
	    		// 给文章添加p标签
	    		// this.articleDetail.context = (isNaN(this.articleDetail.context)) ? this.articleDetail.context.replace(/^/gm, '<p>').replace(/$/gm, '</p>') : null;
		    })
		    .catch(err => console.log(err))
		//获取本页评论列表
		Vue.axios.post('/api/show-comment',{articleId: this.$route.params.id})
		.then( res => {
			var data = [];
			for(let i=0;i<res.data.length;i++){
    			 var obj = {};
    			 obj.comment_user = res.data[i].comment_user;
    			 obj.comment = res.data[i].comment;
    			 obj.comment_time = res.data[i].comment_time;
    			 data[i] = obj
    		}
    		 this.showCommentData = data
		})
	},
	methods: {
		comment() {
			Vue.axios.post('/api/comment',{id: this.$route.params.id,comment_username: this.comment_username,comment_text: this.comment_text})
			.then( res => {})
		},
		insertComment() {
				var obj={};
                obj.comment_user=this.comment_username;
                obj.comment=this.comment_text;
                obj.comment_time=this.getTime();
                this.showCommentData.unshift(obj);
		},
		getTime() {
			let mytime;
			let myDate = new Date();
			let y = myDate.getFullYear();
			let m = myDate.getMonth() + 1;
			let d = myDate.getDate();
			let h = myDate.getHours();
			let min = myDate.getMinutes();
			let s = myDate.getSeconds();
			(m >= 1 && m <= 9) ? m = "0" + m : m;	       
	        (d >= 0 && d <= 9) ? d = "0" + d : d;
	        (min >= 0 && min <= 9) ? min = "0" + min : min;
	        (s >= 0 && s <= 9) ? s = "0" + s : s;       	
			return mytime = y + '-' + m + '-' + d + ' ' + h + ':' + min + ':' + s;
		}
	},
	components: {
	    navHeader
	  }
}
</script>
<style scoped>
.context .v-note-op{
	display: none!important;
}
.content{
	width: 800px;
	margin: 0 auto;
}
.article .title{
	text-align: center;
}
.row h3{
	padding: 30px 0 20px 0;
	font-weight: 700;
	color: #404040;
	font-size: 20px;
}
.context{
	margin-top: 30px;
	font-size: 14px;
	color: #504C3E;
	line-height: 25px;
	margin:10px;
	text-indent: 2em;
}
.post_time{
    display: inline-block;
    width: 100%;
    text-align: center;
}
.md {
  min-height: 300px;
  margin: 10px 20px 0 20px;
  background: rgb(248, 248, 248);
  z-index: 1;
  font-size: 1rem;
  
}


.comment-user{
	width: 20%;
	margin-left: 0.6rem;
	border-radius: 5px;
	padding: 5px 3px;
	border: 1px solid #dcdcdc;
}
.comment-text{
	display: block;
	height: 80px;
	padding: 10px 15px;
	margin-left: 2rem;
	margin-top: 0.5rem;
	box-sizing: border-box;
	border-radius: 5px;
	border: 1px solid #dcdcdc;
	background: hsla(0,0%,71%,.1);
}
.comment-outer{
	padding-left: 20px;
}
.comment-btn-outer{
	text-align: right;
	margin-right: 1rem;
}
.comment-btn{
	padding: 12px 20px;
	border: 1px solid #f56c6c;
	background: #f56c6c;
	color:#fff;
	display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    transition: .1s;
    font-weight: 500;
    border-radius: 4px;
}
.have-user{
	color:#3194d0;
}
.have-comment{
	margin: 8px 0;
}
.have-comment-outer{
	border-bottom: 1px solid #e6e6e6;
}
.comment-time{
	margin-left: 2rem;
	color: #b3aaab;
}
.comment-count{
	padding: 1rem 0;
	border-bottom: 1px solid #e6e6e6;
}
@media screen and (min-width: 769px){
    .comment-text{
    	width:93%;
    }	
}
@media screen and (max-width: 768px) {
	.md{
		font-size: .7rem;
	}
    .content{
    	width: auto;
    }
    .comment-text{
    	width:83%;
    }
}
</style>