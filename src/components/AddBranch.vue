<template>
    <navbarheader />
    <div class="main">
        <h1> Add Branch</h1>
        <div class="users">
            <label> Name: </label><br />
            <input v-model="data.name" type="text" placeholder="Enter branch name" /> <br /><br />
            <label> Location: </label><br />
            <input v-model="data.location" type="text" placeholder="Enter branch location" /> <br /><br />
            <button v-on:click="saveBranch()">Add</button>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import navbarheader from './Navbar.vue';
export default {
    name: 'addBranch',
    components: {
        navbarheader
    },
    data()
    {
        return {
            "data" : {
                'name':'',
                'location':''
            }
        }
    },
    methods :
    {
        saveBranch()
        {
            axios.post('http://localhost:3000/branch',this.data);
            this.$router.push('branch')
        }
    },
    mounted() {
        let user = localStorage.getItem('user');
        if (!user) {
            this.$router.push('signup')
        }

    },
}

</script>
<style>
.body {
    margin: 0px;
    padding: 0px;
}
</style>