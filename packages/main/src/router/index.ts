import router from '@monorepo-app/shared/plugins/router'
import { routes as domain1 } from '@monorepo-app/domain1/routes'
import { routes as domain2 } from '@monorepo-app/domain2/routes'

router.addRoute({
  path: '/',
  component: () => import('../layout/MainLayout.vue'),
  children: [
    {
      path: '',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    }
  ]
})

domain1.forEach((route) => router.addRoute(route))
domain2.forEach((route) => router.addRoute(route))

export default router
