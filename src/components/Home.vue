<template>
    <HeaderBar />
    <br>
    <h1>
        Hello {{ name }}, Welcome to this web page
    </h1>
    <div class="table" >
        <table border="1">
    
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Contacts</th>
                    <th>Location</th>
                    <th>Actions</th>
                </tr>
    
            <tr v-for="item in restaurants" :key="item.id">
                <td>{{ item.id }}</td>
                <td>{{ item.name }}</td>
                <td>{{ item.contact }}</td>
                <td>{{ item.location }}</td>
                <td>
                    <router-link :to="'/update-restaurant/' + item.id">Update</router-link>
                    <button @click="deleteRestaurant(item.id)">Delete</button>
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
import HeaderBar from "./Header.vue";
import axios from "axios";

    export default {
        data(){
            return {
            name:"",
            restaurants: [],
            }
        },
        name: 'HomePage',
        components:{
            HeaderBar
        },
        methods: {
           async deleteRestaurant(id){
                let result = await axios.delete("http://localhost:3000/restaurant/"+ id)
                console.warn(result)
                if(result.status==200){
                    window.location.reload();
                }
             }
        },
        async mounted() {

            let user = localStorage.getItem("user-info");

            this.name = JSON.parse(user).name;

            if(!user)
            {
                this.$router.push({ name: "SignUp" });

            }

            let restaurant = await axios.get("http://localhost:3000/restaurant");
            this.restaurants = restaurant.data
        }
    }
</script>
<style>
 @import "../assets/style.css"
</style>