<template>
	<div class="nav-link">
		<a :href="link">{{ title }}</a>
	</div>
</template>

<script>
export default {
	name: 'navlink',
	props: {
		title: String,
		link: String,
	},
}
</script>

<style>
.nav-link {
	margin: 3px;
	padding: 0 10px 0 10px;
}
</style>
