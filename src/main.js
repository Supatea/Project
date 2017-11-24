// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import firebase from 'firebase'
import $ from 'jquery'
import 'bootstrap' 
import 'bootstrap/dist/js/bootstrap.bundle.js'

Vue.use(BootstrapVue);


Vue.config.productionTip = false

// Initialize Firebase
var config = {
  apiKey: "AIzaSyDJW2j4cbUW9NSWvL3jixjWXotI-zz79Zc",
  authDomain: "rosite-b860a.firebaseapp.com",
  databaseURL: "https://rosite-b860a.firebaseio.com",
  projectId: "rosite-b860a",
  storageBucket: "",
  messagingSenderId: "384343150814"
};
firebase.initializeApp(config);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
})
