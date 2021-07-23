<template>
	<div class="nav-container">
		<div v-for="link in links" :key="link.title" class="parent-container">
			<nav-link :title="link.title" :link="link.link"></nav-link>
		</div>
	</div>
</template>

<script>
import NavLink from './NavLink.vue'

export default {
	name: 'nav-bar',
	components: {
		NavLink,
	},
	data() {
		return {
			links: [
				{ title: 'original', link: 'http://google.com' },
				{ title: 'fanwork', link: 'http://twitter.com' },
				{ title: 'contact', link: 'http://yahoo.com' },
			],
		}
	},
}
</script>

<style scoped>
.nav-container {
	margin: auto;
	background-color: rgb(255, 238, 212);
	border-radius: 5px;
	text-align: center;
	width: 70%;
}

.parent-container {
	display: inline-block;
	padding: 10px;
}
</style>
