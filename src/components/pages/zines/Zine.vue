<template>
	<div class="cont">
		<div class="thumb-image">
			<img :src="formatUrl(zine.images[0].asset._ref)" :alt="zine.title" />
		</div>
		<h4>{{ zine.title }}</h4>
		<p>{{ zine.body }}</p>
		<a :href="zine.link" target="_">store link</a> |
		<a :href="twitter">twitter</a>
	</div>
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

		formatUrl(url) {
			const array = url.split('-')
			array.shift()
			return `https://cdn.sanity.io/images/9k3xxnla/production/${array[0]}-${array[1]}.${array[2]}`
		},
	},
}
</script>

<style scoped>
.thumb-image {
	width: 200px;
	height: 200px;
	overflow: hidden;
	display: block;
	margin-left: auto;
	margin-right: auto;
	border-radius: 6px;
}

img {
	width: 100%;
}

.cont {
	width: 250px;
	padding: 20px;
	text-align: center;
}

a {
	cursor: pointer;
}

p {
	margin: 5px;
}

h4 {
	margin: 5px;
	padding-top: 3px;
}
</style>
