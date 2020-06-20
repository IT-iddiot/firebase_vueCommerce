<template>
    <div class="products">
        <h3 class="text-center p-3">All Products</h3>
        <div class="row w-100">
            <div class="col-md-4" v-for="product in products" :key="product.index">
                <div class="card" style="border-radius : 0;">
                    <div class="card-body text-center" style="height : 490px;">
                        <carousel :perPage="1">
                            <slide v-for="image in product.images" :key="image.index">
                                <img class="product-image" :src="image" alt="Product Image">
                            </slide>
                        </carousel>  
                        <h6 class="p-3" style="height : 70px">{{ product.name }}</h6>
                        <!-- <div v-html="product.description" class="p-2">
                        </div> -->
                        <addToCart 
                            :name="product.name"
                            :price="product.price"
                            :product-id="product.id"
                            :image="product.images[0]"
                        >
                        </addToCart>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {db} from "../firebase";
import addToCart from '../components/AddToCart';

export default {

    name : "products",

    components : {
        addToCart
    },

    data() {
        return {
            products : [],
        }
    },

    firestore () {
        return {
            // pass also the unique key for each document, accessible by product['.key']
            products: db.collection('Products'),
        }
    },
}
</script>

<style scoped lang="scss">

    .products {
        margin-bottom : 100px;
    }

    .product-image {
        max-height : 250px;
        margin : 0 auto;
    }

</style>