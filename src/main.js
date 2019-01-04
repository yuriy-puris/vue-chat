import Vue from 'vue'
import App from './App.vue'
import store from './store/store'
import router from './router/router'

import firebase from 'firebase'
require('firebase/firestore')

const config = {
    apiKey: "AIzaSyAVF6X2VK0pB_MQ3PI1qgelKTZQBm7xXIs",
    authDomain: "vue-firestore-chat-6ee3a.firebaseapp.com",
    databaseURL: "https://vue-firestore-chat-6ee3a.firebaseio.com",
    projectId: "vue-firestore-chat-6ee3a",
    storageBucket: "vue-firestore-chat-6ee3a.appspot.com",
    messagingSenderId: "899715663956"
}
firebase.initializeApp(config)

const db = firebase.firestore()
db.settings({
    timestampsInSnapshots: true
})
window.db = db

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
