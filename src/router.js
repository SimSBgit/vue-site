import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from './pages/HomeView.vue'
import AboutView from './pages/AboutView.vue'
import StudyView from './pages/StudyView.vue'
import Ex_WebDesign from './pages/Ex_WebDesign.vue'
import Ex_D1 from './pages/Ex_D1.vue'
import Ex_E1 from './pages/Ex_E1.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/about', component: AboutView },
  { path: "/study", component: StudyView },
  {
    path: "/wd/",
    component: Ex_WebDesign,
    children: [
        {
            path: "/wd/d1",
            component: Ex_D1,
        },
        {
            path: "/wd/e1",
            component: Ex_E1,
        }
    ]
  }
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router