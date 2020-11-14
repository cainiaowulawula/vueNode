<template>
  <div class="hello">
    {{list}}
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      list: []
    }
  },
  mounted () {
    getDataList()
  },
  methods: {
    getDataList(){
      this.$http('userList').then(res => {
        console.log(res)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  width: 200px;
}
</style>
