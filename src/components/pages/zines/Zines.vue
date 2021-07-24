<template>
	<!-- <div class="flex"> -->
	<image-cards>
		<div v-for="zine in zines" :key="zine._id">
			<zine :zine="zine"></zine>
		</div>
	</image-cards>
	<!-- </div> -->
</template>

<script>
import Zine from './Zine'
import ImageCards from '../../ImageCards.vue'
import sanity from '../../../client'

const query = `*[_type == "product"]{
  _id,
  title,
  slug,
  twitter,
  store,
  body, 
  images
}[0...50]`

export default {
	name: 'zines',
	components: {
		Zine,
		ImageCards,
	},

	data() {
		return {
			loading: false,
			zines: [],
		}
	},

	created() {
		this.fetchData()
	},
	methods: {
		fetchData() {
			this.loading = true
			sanity.fetch(query).then(
				zines => {
					console.log(zines)
					this.loading = false
					this.zines = zines
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
