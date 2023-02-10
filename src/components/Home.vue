<template>
    <navbarheader />
    <div class="main">
        <h1> Home Component</h1>
        <div class="users">
            <div class='banner'>
                <label>Users</label>
            </div>
            <div class="table">
                <table>
                    <tr>
                        <th>Id</th>
                        <th> Name</th>
                        <th>Email</th>
                    </tr>
                    <tr v-for="user in users" :key="user.id">
                        <td>{{ user.id }} </td>
                        <td>{{ user.full_name }} </td>
                        <td>{{ user.email }} </td>
                    </tr>
                </table>
            </div>
        </div>
        <div class="users">
            <div class='banner'>
                <label> Branches</label>
            </div>
            <div class="users">
                <table class="table">
                    <tr>
                        <th> ID</th>
                        <th> Name</th>
                        <th> Location</th>
                    </tr>
                    <tr v-for="branch in branches" :key="branch.id">
                        <td>{{ branch.id }}</td>
                        <td>{{ branch.name }}</td>
                        <td>{{ branch.location }}</td>
                    </tr>
                </table>

            </div>
        </div>
    </div>
</template>
<script>
import navbarheader from './Navbar.vue';
import axios from 'axios';
export default {
    name: 'HomeComponent',
    components: {
        navbarheader
    },
    data() {
        return {
            'users': [],
            'branches': [],
        }
    },
    mounted() {
        let user = localStorage.getItem('user');
        if (!user) {
            this.$router.push('signup')
        }

    },
    async beforeMount() {

        let data = await axios.get('http://localhost:3000/user');
        this.users = data.data;

        let res = await axios.get('http://localhost:3000/branch');
        this.branches = res.data;

    }
}

</script>
<style>
.body {
    margin: 0px;
    padding-top: 0px;
}

.main {
    width: 800px;
    margin-left: auto;
    margin-right: auto;
    justify-content: center;
}

.users {
    margin-left: auto;
    margin-right: auto;
    width: auto;
    align-content: center;
}

.banner {
    width: 100%;
    background-color: green;
    padding: 5px;
    border: 1px solid;
    border-radius: 10px;
    color: white;
    margin-top: 5px;
    margin-bottom: 5px;
}
.banner label {
    font-size: large;
}
</style>