<template>
<div class="success">	
	<table border='1' width="100%" cellpadding="0" cellspacing="0">
		<thead>
			<tr>
				<th>ID</th>
				<th>标题</th>
				<th>描述</th>
				<th>操作</th>
			</tr>
		</thead>
		<tbody v-for="(item,index) in articleList">					
			<tr>
				<td>{{item.ID}}</td>
				<td>{{item.title}}</td>
				<td>{{item.summary}}</td>
				<td>{{index}}</td>
				<td>
					<!-- <a href="javascript:;">修改</a> -->
					<a href="javascript:;" @click="del(item.ID,index)">删除</a>
				</td>
			</tr>
		</tbody>
	</table>
	<!-- <div class="mod_dialog" v-for="item in mode_data">修改
		<form action="?" method="post">
			判断是不是修改模式
			<input type="hidden" name="mod_id" value="item.ID">
			标题：<input type="text" name="title" value="item.title"><br>
			描述：<textarea name="description" cols="30" rows="5">item.summary></textarea><br>
			<input type="submit" value="添加">
		</form>		
	</div> -->
</div>
</template>
<script>
import navHeader from '@/components/header'
import Vue from 'vue'
export default {
	props: {
		blog: {
			type: Array,
			default() {
				return []
			}
		},
		title: {
			type: Array,
			default() {
				return []
			}
		}
	},
	data(){
		return {
			articleList:[],
			mode_data: []
		}
	},
	created(){
		this.articleList = this.blog
	},
	methods: {
		del(db,index) {
			confirm('确定删除吗')
			this.articleList.splice(index,1);//删除视图层，并自动刷新页面，数据库中并没有删除
			Vue.axios.post('/api/del', { id:db })
				.then(data => {
					console.log(db)
				})			
				
			}
	},
	components: {
	    navHeader
	  }
	
}
</script>
<style>
table td {
	border: 1px solid #ccc;
}
</style>