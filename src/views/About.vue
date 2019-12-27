<template>
  <div class="about">
    <h1>登录成功</h1>
    {{info}}
  </div>
</template>
<script>
export default {
   data(){
    return {
      
    }
  },
  computed:{
    ...mapState('login',['info'])
  },
  created(){
  },
  methods:{
    ...mapActions('login',['layout']),
    goBack(){
      this.layout().then((res)=>{
        this.$router.push({path:'/'})
      })
    }
  }
}
</script>
