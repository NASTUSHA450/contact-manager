import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
'vue-router'
import ContactManager from '../views/ContactManager.vue'
import AddContact from '../views/AddContact.vue'
import EditContact from '../views/EditContact.vue'
import ViewContact from '../views/ViewContact.vue'

import NotFound from '../views/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: '/contacts',
    component: Home
  },
  {
    path: '/contacts',
    name: 'ContactManager',
    component: ContactManager
  },
  {
    path: '/contacts/add',
    name: 'AddContact',
    component: AddContact
  },
  {
    path: '/contacts/edit/:contactId',
    name: 'EditContact',
    component: EditContact
  },
  {
    path: '/contacts/view/:contactId',
    name: 'ViewContact',
    component: ViewContact
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
