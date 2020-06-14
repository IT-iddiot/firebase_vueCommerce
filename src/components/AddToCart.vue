<template>
    <div class="addToCart">
        <button @click="addToVuexCart" class="btn btn-primary">
            <i class="fas fa-cart-plus mr-1"></i> {{ price | currency('RM', 0, { spaceBetweenAmountAndSymbol: true }) }}
        </button>
    </div>
</template>

<script>
export default {
    name : "addToCart",

    props : {
        price : String,
        name : String,
        productId : String,
        image : String
    },

    data() {
        return {

        }
    },

    methods : {
        addToVuexCart() {
            this.$store.commit('addToCart', {
                id : this.productId,
                name : this.name,
                price : this.price,
                image : this.image
            })
        }
    }
}
</script>

<style scoped lang="scss">

</style>