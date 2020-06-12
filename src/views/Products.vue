<template>
    <div class="products">
        <div class="container h-100">
            <div class="row h-100 justify-content-center align-items-center">
                <div class="col-md-6">
                    <h3>Overview Products</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam expedita voluptatem totam alias ut. Repellat esse quos eligendi quod ipsum!
                    </p>
                </div>
                <div class="col-md-5">
                    <img src="/img/svg/products.svg" alt="" class="img-fluid">
                </div>
            </div>

            <div class="row">
                <div class="col-md-12">
                        <h4 class="text-center">CRUD of products</h4>
                        <div class="form-group">
                            <label for="Username">Name</label>
                            <input type="text" class="form-control" v-model="product.name">
                        </div>
                        <div class="form-group">
                            <label for="Email">Price</label>
                            <input type="email" class="form-control" v-model="product.price">
                        </div>

                        <button @click="saveProduct" class="btn btn-info">Add product</button>
                </div>
            </div>

            <div class="row my-4">
                <div class="col-md-12">
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="product in allProducts" :key="product.index">
                                <td>{{product.data().name}}</td>
                                <td>{{product.data().price}}</td>
                                <td>
                                    <button @click="editProduct(product)" class="btn btn-primary mr-4" data-toggle="modal" data-target="#editModal">
                                        Edit
                                    </button>
                                    <button @click="deleteProduct(product.id)" class="btn btn-danger">
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <!-- Edit Product Modal -->
            <div class="modal fade" id="editModal" tabindex="-1" role="dialog" aria-labelledby="editModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="editModalLabel">Edit Product</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="form-group">
                            <label for="Username">Name</label>
                            <input type="text" class="form-control" v-model="product.name">
                        </div>
                        <div class="form-group">
                            <label for="Email">Price</label>
                            <input type="email" class="form-control" v-model="product.price">
                        </div> 
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button @click="updateProduct" type="button" class="btn btn-primary">Save changes</button>
                    </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import $ from 'jquery';
import {db} from "../firebase";

export default {
    data() {
        return {
            allProducts : [],
            product : {
                name : "",
                price : ""
            },
            activeProductId : null
        }
    },

    methods : {

        readProducts() {
            // references : https://firebase.google.com/docs/firestore/quickstart?authuser=0
            db.collection("Products").get().then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    this.allProducts.push(doc);
                });
            });
        },

        editProduct(product) {
            this.activeProductId = product.id;
            this.product = product.data();
        },

        updateProduct() {
            // references : https://firebase.google.com/docs/firestore/manage-data/add-data?authuser=0#web_8
            db.collection("Products").doc(this.activeProductId).update(this.product)
            .then(() => {
                $('#editModal').modal('hide')
                this.dataWatchers();
                console.log("Document successfully updated!");
            })
            .catch((error) => {
                console.error("Error updating document: ", error);
            });
        },

        deleteProduct(id) {
            // references : https://firebase.google.com/docs/firestore/manage-data/delete-data?authuser=0
            if(confirm("are you sure want to delete ?")) {
                db.collection("Products").doc(id).delete().then(() => {
                    console.log("Document successfully deleted!");
                }).catch((error) => {
                    console.error("Error removing document: ", error);
                });
            }
        },

        dataWatchers() {
            // references : https://firebase.google.com/docs/firestore/query-data/listen?authuser=0#listen_to_multiple_documents_in_a_collection
            db.collection("Products").onSnapshot((querySnapshot) => {
                this.allProducts = [];
                querySnapshot.forEach((doc) => {
                    this.allProducts.push(doc);
                });
            });
        },

        saveProduct() {
            db.collection("Products").add(this.product)
            .then((docRef) => {
                // this.resetProduct();
                this.readProducts();
                console.log("Document written with ID: ", docRef.id);
            })
            .catch((error) => {
                console.error("Error adding document: ", error);
            });
        },

        resetProduct() {
            Object.assign(this.$data, this.$options.data.apply(this))
        },
    },

    created() {
        this.readProducts();
    }
}
</script>

<style lang="scss" scoped>

</style>