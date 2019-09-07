import Vue from 'vue';
import VueRouter from 'vue-router';

import app1 from '../components/app1.vue'
import app2 from '../components/app2.vue'

Vue.use(VueRouter);
const Routers = [
    {
    path:'/app1.vue',
    component: app1
    }, 
    {
    path:'/app2.vue',
    component: app2
    }
]
export default new VueRouter({   
    routers: Routers
})
