<template>
  <div id="app">

    <router-view  v-if="isShow"/>
  </div>
</template>

<script>
export default {
  name: 'App',
   provide () {
    return {
      reload: this.reload
    }
  },
  data() {
    return {
      isShow:true
    }
  },methods: {
        reload () {
      this.isShow= false
      this.$nextTick(function () {
        this.isShow= true
      })
    }

  },
}
</script>

<style>
ul,li{
  list-style: none;
  margin: 0;
  padding: 0;
}
*{
  margin: 0;
  padding: 0;
}
body{
  background-color: #f5f5f5;

}
</style>
