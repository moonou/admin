{{#if_eq build "standalone"}}
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
{{/if_eq}}
import Vue from 'vue'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import App from './App'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import router from './router'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import ElementUI from 'element-ui'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import 'element-ui/lib/theme-default/index.css'{{#if_eq lintConfig "airbnb"}};{{/if_eq}} // element-ui style
import 'normalize.css'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import '@/assets/styles/app.css'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

Vue.config.productionTip = false{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

Vue.use(ElementUI){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  {{#if_eq build "runtime"}}
  render: h => h(App){{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  {{/if_eq}}
  {{#if_eq build "standalone"}}
  template: '<App/>',
  components: { App }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  {{/if_eq}}
}){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
