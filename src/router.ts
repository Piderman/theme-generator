import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/combined',
      name: 'combined',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "combined" */ './views/Combined.vue'),
    },

    {
      path: '/standard',
      name: 'standard',
      component: () => import(/* webpackChunkName: "product" */ './views/StandardProduct.vue'),
    },

    {
      path: '/enhanced-1',
      name: 'enhanced-1',
      component: () => import(/* webpackChunkName: "product" */ './views/Enhanced1Product.vue'),
    },

    {
      path: '/enhanced-2',
      name: 'enhanced-2',
      component: () => import(/* webpackChunkName: "product" */ './views/Enhanced2Product.vue'),
    },

    {
      path: '/enhanced-4',
      name: 'enhanced-4',
      component: () => import(/* webpackChunkName: "product" */ './views/Enhanced4Product.vue'),
    },
  ],
});
