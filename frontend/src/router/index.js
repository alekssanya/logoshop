import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
const routes = [
  { path: '/', redirect: '/home' },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '',
        name: 'Main',
        component: () => import('../components/general/AppMain.vue'),
        meta: {
          breadcrumbs: "path"
        }
      },
      {
        path: ':catalogName',
        name: 'CatalogView',
        component: () => import('../views/CatalogView.vue'),
        children: [
          {
            path: '',
            name: 'Catalog',
            component: () => import('../components/general/Catalog.vue'),
            meta: {
              breadcrumbs: "path"
            }
          },
          {
            path: ':id',
            name: 'Product',
            component: () => import('../views/ProductView.vue'),
            meta: {
              breadcrumbs: "prod"
            }
          },
        ],
        meta: {
          breadcrumbs: "path"
        }
      },
      {
        path: '*',
        component: () => import('../views/About.vue')
      }
    ],
    meta: {
      breadcrumbs: "path"
    }
  },
  {
    path: '/my-account',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/shopping-cart',
    name: 'ShopCart',
    component: () => import('../views/ShopCart.vue'),
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: () => import('../views/Checkout.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/signup',
    name: 'Signup',
    component: () => import('../views/Signup.vue')
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('../views/Admin.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})



export default router
