import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import router from './router'
import store from './store'
import dateFilter from '@/filters/date.filter'
import currencyFilter from '@/filters/currency.filter'
import tooltipDirective from '@/directives/tooltip.directive'
import messagePlugin from '@/utils/message.plugin'
import Loader from '@/components/app/Loader'
import './registerServiceWorker'
import 'materialize-css/dist/js/materialize.min'
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import 'firebase/database'
import Paginate from 'vuejs-paginate'
Vue.component('Paginate',Paginate)
Vue.config.productionTip = false
Vue.use(messagePlugin)
Vue.use(Vuelidate)
Vue.filter('date', dateFilter)
Vue.filter('currency', currencyFilter)
Vue.directive('tooltip', tooltipDirective)
Vue.component('Loader',Loader)

initializeApp({
  apiKey: "AIzaSyCBBr_0H7Ld9P6s33JUUBpBwg3aGIAWRzs",
  authDomain: "vue-crm-52f38.firebaseapp.com",
  projectId: "vue-crm-52f38",
  storageBucket: "vue-crm-52f38.appspot.com",
  messagingSenderId: "828037075317",
  appId: "1:828037075317:web:59914fc7f08d2988ad833c",
  measurementId: "G-4XHH7EC4FX"
});

let app

getAuth().onAuthStateChanged(()=>{
  if(!app){
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})
