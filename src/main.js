import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Swiper from 'swiper'
import './swiper/dist/css/swiper.css';
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import Vuei18n from 'vue-i18n'
import zh from './i18n/config/zh'
import en from './i18n/config/en'
NProgress.inc(0.2)
NProgress.configure({ easing: 'ease', speed: 1000, showSpinner: false })
router.beforeEach((to, from, next) => {
    NProgress.start()

    next()
})
router.afterEach(() => {

    NProgress.done()
})
Vue.use(Vuei18n)
const i18n = new Vuei18n({
    locale: localStorage.getItem('locale') || 'zh',
    messages: {
        zh,
        en
    }
})

Vue.use(ElementUI);
Vue.config.productionTip = false
new Vue({
    Swiper,
    router,
    i18n,
    render: h => h(App)
}).$mount('#app')