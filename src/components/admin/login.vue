<template>
	<div class="login">
    <article class="login-form">
      <div class="form-border">
        <form  @submit.prevent="login">
           <div class="grid-content">
              <h1 class="login-title">登录LU的博客后台吧</h1>
            <input type="text" v-model="username" class="int username" placeholder="请输入你的用户名"><br>
            <input type="password" v-model="password" class="int password" placeholder="请输入你的密码"><br>
            <button type="submit" class="sub">登录</button>
            <!-- <button type="submit" @click="login">登录</button> -->
          </div>
        </form>
      </div>
       
    </article>
		   
	</div>
</template>
<script>
import Vue from 'vue'
export default {
	data() {
	    return {
	      username: '',
	      password: ''
	    }
	  },
	methods: {
		login() {
        Vue.axios.post('/api/login',{
          username: this.username,
          password: this.password
        })
        .then((res) => {
            const data = res.data;
            if(data.state === "pwderr"){
              alert('密码错误')
              return false
            }else if(data.state==='no admin'){
               alert('账号不存在')
               return false
            }else{
               alert('success')
               let userid = data[0].id;
               this.$store.dispatch('setUsername', {name: this.username,id: userid});
               this.$router.push({path: '/admin/write-blog'})
            }
           
          })
        .catch(err => console.log(err))
      }
	}
}
</script>
<style scoped>
.login-title{
    margin-top: 24px;
    margin-bottom: 24px;
    font-weight: initial;
}
.int{
    margin-top: 30px;
    display: block;
    width: 100%;
    padding: 6px 12px;
    box-sizing: border-box;
    font-size: 14px;
    line-height: 1.57;
    color: #003843;
    background-color: #fff;
    background-image: none;
    border: 1px solid #ccc;
    border-radius: 5px;
    -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,0.075);
    box-shadow: inset 0 1px 1px rgba(0,0,0,0.075);
    -webkit-transition: border-color ease-in-out 0.15s,box-shadow ease-in-out 0.15s;
    -o-transition: border-color ease-in-out 0.15s,box-shadow ease-in-out 0.15s;
    transition: border-color ease-in-out 0.15s,box-shadow ease-in-out 0.15s;
}
.sub{
    margin-top: 30px;
    margin-bottom: 0;
    font-weight: normal;
    text-align: center;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    background-image: none;
    border: 1px solid transparent;
    white-space: nowrap;
    padding: 6px 12px;
    font-size: 14px;
    line-height: 1.57;
    border-radius: 5px;
    display: block;
    width: 100%;
    color: #fff;
    background-color: #17a1ff;
    border-color: #0096fd;
}
.login{
  padding-top: 36px;
  padding-bottom: 36px;  
}
.login-form {
   background: #f5faf9;
}
.form-border{
    margin-left: auto;
    margin-right: auto;
    padding-left: 12px;
    padding-right: 12px;
    width: 480px;
    padding-top: 36px;
    padding-bottom: 36px; 
    padding: 100px 0;
}
</style>