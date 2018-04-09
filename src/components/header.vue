<template>
	<div>
		<header class="header">
      <!-- <img src="../assets/home-bg-2lite-dark.jpg" class="header-img"> -->
      <div class="header-outer">
        <div class="title-outer">
          <h2 class="title">LULU BLOG</h2>
          <span class="breif">if you don't konw the past me,you won't understand the present me</span>
        </div>       
      </div>
	    </header>
	</div>
</template>
<script>
export default{

}
</script>
<style>

.header{
  background: url('../assets/home-bg-2lite-dark.jpg');
  width: 100%;
  min-height: 28rem;
  display: flex;/*让不定宽高div水平垂直居中*/
  justify-content: center;
  align-items: center;
}

.header-outer{
  color: #fff;

}
.title-outer{
  padding-bottom: 2rem;
  padding: 2rem 3rem;
  background: rgba(251,239,239,0.5);
  text-align: center;
}
.title-outer .title{
  font-size: 5rem;
  font-weight:700;
  text-align: center;
  text-shadow: 5px 5px 5px #99282E;
}
.title-outer .breif{
  display: block;
  margin-top: 12px;
  font-size: 18px;
  color: #485675;
}

.dialog{
  width: 300px;
  height: 200px;
  background: #ccc;
}
@media screen and (max-width: 500px) {
    .header {
        min-height: 20rem;
        background-size: cover;
    }
    .title-outer .title{
      font-size: 2rem;
    }
    .title-outer .breif{
      font-size: 1rem;
    }
}
</style>