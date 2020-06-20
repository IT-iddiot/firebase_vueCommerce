<template>
    <div class="checkout">
        <navbar></navbar>
        <div class="container">
            <h5 class="my-5">Checkout Page</h5>
            <div class="row mb-4" v-for="(item,index) in allItems" :key="index">
                <div class="col-md-2 flex-center">
                    <img :src="item.image" alt="" width="80px" height="80px">
                </div>
                <div class="col-md-4 py-2" >
                    <p class="w-100 text-truncate">{{ item.name }}</p>
                    <button class="btn btn-link p-0" @click="removeItem(index)">Remove</button>
                </div>
                <div class="col-md-4 flex-center justify-content-end">
                    <input type="number" v-model="item.quantity" class="form-control quantityInput">
                </div>
                <div class="col-md-2 py-2">
                    <p class="h-100 d-flex justify-content-center align-items-center">{{ item.price * item.quantity | currency('RM', 0, { spaceBetweenAmountAndSymbol: true }) }}</p>
                </div>
            </div>

            <hr>

            <div class="row">
                <div class="col-md-1 offset-md-9 p-0">
                    <span class="flex-center justify-content-end"><strong>Total :</strong></span>
                </div>

                <div class="col-md-2 flex-center justify-content-center">
                    {{ totalPrice | currency('RM', 0, { spaceBetweenAmountAndSymbol: true }) }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name : "checkout",

    computed : {

        allItems() {
            return this.$store.state.cart;
        },

        totalPrice() {
            let total = 0;
            this.allItems.forEach( elem => {
                total += elem.quantity * elem.price;
            });
            return total;
        }
    },

    methods : {
        removeItem(index) {
            this.$store.commit('removeFromCart', index);
        }
    }
}
</script>

<style scoped lang='scss'>

    .flex-center {
        display : flex; 
        justify-content : flex-start; 
        align-items : center;
    }

    .quantityInput {
        width: 15%;
        height: 30px;
        padding: 0 0.3rem;
        border-radius: 5px;
        text-align : center;
    }

</style>