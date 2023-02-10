<template>
    <div class="navbar">
        <a> <router-link to="/" > Home</router-link></a>
        <a><router-link to="users">Users</router-link></a>
        <a><router-link to="branch">Branches</router-link></a>
        <a><router-link to="about" >About Us </router-link></a>
        <a href="#" v-on:click="logout"> <router-link to="">Logout</router-link></a>
    </div>
</template>
<script>
export default {
    'name': 'navbarHeader',
    methods:{
        logout(){
            localStorage.clear();
            this.$router.push('login');
        }
    }
}
</script>
<style>
.body {
    margin: 0px;
    padding: 0px;
}

.navbar {
    background-color: darkgreen;
    float: initial;
    height: 50px;
}

.navbar a {
    display: table-cell;
    color: white;
    text-decoration: none;
    padding: 15px;
    margin: 15px;
    height: inherit;
}

.navbar a:hover {
    background-color: white;
    color: black;
}
</style>