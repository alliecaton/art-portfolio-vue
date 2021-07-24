<template>
	<div class="flex">
		<div v-for="zine in zines" :key="zine.id">
			<zine :zine="zine"></zine>
		</div>
	</div>
</template>

<script>
import Zine from './Zine'
import sanity from '../../../client'

const query = `*[_type == "product"]{
  _id,
  title,
  slug,
  body, 
  images
}[0...50]`

export default {
	name: 'zines',
	components: {
		Zine,
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
		},
	},
}
</script>

<style scoped>
.flex {
	display: flex;
	flex-flow: row wrap;
	justify-content: space-around;
}
</style>
