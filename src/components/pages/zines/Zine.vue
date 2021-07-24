<template>
	<h4>{{ zine.title }}</h4>
	<p>{{ zine.body }}</p>
	<div>
		<img :src="urlFor(zine.images[0]).url()" :alt="zine.title" />
	</div>
	<span>
		<a :href="zine.link" target="_">store link</a> |
		<a :href="twitter">twitter</a></span
	>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import { urlFor } from '../../../client'

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
