import StackModal from './components/StackModal'

const install = (Vue) => {
  Vue.component('StackModal', StackModal)
}

// auto install if used in browser
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export { StackModal as default }