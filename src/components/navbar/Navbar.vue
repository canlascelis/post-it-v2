<template lang="pug">
nav.navbar.navbar-expand-lg.navbar-light.bg-light(:class="isDarkMode ? 'navbar-dark bg-dark' : ''")
    .container
        router-link.navbar-brand(to="/")
            img.logo(src="../../assets/icons/post-it-logo.svg", alt="post-it-logo")
        button.navbar-toggler(type="button" data-bs-toggle="collapse" data-bs-target="#navbarContents")
            span.navbar-toggler-icon
        .collapse.navbar-collapse.in#navbarContents
            ul.navbar-nav.mr-auto.mt-2.mt-lg-0
                li.navbar-item
                    router-link.nav-link(to="/") Home
                li.navbar-item 
                    router-link.nav-link(to="/about") About 
            form.form-inline.my-2.my-lg-0
                .input-group 
                    input.form-control.mr-sm-2(type="search" placeholder="Search")
                    router-link.btn.btn-primary(to="/") Login
                    button.btn.btn-outline(@click="darkMode()" type="button")
                        font-awesome-icon(icon="fa-solid fa-moon" :color="isDarkMode ? 'white' : 'black'" )
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
    name: 'NavBar',
    components: {
    },
    data() {
        return {
            isDarkMode: false as boolean,
        }
    },
    methods: {
        darkMode() {
            this.isDarkMode = !this.isDarkMode
        }
    },
    mounted() {
        console.log('mounted')
    }
})
</script>

<style lang="scss" scoped>
@use './navbar.scss'
</style>