import Vue from 'vue'
import App from './App.vue'
import router from './route/index';
import webSocket from '@/assets/js/websocket';

const object = {
    ip: 'ws://121.40.165.18:8800'
}
const websocket = new webSocket(object);
Vue.prototype.webSocket = websocket;
Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')