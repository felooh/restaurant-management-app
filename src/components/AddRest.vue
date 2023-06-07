<template>
    <HeaderBar />
    <br>
    <h1>
        Hello User Welcome to this Add Restaurant Page
    </h1>
    <form v-on:submit.prevent="submit" class="register">
        <input v-model="restaurant.name" type="text" placeholder="Enter name">
        <input v-model="restaurant.contact" type="text" placeholder="Enter contacts">
        <input v-model="restaurant.location" type="text" placeholder="Enter location">
        <button type="submit" >Submit</button>
    </form>
</template>

<script>
import axios from "axios";
import HeaderBar from "./Header.vue"
    export default {
        name: 'AddRest',
        components:{
            HeaderBar
        },
        data(){
            return{
                restaurant: {
                    name:"",
                    contact:"",
                    location: ""
                }
            }
        },
        methods: { 
            async submit(){

                console.log(this.restaurant);
                let result =  await axios.post("http://localhost:3000/restaurant",{
                    name: this.restaurant.name,
                    contact: this.restaurant.contact,
                    location:this.restaurant.location

                });
                if(result.status==201){
                    this.$router.push({name:"HomePage"})
                }
            }
        },
        mounted() {

            let user = localStorage.getItem("user-info");
            if(user)
            {   
                this.$router.push({ name: "AddRest" });

            }
         }
        
    }
</script>
<style>
 @import "../assets/style.css"
</style>