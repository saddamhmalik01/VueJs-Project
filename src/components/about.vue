<template>
    <navbarheader />
    <div class="main">
        <h1> About Us Component</h1>
        <div class="users">
            <p class="about">
                We are dedicated to revolutionizing the technology industry and making cutting-edge solutions
                accessible to everyone. <br/><br/>
                Our team of highly skilled experts combines a passion for innovation with a deep understanding of the
                latest advancements in the field to bring you products and services that are reliable, intuitive, and
                effective.<br /><br />
                With a focus on quality and customer satisfaction, we work tirelessly to provide you with the best
                possible experience. Our products are designed to simplify and streamline your day-to-day operations,
                making it easy for you to stay connected, stay productive, and stay ahead of the curve.
                <br /><br />
                Whether you're a small business owner, a busy professional, or a tech enthusiast, we have the products
                and expertise you need to stay ahead in a fast-paced digital world. Our commitment to excellence,
                combined with our passion for innovation, ensures that you always receive the best possible solutions
                and support from our team.
                <br/><br />
                So if you're looking for a technology partner that you can trust, look no further than [Company Name].
                With us by your side, you can stay ahead of the game and achieve your goals faster and more efficiently
                than ever before.
            </p>
        </div>
    </div>
</template>
<script>
import navbarheader from './Navbar.vue';
export default {
    name: 'aboutPage',
    components: {
        navbarheader
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

.about {
    margin: 20px;
    text-justify: center;
}
</style>