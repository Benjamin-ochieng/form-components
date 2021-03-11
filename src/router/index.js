import { createRouter, createWebHistory } from 'vue-router';
import Form from '@/views/Form.vue';
import Buttons from '../views/Buttons.vue';
import Inputs from '../views/Inputs.vue';

const routes = [
  {
    path: '/',
    name: 'Form',
    component: Form,
  },
  {
    path: '/buttons',
    name: 'Buttons',
    component: Buttons,
  },
  {
    path: '/inputs',
    name: 'Inputs',
    component: Inputs,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
