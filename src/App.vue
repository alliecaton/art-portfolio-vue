<template>
	<h1 class="web-title">alliestration</h1>
	<nav-bar></nav-bar>
	<!-- <router-link to="/"></router-link> -->
	<!-- <home-page></home-page> -->

	<!-- <images></images> -->

	<router-view></router-view>
</template>

<script>
import NavBar from './components/NavBar.vue'
// import HomePage from './components/pages/home/Home.vue'
// import Images from './components/Images'

export default {
	name: 'App',
	components: {
		NavBar,
		// HomePage,
		// Images,
	},
}
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	/* text-align: center; */
	color: #2c3e50;
	margin-top: 60px;
}

a {
	text-decoration: none;
	color: rgb(255, 137, 156);
}

a:hover,
a:active,
a.router-link-active {
	color: rgb(255, 176, 58);
}

.web-title {
	text-align: center;
}
</style>
