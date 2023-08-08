import type { RouteRecordRaw } from 'vue-router'

export const routes: RouteRecordRaw[] = [
  {
    path: '/domain1',
    component: () => import('../layout/Domain1Layout.vue'),
    children: [
      {
        path: '',
        name: 'Domain1Page',
        component: () => import('./Domain1Page.vue')
      }
    ]
  }
]
