import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: function () {
      return import( '../views/AboutView.vue')
    }
  },
  {
    path: '/organizacao',
    name: 'organizacao',
    component: function () {
      return import( '../views/OrganizacaoView.vue')
    }
  },
  {
    path: '/palestras',
    name: 'palestras',
    component: function () {
      return import( '../views/PalestrasView.vue')
    }
  },
  {
    path: '/contato',
    name: 'contato',
    component: function () {
      return import( '../views/ContatoView.vue')
    }
  },
  {
    path: '/programacao',
    name: 'programacao',
    component: function () {
      return import( '../views/ProgramacaoView.vue')
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
