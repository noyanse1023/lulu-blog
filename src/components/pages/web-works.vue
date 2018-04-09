<template>
	<div class="web-works">
		<h3 class="title">PROJECT</h3>
		<span class="description">正在进行的项目...</span>
		<div class="project-list">
			<div class="project-card card">
				<img src="../../assets/jd.png" alt="jd">
				<div class="card-body">
					<h5 class="card-title">京东PC端首页</h5>
					<p class="card-text">使用javascript以及css3实现动态交互</p>
					<a href="https://github.com/noyanse1023/jd.git" class="btn btn-normal">show</a>
				</div>
			</div>
			<div class="project-card card">
				<img src="../../assets/blog.png" alt="jd">
				<div class="card-body">
					<h5 class="card-title">博客项目</h5>
					<p class="card-text">Node+mysql+vue2.0+axios+markdown</p>
					<a href="https://github.com/noyanse1023/jd.git" class="btn btn-normal">show</a>
				</div>
			</div>
			<div class="project-card card">
				<img src="../../assets/hd.png" alt="jd">
				<div class="card-body">
					<h5 class="card-title">南京厚德软件官网</h5>
					<p class="card-text">使用javascript以及css3实现动态交互</p>
					<a href="https://github.com/noyanse1023/jd.git" class="btn btn-normal">show</a>
				</div>
			</div>
		</div>
				

	</div>
</template>
<script>
export default {
	data() {
		return {

		}
		
	}
}
</script>
<style scoped>
p{
	margin-bottom: 1rem;
}

.web-works{
	padding-top: 100px;
	text-align: center;
	background: #F4F4F4;
}
.title{
	text-transform: uppercase!important;
	font-size: 1.75rem;
	line-height: 1.2;
	font-weight: 500;
	margin-bottom: .5rem;
}
.card-text{
	line-height: 1.5;
}
.project-list{
	display: flex;
	flex-direction: row;
    width: 960px;
    margin-left: auto;
    margin-right: auto;
    padding: 24px 12px;
    text-align: center;	

}
.project-card{
    margin: 8px;
    padding-bottom: 16px;
}
.card{
	width: 18rem;
	
    background-color: #fff;
    background-clip: border-box;
    border: 1px solid rgba(0,0,0,.125);
    border-radius: .25rem;
    overflow: hidden;
}
.card img {
	width: 100%;
	height: 214px;
    border-top-left-radius: calc(.25rem - 1px);
    border-top-right-radius: calc(.25rem - 1px);
}
.card img:hover{
	transform: scale(1.02)
}
.card-body{
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    padding: 1.25rem;
}
.card-title{
	margin-bottom: .75rem;
    font-size: 1.25rem;
    line-height: 1.2;
    color: inherit;
    font-weight: 500;
}
.btn-normal{
    color: #fff;
    background-color: #007bff;
    border-color: #007bff;
    cursor: pointer;
}
@media screen and (max-width: 500px){
	.project-list{
		width: auto;
		flex-direction: column-reverse;
	}
	.card{
		width: auto;	
	}
	.web-works{
		padding-top: 2rem;
	}
}
</style>