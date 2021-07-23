<template>
	<nav-bar></nav-bar>
	<home-page></home-page>

	<!-- <images></images> -->
</template>

<script>
import NavBar from './components/NavBar.vue'
import HomePage from './components/pages/home/Home.vue'
// import Images from './components/Images'

export default {
	name: 'App',
	components: {
		NavBar,
		HomePage,
		// Images,
	},
}
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
