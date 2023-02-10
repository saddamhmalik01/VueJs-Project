<template>
    <div class="signup">
        <h1>Sign Up</h1>
        <label class="label"> Full Name : </label><br />
        <input class="input" v-model="data.full_name" type="text" placeholder="Enter your name" /> <br /><br />

        <label class="label"> Email : </label><br />
        <input class="input" v-model="data.email" type="text" placeholder="Enter your email" /><br /><br />

        <label class="label"> Password : </label><br />
        <input class="input" v-model="data.password" type="password" placeholder="Password" /><br /><br />

        <button class="button" v-on:click="postData"> Register </button>
        <p>
            Already have account, click here to login <br />
            <button v-on:click="this.$router.push('login')">Login</button>
        </p>
    </div>

</template>

<script>
import axios from 'axios';
export default {
    name: 'sign-up',
    data() {
        return {
            'data': {
                "full_name": '',
                "email": '',
                "password": ''
            }

        }
    },
    mounted()
    {
        let user = localStorage.getItem('user');
        if(user){
            this.$router.push('/')
        }

    },
    methods: {
        postData() {
            axios.post("http://localhost:3000/user", this.data)
            localStorage.setItem('user', JSON.stringify(this.data))
            this.$router.push('/')
        }
    }
}

</script>

<style scoped>
.signup {
    background: radial-gradient(green, transparent);
    font-family: cursive;
    border: 1px solid black;
    margin: 20px;
    padding: 20px;
    border-radius: 5px;
    display: inline-table;
}

.signup label {
    margin: 0px;
    font-family: system-ui;
    font-size: smaller;
}

.signup input {
    padding: 5px;
    margin-top: 5px;
    border: 1px solid;
    border-radius: 5px;
    font-family: system-ui;
    width: 300px;
    height: 30px;
}

.signup button {
    width: 320px;
    background-color: green;
    height: 30px;
    color: white;
    border-radius: 5px;
    cursor: pointer;


}
</style>