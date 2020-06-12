<template>
    <div class="container">
    <nav class="navbar navbar-expand-lg navbar-light px-0 pt-3 pb-0">
        <router-link to="/"  class="navbar-brand" href="#">Nani Co.</router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <router-link to="/" class="nav-link" href="#">Home <span class="sr-only">(current)</span></router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/" class="nav-link" href="#">Products</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/about" class="nav-link" href="#">About</router-link>
                </li>
            </ul>
            <form class="form-inline">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                <a class="btn btn-outline-success text-success hover-white my-2 my-sm-0" data-toggle="modal" data-target="#signup">Get Started</a>
            </form>
        </div>
    </nav>

    <login-modal/>

    </div>
</template>

<script>
import loginModal from "./LoginModal.vue";
export default {
    name : "navbar",
    components : {
        loginModal
    }

}
</script>

<style lang="scss" scoped>

    .hover-white:hover {
        color : white !important;
    }

</style>>
