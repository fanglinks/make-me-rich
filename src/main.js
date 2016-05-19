import Vue from 'vue'
import Router from 'vue-router'
import App from './components/App'
import routerSetting from './router'
import NumberFilter from './filters/number'

// install router
Vue.use(Router)

// public filter
Object.keys(NumberFilter).forEach(function (k) {
  Vue.filter(k, NumberFilter[k])
})

// routing setting
const router = new Router({
  history: true,
  saveScrollPosition: true
})
routerSetting(router)

// start app
router.start(App, '#app')
