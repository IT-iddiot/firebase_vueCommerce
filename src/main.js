import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import jQuery from "jquery";
import {fb} from './firebase';
import VueFirestore from 'vue-firestore'

window.$ = window.jQuery = jQuery;

import "bootstrap";
import "popper.js";
import "./assets/app.scss";
import Swal from 'sweetalert2'

window.Swal = Swal;

import VueCarousel from 'vue-carousel';
import Vue2Filters from 'vue2-filters';

import store from './store';

// This would allow you to do person.id instead of person['.key'].
Vue.use(VueFirestore, {
    key: 'id',         // the name of the property. Default is '.key'.
    enumerable: true  //  whether it is enumerable or not. Default is true.
})

Vue.use(VueCarousel);
Vue.use(Vue2Filters);

Vue.component('navbar', require('./components/navbar').default);
Vue.component('products', require('./sections/products').default);
Vue.component('welcomeSection', require('./sections/welcome_section').default);

Vue.config.productionTip = false;

let app = '';
// will get called whenever the user's sign-in state changes 
// otherwise the login status will be removed everytime from /admin to /
// without able to login again by /admin
// # will take longer to load the webpages than before  
fb.auth().onAuthStateChanged(() => {

    if(!app) {
        new Vue({
            router,
            store,
            render: h => h(App)
        }).$mount("#app");
    }

});


