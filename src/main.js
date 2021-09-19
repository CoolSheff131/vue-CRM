import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import router from './router'
import store from './store'
import dateFilter from '@/filters/date.filter'
import messagePlugin from '@/utils/message.plugin'
import './registerServiceWorker'
import 'materialize-css/dist/js/materialize.min'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false
Vue.use(messagePlugin)
Vue.use(Vuelidate)
Vue.filter('date', dateFilter)

firebase.initializeApp({
  apiKey: "AIzaSyCBBr_0H7Ld9P6s33JUUBpBwg3aGIAWRzs",
  authDomain: "vue-crm-52f38.firebaseapp.com",
  projectId: "vue-crm-52f38",
  storageBucket: "vue-crm-52f38.appspot.com",
  messagingSenderId: "828037075317",
  appId: "1:828037075317:web:59914fc7f08d2988ad833c",
  measurementId: "G-4XHH7EC4FX"
});

let app

firebase.auth().onAuthStateChanged(()=>{
  if(!app){
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})
