<template>
    <div class="container">
    <nav class="navbar navbar-expand-lg navbar-light px-0 pt-3 pb-0">
        <router-link to="/"  class="navbar-brand" href="#">Nani Co.</router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <!-- <li class="nav-item">
                    <router-link to="/" class="nav-link" href="#">Home <span class="sr-only">(current)</span></router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/" class="nav-link" href="#">Products</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/about" class="nav-link" href="#">About</router-link>
                </li> -->
            </ul>

            <span class="mr-2" data-toggle="modal" data-target="#shoppingCart">
                <i class="fas fa-shopping-cart text-dark" style="font-size : 15px;"></i>
            </span>

            <!-- <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"> -->
            <a class="mx-3 my-2" data-toggle="modal" data-target="#signup">
                <i class="fas fa-user-circle" style="font-size : 22px;"></i>
            </a> 

        </div>
    </nav>

    <login-modal/>
    <shoppingCart/>

    </div>
</template>

<script>
import loginModal from "./LoginModal.vue";
import shoppingCart from "./ShoppingCart.vue";

export default {
    name : "navbar",
    components : {
        loginModal,
        shoppingCart
    }

}
</script>

<style lang="scss" scoped>

    .hover-white:hover {
        color : white !important;
    }

</style>>
