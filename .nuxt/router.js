import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _4bea9fd7 = () => interopDefault(import('..\\pages\\about-us\\index.vue' /* webpackChunkName: "pages/about-us/index" */))
const _6ea4a72c = () => interopDefault(import('..\\pages\\contact-us\\index.vue' /* webpackChunkName: "pages/contact-us/index" */))
const _332cdb17 = () => interopDefault(import('..\\pages\\education\\index.vue' /* webpackChunkName: "pages/education/index" */))
const _1ec06108 = () => interopDefault(import('..\\pages\\events\\index.vue' /* webpackChunkName: "pages/events/index" */))
const _aa652326 = () => interopDefault(import('..\\pages\\gallery\\index.vue' /* webpackChunkName: "pages/gallery/index" */))
const _64f7704a = () => interopDefault(import('..\\pages\\media\\index.vue' /* webpackChunkName: "pages/media/index" */))
const _739c7e96 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _4bea9fd7,
    name: "about-us"
  }, {
    path: "/contact-us",
    component: _6ea4a72c,
    name: "contact-us"
  }, {
    path: "/education",
    component: _332cdb17,
    name: "education"
  }, {
    path: "/events",
    component: _1ec06108,
    name: "events"
  }, {
    path: "/gallery",
    component: _aa652326,
    name: "gallery"
  }, {
    path: "/media",
    component: _64f7704a,
    name: "media"
  }, {
    path: "/",
    component: _739c7e96,
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
