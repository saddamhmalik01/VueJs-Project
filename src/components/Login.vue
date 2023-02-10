<template>
    <div class="main">
        <h1> Login </h1>
        <label class="label">Email</label><br>
        <input type="email" v-model="data.email" class="input" placeholder="Enter your email" /> <br /> <br />

        <label class="label">Password</label><br>
        <input type="password" v-model="data.password" class="input" placeholder="Enter your password" /> <br /> <br />

        <button v-on:click="Login()" clas="button"> Login</button>
        <p>
            Dont have account, click here to create an account <br />
            <button v-on:click="this.$router.push('signup')">Sign Up</button>
        </p>
    </div>
</template>

<script>
import axios from 'axios';
export default {

    name: "loginPage",
    data() {
        return {
            'data': {
                'email': '',
                'password': ''
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
        async Login() {
            let res = await axios.get(`http://localhost:3000/user?email=${this.data.email}&password=${this.data.password}`);
            if (res.status == 200 && res.data.length > 0) {
                localStorage.setItem('user', JSON.stringify(this.data))
                this.$router.push('/')
            }
        }
    }
}
</script>
<style>
.main {
    background: radial-gradient(green, transparent);
    font-family: cursive;
    border: 1px solid black;
    margin: 20px;
    padding: 20px;
    border-radius: 5px;
    display: inline-table;
}

.main label {
    margin: 0px;
    font-family: system-ui;
    font-size: smaller;
}

.main input {
    padding: 5px;
    margin-top: 5px;
    border: 1px solid;
    border-radius: 5px;
    font-family: system-ui;
    width: 300px;
    height: 30px;
}

.main button {
    width: 320px;
    background-color: green;
    height: 30px;
    color: white;
    border-radius: 5px;
    cursor: pointer;


}
</style>