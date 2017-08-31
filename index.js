import Vue from 'vue'
import VueRouter from 'vue-router'
import routers from './router'
import App from './src/test'
import './src/index.js'

//vue
Vue.use(VueRouter);
Vue.config.debug = true;
Vue.config.delimiters = ['${', '}'];
Vue.config.devtools = true;

const router = new VueRouter({
    routes:routers //问题
});

console.log('router',router,'routers',routers);

new Vue({
    router,
    render: (h) => h(App)
}).$mount('.test')