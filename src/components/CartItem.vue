<template>
    <div class="row mb-4">
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
            <p class="h-100 d-flex justify-content-center align-items-center">{{ item.price | currency('RM', 0, { spaceBetweenAmountAndSymbol: true }) }}</p>
        </div>
    </div>
</template>

<script>

export default {
    name : "cartItem",

    props : {
        item : Object
    },

    methods : {
        removeItem(index) {
            this.$store.commit('removeFromCart', index);
        }
    }
}

</script>

<style scoped lang="scss">

    .flex-center {
        display : flex; 
        justify-content : center; 
        align-items : center;
    }

    .quantityInput {
        width: 20%;
        height: 30px;
        padding: 0 0.3rem;
        border-radius: 5px;
    }

</style>