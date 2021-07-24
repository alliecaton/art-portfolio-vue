<template>
	<h4>
		{{ zine.name }}
	</h4>
	<p>{{ zine.description }}</p>
	<span
		><a :href="zine.link" target="_">store link</a> |
		<a :href="twitter">twitter</a></span
	>
</template>

<script>
export default {
	name: 'zine',
	props: ['zine'],

	methods: {
		console() {
			console.log(this.zine)
			console.log(this.zine.name)
		},
	},
}
</script>
