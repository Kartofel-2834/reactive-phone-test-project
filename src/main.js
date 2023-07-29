import { createApp } from "vue";
import { createPinia } from "pinia";
import appPage from "./app.vue";
import router from "./router";

const app = createApp(appPage);
const pinia = createPinia();

app.use(router);
app.use(pinia);

app.mount("#app");
