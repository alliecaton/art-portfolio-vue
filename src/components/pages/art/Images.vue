<template>
	<div class="flex">
		<div v-for="image in images" :key="image._id">
			<image-component :image="image"></image-component>
		</div>
	</div>
</template>

<script>
import ImageComponent from './Image'
import sanity from '../../../client'

const query = `*[_type == "art"]{
  _id,
  title,
  slug,
  body,
  images
}[0...50]`

export default {
	name: 'images-container',
	components: {
		ImageComponent,
	},

	data() {
		return {
			loading: false,
			images: [],
		}
	},

	created() {
		this.fetchImages()
	},

	methods: {
		fetchImages() {
			this.loading = true
			sanity.fetch(query).then(
				images => {
					console.log(images)
					this.loading = false
					this.images = images
				},
				error => {
					this.error = error
				}
			)
			this.loading = false
		},
	},
}
</script>

<style scoped>
.flex {
	display: flex;
	flex-flow: row wrap;
	justify-content: space-around;
	align-items: center;
	width: 85%;
	margin: auto;
	padding: 10px;
}
</style>
