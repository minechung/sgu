import Vue from 'vue'
import VueRouter from 'vue-router'
const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return routerPush.call(this, location).catch(error => error)
}

import Home from './views/Home.vue'
import maincontent from './views/Maincontent.vue'
Vue.use(VueRouter)
export default new VueRouter({
    routes: [{
            path: '/',
            component: Home,
            children: [{
                path: '/maincontent',
                component: maincontent

            }, {
                path: '/Dynamic',
                component: () =>
                    import ('./views/Dynamic.vue'),
                children: [{
                    path: '/Dynamic/notice',
                    component: () =>
                        import ('./views/DynaPages/Notice.vue')
                }, {
                    path: '/Dynamic/blog',
                    component: () =>
                        import ('./views/DynaPages/Blog.vue')
                }, {
                    path: '/Dynamic/notice/info',
                    component: () =>
                        import ('./views/DynaPages/noticePages/NoticePages.vue')
                }],
                redirect: '/Dynamic/notice'
            }, {
                path: '/Wallet',
                component: () =>
                    import ('./views/Wallet.vue'),
                children: [{
                    path: '/Wallet/Ios',
                    component: () =>
                        import ('./views/WalltePages/Ios.vue')
                }, {
                    path: '/Wallet/Android',
                    component: () =>
                        import ('./views/WalltePages/Android.vue')
                }],
                redirect: '/Wallet/Android'
            }, {
                path: '/Technology',
                component: () =>
                    import ('./views/Technology.vue')
            }, {
                path: '/Apply',
                component: () =>
                    import ('./views/Apply.vue')
            }, {
                path: '/Aboutus',
                component: () =>
                    import ('./views/Aboutus.vue'),
                children: [{
                    path: '/Aboutus/Prombles',
                    component: () =>
                        import ('./views/AboutusPages/Prombles.vue')
                }, {
                    path: '/Aboutus/Panter',
                    component: () =>
                        import ('./views/AboutusPages/Panter.vue')
                }],
                redirect: '/Aboutus/Panter'
            }],
            redirect: '/maincontent'

        },

    ]
})