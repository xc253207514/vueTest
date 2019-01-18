import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router/router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueScroller from 'vue-scroller'
import './assets/js/rem'
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import AMap from 'vue-amap';
import vuePicturePreview from 'vue-picture-preview'
import VueVideoPlayer from 'vue-video-player'
import 'video.js/dist/video-js.css'
import 'vue-video-player/src/custom-theme.css'

Vue.use(vuePicturePreview)
Vue.use(VueRouter);
Vue.use(VueScroller);
Vue.use(ElementUI);
Vue.use(AMap);
Vue.use(iView);
Vue.use(VueVideoPlayer);

// 定义路由
const router = new VueRouter({
    routes: routes,
    mode: 'hash',
    strict: false,
    scrollBehavior (to, from, savedPosition){
      if (savedPosition) {
        return savedPosition
      } else {
        return { x: 0, y: 0 }
      }
    }
})

// 构建路由
const app = new Vue({
    router
}).$mount('#app');

