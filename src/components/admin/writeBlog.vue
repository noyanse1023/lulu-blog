<template>
<div class="edit-blog-outer">
	<!-- element-ui不知道怎么获取当前数据库中的ID并删除修改数据 -->
	<el-tabs  v-model="activeName" :tab-position="tabPosition" @tab-click="handleClick">
	    <el-tab-pane label="写博客" name="first">

	    	<div class="write-blog">
	    		
				<form @submit.prevent="addblog">
					<input type="text" id="title" v-model="title" placeholder="标题" class="int title"><br>
					<input type="text" placeholder="描述：" v-model="summary" id="summary" class="int summary"><br>
					<!-- <label for="context" class="lab-content">内容：</label> -->
					<!-- <textarea v-model="context" id="context" cols="30" rows="25" class="textarea"></textarea><br> -->
					<mavon-editor class="md" v-model="context" :toolbars="toolbars"/>
					<button type="submit" @click="insertBlog" class="addbtn">添加</button>
				</form>
			</div>
	    </el-tab-pane>
	    <el-tab-pane label="博客列表" name="second">
	    	<!-- <el-table :data="articleList" border style="width: 100%">
	    		<el-table-column prop="ID" label="ID" width="180"></el-table-column>
	    		<el-table-column prop="title" label="标题" width="180"></el-table-column>
	    		<el-table-column prop="summary" label="简介" width="180"></el-table-column>
	    		<el-table-column prop="post_time" label="title" width="180"></el-table-column>
	    		<el-table-column label="操作" width="180" prop="ID">
	    			<template scope="scope">
	    				<el-button type="primary" @click="mod(articleList.ID,index)">修改</el-button>
	    				<el-button type="primary">删除</el-button>
	    			</template>
	    		</el-table-column>
	    	</el-table> -->
	    	<table class="tab" width="90%" cellpadding="0" cellspacing="0">
				<thead>
					<tr>
						<th width="2%">ID </th>
						<th width="15%">标题</th>
						<th width="48%">描述</th>
						<th width="15%">发表时间</th>
						<th width="20%">操作</th>				
					</tr>
				</thead>
				<tbody v-for="(item,index) in articleList">					
					<tr>
						<td>{{index+1}}</td>
						<td>{{item.title}}</td>
						<td>{{item.summary}}</td>	
						<td>{{item.post_time}}</td>			
						<td>
							<el-button @click="visible = true,mod(item.ID,index)">修改</el-button>
							<el-button @click="del(item.ID,index)">删除</el-button>
							<!-- <a href="javascript:;" @click="mod(item.ID,index)">修改</a>					 -->
							<!-- <a href="javascript:;" @click="del(item.ID,index)">删除</a> -->
						</td>
						
					</tr>
				</tbody>
			</table>
	    </el-tab-pane>
  	</el-tabs>	

	<div class="success">		
		<div class="mod_dialog" v-show="isshow">
			<form @submit.prevent="mod_add">
				<el-dialog :visible.sync="visible" title="修改">
			        <div class="update">
						标题：<input type="text" v-model="mod_title=mod_data.title" class="int title"><br>
						描述：<textarea v-model="mod_summary=mod_data.summary" cols="30" rows="5" class="int summary"></textarea><br>
						<label class="lab-content">内容：</label>
						<mavon-editor v-model="mod_context = mod_data.context" :toolbars="toolbars"/>
						<input type="submit" value="修改" @click="modifyBlog" class="addbtn">
					</div>			
			    </el-dialog>
								
			</form>
		</div>
	</div>
</div>
</template>
<script>
// import success from '@/components/admin/success'
import Vue from 'vue'
export default {
	data(){
		return {
			activeName: 'first',
			visible: false,
			activeName: 'first',
			tabPosition: 'left',
			// blogId: [],
			isshow: false,
			author: [],
			title: [],
			context: '',
			summary: [],
			articleList: [],
			labelData: [],
			mod_data: [],
			mod_title: [],
			mod_summary: [],
			mod_context: [],
			currentId: [],
			marked: [],
			toolbars: {
	          bold: true, // 粗体
	          italic: true, // 斜体
	          header: true, // 标题
	          underline: true, // 下划线
	          mark: true, // 标记
	          superscript: true, // 上角标
	          quote: true, // 引用
	          ol: true, // 有序列表
	          link: true, // 链接
	          imagelink: true, // 图片链接
	          help: true, // 帮助
	          code: true, // code
	          subfield: true, // 是否需要分栏
	          fullscreen: true, // 全屏编辑
	          readmodel: true, // 沉浸式阅读
	          /* 1.3.5 */
	          undo: true, // 上一步
	          trash: true, // 清空
	          save: true, // 保存（触发events中的save事件）
	          /* 1.4.2 */
	          navigation: true // 导航目录
	        }
		}
	},
	created() {
		var data = [];
		let _this = this
		Vue.axios.get('/api/edit')
			.then(res => {
	    		this.labelData = res.data	
	    		for(let i=0;i<res.data.length;i++){
	    			 var obj = {};
	    			 obj.ID = res.data[i].ID;
	    			 obj.title = res.data[i].title;
	    			 obj.summary = res.data[i].summary;
	    			 obj.post_time = res.data[i].post_time;
	    			 data[i] = obj
	    		}
	    		 _this.articleList = data
	    		 // console.log(_this.articleList)
	    		// let len = this.articleList.length - 1;
	    		// let lastId = this.articleList[len]//获取数组最后一个元素的ID
		    })
		    .catch(err => console.log(err))
		
	},
	methods:{
		handleClick(tab, event) {
	        console.log(tab, event);
	      },
		addblog() {
			Vue.axios.post('/api/edit',{
				author: this.author,
				title: this.title,
				summary: this.summary,
				context: this.context,
				post_time: this.post_time
			})
			.then(res => {					
				alert('发表成功')
				// location.reload()//实在搞不定把新增数据添加到表格中了，以后有时间再整吧
				// this.blogId = res.data	//获取新增ID
				this.$router.push('/admin/write-blog')				
			})
			.catch(err => console.log(err))

		},
		del(db,index) {
			if(confirm("确定要清空数据吗？")){
				this.articleList.splice(index,1);//删除视图层，并自动刷新页面，数据库中并没有删除
				Vue.axios.post('/api/del', { id:db })
					.then(data => {
						// console.log(db)//当前行id
					})	
			}												
		},
		insertBlog() {
			var obj={};
                obj.author=this.author;
                obj.title=this.title;
                obj.summary=this.summary;
                obj.context=this.context;
                obj.post_time=this.getTime();
                this.articleList.push(obj);
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
		},

		mod(db,index) {						
			Vue.axios.post('/api/mod_data', { id:db })
				.then(res => {
					this.isshow=true;	
					this.mod_data =res.data;	
					this.currentId = db	
					// console.log(db,index)			
			})
		},
		mod_add() {			
			Vue.axios.post('/api/mod', { 
				id:this.currentId, 
				mod_title: this.mod_title,
				mod_summary: this.mod_summary,
				mod_context: this.mod_context
			})
				.then(res => {
					alert('修改成功')
					this.visible = false
					console.log(res.data)		
				})
		},
		modifyBlog() {
			
			// console.log(this.mod_title)
		}
	}
}
</script>
<style scoped>
.md{
	width: 90%;
	margin: 0 auto;
}
.edit-blog-outer{
	padding: 100px 30px;
}
.markdown-body{
	margin-top: 10px;
	border: 1px solid #ccc;
}
.write-blog{
	padding-left: 30px;
	text-align: center;
}
.title,.textarea,.summary{
	width: 90%;
	border: 1px solid #ccc;
}
.int{
	height: 25px;
	line-height: 25px;
	padding: 3px;
	box-sizing: border-box;
	color: #575C6B;
}
.summary{
	margin-top: 10px;
}
.textarea{
	margin-top: 10px;
	padding: 3px;
	color: #575C6B;
}
.lab-content{
	display: inline-block;
	vertical-align: top;
	margin-top: 10px;
}
.tab{
	margin: 0 auto;
	border:1px solid #DADADA;
	color: #909399;
}
.addbtn{
	margin-top: 30px;
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
.v-mark{
	width: 90%;
	height: 300px;
	border: 1px solid #ccc;
}
.tab th{
    padding: 12px 10px;
    min-width: 0;
    box-sizing: border-box;
    text-overflow: ellipsis;
    vertical-align: middle;
    position: relative;
	border-bottom: 1px solid #DADADA;
	border-right: 1px solid #DADADA;
	white-space: nowrap;
    overflow: hidden;
    user-select: none;
    text-align: left;
    font-weight: 700;
}
.tab td{
	padding: 12px 5px;
    min-width: 0;
    box-sizing: border-box;
    text-overflow: ellipsis;
    vertical-align: middle;
    position: relative;
	border-bottom: 1px solid #DADADA;
	border-right: 1px solid #DADADA;
	
}
.tab tr:hover{
	background-color: #F3F3F3;
	transition: background-color .25s ease;
}
.update{
	text-align: center;
}
</style>