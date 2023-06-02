<template>
<!-- <Loading /> -->
  <Navbar />
  <router-view/>
</template>
<script>
import Navbar from '@/components/Navbar.vue'
// import Loading from '@/components/Loading.vue'
export default {
  name: "App",
  components:{
    Navbar,
    // Loading
  }
}
</script>
<style>
</style>
