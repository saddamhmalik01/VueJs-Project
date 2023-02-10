<template>
    <navbarheader />
    <div class="main">
        <h1> Users</h1>
        <div style="float:right; margin: 10px;">
        <router-link to="adduser"><button style="width:100px">Add User</button></router-link>
        </div>
        <div class="users">
            <table class="table">
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Actions</th>
                </tr>
                <tr v-for="user in users" :key="user.id">
                    <td>{{ user.id }} </td>
                    <td>{{ user.full_name }} </td>
                    <td>{{ user.email }} </td>
                    <td>
                        <router-link :to="'/edituser/' + user.id"><button>Edit</button></router-link>
                        <button v-on:click="deleteUser(user.id)">Delete</button>
                    </td>
                </tr>

            </table>
        </div>
    </div>

</template>
<script>
import axios from 'axios';
import navbarheader from './Navbar.vue';
export default {
    name: 'UsersComponent',
    components: {
        navbarheader
    },
    data() {
        return {
            'data': {
                'email': '',
                'full_name': ''
            },
            'users': [],
        }
    },
    mounted() {
        let user = localStorage.getItem('user');
        if (!user) {
            this.$router.push('signup')
        }

    },
    beforeMount() {
        this.loadData()
    },
    methods:
    {
        async deleteUser(id) {
            let res = await axios.delete(`http://localhost:3000/user/` + id)
            if (res.status == 200) {
                this.loadData()
            }
        },
        async loadData() {
            let data = await axios.get('http://localhost:3000/user');
            this.users = data.data;
        }
    }
}

</script>
<style>
.body {
    margin: 0px;
    padding: 0px;
}

.main .users {
    font: message-box;
    width: 600px;
    height: auto;
}

.main .table {
    display: block ruby;

}

.table th {
    border: 1px solid;
    width: 200px;
}

.table tr button {
    width: 60px;
}
</style>