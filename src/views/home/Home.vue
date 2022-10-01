<template lang="pug">
section.home-section     
    h1 Home Page
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
name: 'Home',
data() {
    return {
    }
}
})
</script>

<style lang="scss" scoped>
@use './home.scss'
</style>