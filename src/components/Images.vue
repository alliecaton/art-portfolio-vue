<template>
	<p>all images</p>
	<div class="images-container">
		<div v-for="img in images" :key="img.id">
			<image-component
				@onClick="toggleSelected"
				:id="img.id"
				:alt="img.alt"
				:file="img.file"
				:selected="img.selected"
			></image-component>
		</div>
	</div>
</template>

<script>
import ImageComponent from './Image.vue'

export default {
	name: 'images',
	components: {
		ImageComponent,
	},
	data() {
		return {
			images: [
				{
					id: 1,
					alt: 'image1',
					file: 'logo.png',
					selected: false,
				},
				{
					id: 2,
					alt: 'image1',
					file: 'logo.png',
					selected: false,
				},
				{ id: 3, alt: 'image1', file: 'logo.png', selected: false },
				{ id: 4, alt: 'image1', file: 'logo.png', selected: false },
			],
		}
	},
	methods: {
		toggleSelected(id) {
			console.log('hit event')
			const image = this.images.find(image => image.id === id)
			image.selected = !image.selected
			console.log(image.id, image.selected)
		},
	},
}
</script>

<style>
.images-container {
	display: flex;
	flex-flow: row wrap;
	justify-content: space-around;
}
</style>
