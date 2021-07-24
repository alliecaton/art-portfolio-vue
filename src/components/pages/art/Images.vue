<template>
	<image-cards>
		<div v-for="image in images" :key="image._id">
			<image-component :image="image"></image-component>
		</div>
	</image-cards>
</template>

<script>
import ImageComponent from './Image'
import sanity from '../../../client'
import ImageCards from '../../ImageCards.vue'

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
		ImageCards,
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
