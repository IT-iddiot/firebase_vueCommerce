<template>
    <!-- Modal -->
    <div class="modal fade show" id="signup" data-backdrop="static" data-keyboard="false" tabindex="-1" role="dialog" aria-labelledby="loginLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
            <div class="modal-header">
                <ul class="nav nav-pills" id="pills-tab" role="tablist">
                    <li class="nav-item">
                        <a class="nav-link active" id="pills-login-tab" data-toggle="pill" href="#pills-login" role="tab" aria-controls="pills-home" aria-selected="true">
                            Login
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="pills-signup-tab" data-toggle="pill" href="#pills-signup" role="tab" aria-controls="pills-profile" aria-selected="false">
                            Signup
                        </a>
                    </li>
                </ul>
                
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                
                <div class="tab-content" id="nav-tabContent">
                    <div class="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="nav-home-tab">
                        <h5 class="modal-title pb-2 text-center" id="staticBackdropLabel">Account Login</h5>
                        <div class="form-group">
                            <label for="Email">Email Address</label>
                            <input type="email" class="form-control" v-model="email">
                        </div>
                        <div class="form-group">
                            <label for="Password">Password</label>
                            <input type="password" class="form-control" v-model="password">
                        </div>
                        <div class="modal-footer">
                            <button type="button" @click="login" class="btn btn-primary mx-auto px-4" data-dismiss="modal">Login</button>
                            <!-- <a href="">Registered before. Login Now </a> -->
                        </div>

                    </div>
                    <div class="tab-pane fade" id="pills-signup" role="tabpanel" aria-labelledby="nav-profile-tab">
                        <h5 class="modal-title pb-2 text-center" id="staticBackdropLabel">Create New Account</h5>
                        <div class="form-group">
                            <label for="Username">Username</label>
                            <input type="text" class="form-control" v-model="username">
                        </div>
                        <div class="form-group">
                            <label for="Email">Email Address</label>
                            <input type="email" class="form-control" v-model="email">
                        </div>
                        <div class="form-group">
                            <label for="Password">Password</label>
                            <input type="password" class="form-control" v-model="password">
                        </div>

                        <div class="modal-footer">
                            <button type="button" @click="signup" class="btn btn-primary mx-auto px-3" data-dismiss="modal">Signup Now</button>
                            <!-- <a href="">Registered before. Login Now </a> -->
                        </div>
                    </div>
                </div>

            </div>

            </div>
        </div>
    </div>
</template>

<script>
import {fb} from '../firebase';
export default {
    name : "loginModal",

    data() {
        return {
            username : "",
            email : "",
            password : ""
        }
    },

    methods : {
        signup() {
            fb.auth().createUserWithEmailAndPassword(this.email, this.password)
            .then(() => {
                this.$router.replace('admin');
            })
            .catch((error) => {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // [START_EXCLUDE]
                if (errorCode == 'auth/weak-password') {
                    alert('The password is too weak.');
                } else {
                    alert(errorMessage);
                }
                console.log(error);
                // [END_EXCLUDE]
            });
        },

        login() {
            fb.auth().signInWithEmailAndPassword(this.email, this.password)
            .then(() => {
                this.$router.replace('admin');
            })
            .catch(function(error) {
                // Handle Errors here.
                console.log(error.code);
                console.log(error.message);
                // ...
            });
        }
    }

}
</script>

<style lang="scss" scoped>

</style>