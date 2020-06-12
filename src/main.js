import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import jQuery from "jquery";
import {fb} from './firebase';

window.$ = window.jQuery = jQuery;

import "bootstrap";
import "popper.js";
import "./assets/app.scss";

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
            render: h => h(App)
        }).$mount("#app");
    }

});


