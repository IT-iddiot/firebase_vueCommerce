<template>
    <div class="products">
        <div class="container h-100">
            <!-- <div class="row h-100 justify-content-center align-items-center">
                <div class="col-md-6">
                    <h3>Overview Products</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam expedita voluptatem totam alias ut. Repellat esse quos eligendi quod ipsum!
                    </p>
                </div>
                <div class="col-md-5">
                    <img src="/img/svg/products.svg" alt="" class="img-fluid">
                </div>
            </div> -->


            <div class="row my-4 px-4">
                <div class="col-md-12">
                    <div class="my-3">
                        <h3 class="d-inline-block">All Products</h3>
                        <button class="btn btn-primary float-right" @click="activeModal = 'add'" data-toggle="modal" data-target="#addModal">Add Product</button>
                    </div>
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <!-- directly fetch data from firestore() -->
                            <tr v-for="product in products" :key="product.index">
                                <td>{{product.name}}</td>
                                <td>{{product.price}}</td>
                                <td>
                                    <button @click="editProduct(product)" class="btn btn-primary mr-4" data-toggle="modal" data-target="#addModal">
                                        Edit
                                    </button>
                                    <button @click="deleteProduct(product['.key'])" class="btn btn-danger">
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <!-- Add and Edit Product Modal -->
            <div class="modal fade" id="addModal" tabindex="-1" role="dialog" aria-labelledby="addModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-xl" role="document">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="addModalLabel">Add Product</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-md-8">
                                <div class="form-group">
                                    <label for="Name">Name</label>
                                    <input type="text" class="form-control" v-model="product.name">
                                </div>
                                <div class="form-group">
                                    <label for="Description">Description</label>
                                    <vue-editor v-model="product.description"></vue-editor>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="form-group">
                                    <label for="Price">Price</label>
                                    <input v-model="product.price" type="number" class="form-control">
                                </div>
                                <div class="form-group">
                                    <label for="Tags">Tags</label>
                                    <input v-model="product.tags" type="text" class="form-control">
                                </div>
                                <div class="form-group">
                                    <label for="Files">Files</label>
                                    <input type="file" class="form-control-file">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button v-if="activeModal == 'add'" @click="addProduct" type="button" class="btn btn-primary">Add Now</button>
                        <button v-if="activeModal == 'edit'" @click="updateProduct" type="button" class="btn btn-primary">Save changes</button>
                    </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import $ from 'jquery';
import Swal from 'sweetalert2';
import Toast from '../plugins/Toast';
import {db} from "../firebase";
// references : https://github.com/davidroyer/vue2-editor
import { VueEditor } from "vue2-editor";

export default {
    data() {
        return {
            // will store the collection data from firestore() products
            products : [],
            product : {
                name : "",
                description : "",
                price : "",
                tags : "",
                image : ""
            },
            activeProductId : null,
            activeModal : ""
        }
    },

    components : {
        VueEditor
    },

    firestore () {
        return {
            // pass also the unique key for each document, accessible by product['.key']
            products: db.collection('Products'),
        }
    },

    methods : {

        readProducts() {

        },

        editProduct(product) {
            this.activeModal = "edit";
            this.product = product;
            this.activeProductId = product['.key'];
        },

        updateProduct() {
            this.$firestore.products.doc(this.product.id).update(this.product) 
            Toast.fire({
                icon: 'success',
                title: 'Updated successfully'
            })
            $('#addModal').modal('hide') 
        },

        deleteProduct(unique_id) {
            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
                }).then((result) => {
                if (result.value) {
                    this.$firestore.products.doc(unique_id).delete()
                    Toast.fire({
                        icon: 'success',
                        title: 'Signed in successfully'
                    })
                }
            })
        },

        addProduct() {
            // will automatically re-fetch all data in collection after add 
            this.$firestore.products.add(this.product)
            Toast.fire({
                icon: 'success',
                title: 'Product added successfully'
            })
            $('#addModal').modal('hide')
        },

        resetProduct() {
            Object.assign(this.$data, this.$options.data.apply(this))
        },
    },

    created() {

    }
}
</script>

<style lang="scss" scoped>

</style>