<template>
    <img
    class="logo"
    src="../assets/Chef-restaurant-logo4.jpg"
    width="250"
    height="150"
    lenthalt=""
    />
   <h1> Login Page</h1>
   <div class="register">
    <input type="email" v-model="email" placeholder="Enter Email" />
    <input type="password" v-model="password" placeholder="Enter password" />

    <button @click="login">Login</button>
    <p>
        <router-link to="/sign-up">Have no account? Sign Up here!</router-link>
    </p>
  </div>
</template>

<script>
import axios from 'axios';
export default {

    name:"LoginPage",
    data() {
        return{

            email:"",
            password:""
        }
    },
    methods:{
         async login(){

            let result = await axios.get(
                `http://localhost:3000/user?email=${this.email}&password=${this.password}`
            );
            if (result.status == 200 && result.data.length>0){
                this.$router.push({name:"HomePage"});
            }
        }
    },
    
}
</script>   