import Vue from "vue";
import Vuex from 'vuex';

Vue.use(Vuex);

let cart = window.localStorage.getItem('cartItems');

export default new Vuex.Store({
    state: {
        cart: cart ? JSON.parse(cart) : [],
    },

    mutations: {
        addToCart : (state, product) => {
            const existedProduct = state.cart.find( e => e.id == product.id );
            if(existedProduct) {
                existedProduct.quantity += 1;
            } else {
                state.cart.push(product);
            }
            window.localStorage.setItem('cartItems', JSON.stringify(state.cart));
        },

        removeFromCart : (state, index) => {
            // const productIndex = state.cart.indexOf(product);
            state.cart.splice(index, 1);
            window.localStorage.setItem('cartItems', JSON.stringify(state.cart));
        }
    }
})