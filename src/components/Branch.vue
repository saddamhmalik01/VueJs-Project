<template>
    <navbarheader />
    <div class="main">
        <h1> Branch Component</h1>
        <div style="float:right; margin: 10px;">
            <router-link style="text-decoration: none; color:white" to="addbranch">
                <button style="width:100px">Add Branch</button>
            </router-link>
        </div>
        <div class="users">
            <table class="table">
                <tr>
                    <th> ID</th>
                    <th> Name</th>
                    <th> Location</th>
                    <th>Actions</th>
                </tr>
                <tr v-for="branch in branches" :key="branch.id">
                    <td>{{ branch.id }}</td>
                    <td>{{ branch.name }}</td>
                    <td>{{ branch.location }}</td>
                    <td>
                        <router-link :to="'/editbranch/' + branch.id"><button>Edit</button></router-link>
                        <button v-on:click="deleteBranch(branch.id)">Delete</button>
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
    name: 'branchPage',
    components: {
        navbarheader
    },
    data() {
        return {
            'branches': [],
        }
    },
    methods: {
        async deleteBranch(id) {
            let res = await axios.delete(`http://localhost:3000/branch/` + id);
            if (res.status == 200) {
                this.loadData();
            }

        },
        async loadData() {
            let res = await axios.get('http://localhost:3000/branch');
            this.branches = res.data;
        }
    },
    mounted() {
        let user = localStorage.getItem('user');
        if (!user) {
            this.$router.push('signup')
        }

    },
    beforeMount() {
        this.loadData();
    },
}

</script>
<style>
.body {
    margin: 0px;
    padding: 0px;
}
</style>