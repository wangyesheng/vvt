import { createApp } from "vue"
import { createPinia } from "pinia"

import App from "./App.vue"

import "./global.css"

createApp(App).use(createPinia()).mount("#app")
