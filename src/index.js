import DropdownMenu from './components/DropdownMenu'

const install = (Vue) => {
  Vue.component('DropdownMenu', DropdownMenu)
}

// auto install if used in browser
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export { DropdownMenu as default }