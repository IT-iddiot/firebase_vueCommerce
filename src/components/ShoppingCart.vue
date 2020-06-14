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
                    <div class="row mb-4" v-for="(item,index) in this.$store.state.cart" :key="index">
                        <div class="col-md-2 d-flex justify-content-center align-items-center">
                            <img :src="item.image" alt="" width="80px" height="80px">
                        </div>
                        <div class="col-md-4 py-2" >
                            <p class="w-100 text-truncate">{{ item.name }}</p>
                            <a href="">Remove</a>
                        </div>
                        <div class="col-md-2 offset-md-4 py-2">
                            <p class="h-100 d-flex justify-content-center align-items-center">{{ item.price | currency('RM', 0, { spaceBetweenAmountAndSymbol: true }) }}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-link" data-dismiss="modal">Continue shopping</button>
                <button type="button" class="btn btn-primary">Checkout</button>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name : "shoppingCart"
}
</script>

<style scoped lang="scss">

</style>