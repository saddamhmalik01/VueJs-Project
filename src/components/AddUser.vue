<template>
    <div class="main">
        <h1> Add New User</h1>
        <div class="users">
            <label>Full Name</label><br />
            <input type="text" v-model="user.full_name" placeholder="Enter full name"/><br /><br />
            <label>Email</label><br />
            <input type="email" v-model="user.email" placeholder="Enter email"/><br /><br />
            <label>Password</label><br />
            <input type="password" v-model="user.password" placeholder="Enter password"/><br /><br />
            <button v-on:click="create()">Add User</button>
        </div>
    </div>
</template>
<script>
import axios from 'axios';

export default {
    'name': 'addUser',
    data() {
        return {
            "user": {
                'full_name': '',
                'email': '',
                'password': '',
                'id': ''
            }

        }
    },
    methods: {
        create() {
            axios.post(`http://localhost:3000/user`, this.user);
            this.$router.push('/users');
        }
    }
}
</script>