import type { RouteRecordRaw } from 'vue-router'

export const routes: RouteRecordRaw[] = [
  {
    path: '/domain2',
    component: () => import('../layout/Domain2Layout.vue'),
    children: [
      {
        path: '',
        name: 'Domain2Page',
        component: () => import('./Domain2Page.vue')
      }
    ]
  }
]
