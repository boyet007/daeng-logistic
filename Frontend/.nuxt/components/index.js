export { default as LayoutsHeader } from '../..\\components\\layouts\\Header.vue'
export { default as LayoutsSidebar } from '../..\\components\\layouts\\Sidebar.vue'

export const LazyLayoutsHeader = import('../..\\components\\layouts\\Header.vue' /* webpackChunkName: "components/layouts-header" */).then(c => wrapFunctional(c.default || c))
export const LazyLayoutsSidebar = import('../..\\components\\layouts\\Sidebar.vue' /* webpackChunkName: "components/layouts-sidebar" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
export function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
