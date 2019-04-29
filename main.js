import Vue from 'vue'
import App from './App'
import cuCustom from './colorui/components/cu-custom.vue'
import util from './common/Utils'

Vue.component('cu-custom',cuCustom)

Vue.config.productionTip = false

Vue.prototype.$util = util

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
