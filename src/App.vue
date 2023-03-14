<template>
  <div>
    <!-- <Home /> -->
    <AppHeader />
    <router-view />
  </div>
</template>

<script >
// import Home from './components/Home.vue';
import AppHeader from './components/AppHeader.vue';

export default {
  components: {
    AppHeader
  }
}
</script>

<style scoped lang="scss">
@use "./styles/generals.scss" as *;
</style>

