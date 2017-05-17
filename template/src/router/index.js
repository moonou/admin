import Vue from 'vue'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import Router from 'vue-router'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
const Home = resolve => require(['@/pages/Home'], resolve){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
const Login = resolve => require(['@/pages/Login'], resolve){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
const TestPage = resolve => require(['@/pages/TestPage'], resolve){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

Vue.use(Router){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

export default new Router({
  routes: [
    {
      path: '/',
      redirect: {
        name: 'Home'
      }
    },
    {
      path: '/home',
      component: Home,
      children: [
        {
          path: 'testpage',
          name: 'Home',
          component: TestPage
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  ]{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
}){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
