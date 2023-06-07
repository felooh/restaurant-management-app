<template>
    <div class="nav">
        <router-link to="/">Home</router-link>
        <router-link to="/add-restaurant">Add Restaurant</router-link>
        <router-link to="/update-restaurant">Update Restaurant</router-link>

        <a @click="logout" href="">Logout</a>

    </div>
</template>

<script>
export default {
    name: "HeaderBar",
    methods: {
        logout(){

            localStorage.clear();
            this.$router.push({name: "LoginPage"})
        }
    },

}
</script>
<style>
  @import "../assets/style.css"
</style>