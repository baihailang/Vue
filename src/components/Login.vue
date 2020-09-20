<template>
  <div>
    <form>
     用户名:<input type="text" v-model="uname" /><br>
      密码:<input type="text" v-model="upwd" /><br>
      <input type="button" value="Login" @click="login" /><br>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      uname:null,
      upwd:null
    }
  },
  methods:{
    login(){
      this.axios.post("http://localhost:8080/",{"uname":this.uname,"upwd":this.upwd})
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.error(err); 
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
