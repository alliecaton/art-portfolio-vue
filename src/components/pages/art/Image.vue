<template>
	<div class="thumb-image">
		<img :src="formatUrl(image.images[0].asset._ref)" />
	</div>
</template>

<script>
export default {
	name: 'image-component',
	props: ['image'],
	methods: {
		console() {
			console.log(this.image)
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
	padding: 20px;
	width: 200px;
	display: block;
	margin-left: auto;
	margin-right: auto;
}

/* .thumb-image:hover {
	border-style: solid 2px;
	border-color: rgb(66, 225, 188);
} */

img {
	width: 100%;
	border-radius: 6px;
}
</style>
