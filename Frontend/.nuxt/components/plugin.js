import Vue from 'vue'
import { wrapFunctional } from './index'

const components = {
  LayoutsHeader: () => import('../..\\components\\layouts\\Header.vue' /* webpackChunkName: "components/layouts-header" */).then(c => wrapFunctional(c.default || c)),
  LayoutsSidebar: () => import('../..\\components\\layouts\\Sidebar.vue' /* webpackChunkName: "components/layouts-sidebar" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
