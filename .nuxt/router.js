import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _63fc227e = () => interopDefault(import('..\\pages\\about-us\\index.vue' /* webpackChunkName: "pages/about-us/index" */))
const _222ce8d4 = () => interopDefault(import('..\\pages\\contact-us\\index.vue' /* webpackChunkName: "pages/contact-us/index" */))
const _18012d26 = () => interopDefault(import('..\\pages\\education\\index.vue' /* webpackChunkName: "pages/education/index" */))
const _619c5e34 = () => interopDefault(import('..\\pages\\events\\index.vue' /* webpackChunkName: "pages/events/index" */))
const _c308cb7a = () => interopDefault(import('..\\pages\\gallery\\index.vue' /* webpackChunkName: "pages/gallery/index" */))
const _69577131 = () => interopDefault(import('..\\pages\\media\\index.vue' /* webpackChunkName: "pages/media/index" */))
const _92ae67c2 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about-us",
    component: _63fc227e,
    name: "about-us"
  }, {
    path: "/contact-us",
    component: _222ce8d4,
    name: "contact-us"
  }, {
    path: "/education",
    component: _18012d26,
    name: "education"
  }, {
    path: "/events",
    component: _619c5e34,
    name: "events"
  }, {
    path: "/gallery",
    component: _c308cb7a,
    name: "gallery"
  }, {
    path: "/media",
    component: _69577131,
    name: "media"
  }, {
    path: "/",
    component: _92ae67c2,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
