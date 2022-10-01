<script setup lang="ts">
  import { defineComponent } from '@vue/runtime-core';
  import NavBar from './components/navbar/Navbar.vue';
  
  defineComponent({
    name: 'App',
    components: {
      NavBar
    }
  })
  </script>
  
<template lang="pug">
NavBar    
main
  router-view
</template>
  
<style lang="scss" scoped>
  @use './app.scss';
</style>
  