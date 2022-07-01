// export function render() {
//   document.getElementById("app")!.innerHTML = "main3";
// }

// render();

// if (import.meta.hot) {
//   import.meta.hot.accept((newModule) => {
//     newModule.render();
//   });
// }

import { createApp } from "vue"
import { createPinia } from "pinia"
import App from "./App.vue"
import "./global.css"

const app = createApp(App)
app.use(createPinia())

app.mount("#app")
