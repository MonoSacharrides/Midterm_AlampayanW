
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import TodoApp from '../views/TodoApp.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/Todo',
    name: 'Todo',
    component: TodoApp,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;