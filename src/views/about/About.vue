<template lang="pug">
section.about-section 
    h1 About Page
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
    name: 'About'
})
</script>

<style lang="scss" scoped>
@use './about.scss'
</style>