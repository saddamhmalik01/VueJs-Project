<template>
    <div class="main">
        <h1> Edit User</h1>
        <div class="users">
            <input type="text" v-model="user.id" hidden />
            <label>Full Name</label><br />
            <input type="text" v-model="user.full_name" /><br /><br />
            <label>Email</label><br />
            <input type="email" v-model="user.email" /><br /><br />
            <label>Password</label><br />
            <input type="password" v-model="user.password" /><br /><br />
            <button v-on:click="update()">Update</button>
        </div>
    </div>
</template>
<script>
import axios from 'axios';

export default {
    'name': 'editUser',
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
    async beforeMount() {
        let res = await axios.get(`http://localhost:3000/user/` + this.$route.params.id);
        this.user = res.data;
    },
    methods: {
        update() {
            axios.put(`http://localhost:3000/user/`+this.user.id,this.user);
            this.$router.push('/users');
        }
    }
}
</script>