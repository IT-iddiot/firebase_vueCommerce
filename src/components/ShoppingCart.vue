<template>
    <!-- Modal -->
    <div class="modal fade" id="shoppingCart" tabindex="-1" role="dialog" aria-labelledby="shoppingCartLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="shoppingCartLabel">Shopping Cart</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="container">
                    <cart-item 
                        v-for="(item,index) in this.$store.state.cart" :key="index"
                        :item="item">
                    </cart-item>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-link" data-dismiss="modal">Continue shopping</button>
                <button type="button" class="btn btn-primary" @click="toCheckout">Checkout</button>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
import $ from 'jquery';
import CartItem from './CartItem';

export default {
    name : "shoppingCart",

    components : {
        CartItem
    },

    methods : {
        toCheckout() {
            $('#shoppingCart').modal('hide');
            this.$router.push('/checkout');
        },
        
    }
}
</script>

<style scoped lang="scss">

</style>