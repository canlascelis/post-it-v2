import { createApp } from 'vue'

//components
import App from './App.vue'
//styles
import './assets/styles/main.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
// modules
import router from './router/index.js'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'
import 'bootstrap/js/dist/collapse'

library.add(faSun, faMoon);

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .use(router)
    .mount('#app')