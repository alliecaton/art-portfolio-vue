<template>
	<div class="flex">
		<div v-for="zine in zines" :key="zine.id">
			<zine :zine="zine"></zine>
		</div>
	</div>
</template>

<script>
import Zine from './Zine'

export default {
	name: 'zines',
	components: {
		Zine,
	},

	data() {
		return {
			zines: [
				{
					id: 1,
					name: 'Millennium Girls',
					images: [
						{ path: '', type: 'cover' },
						{ path: '', type: 'thumb' },
						{ path: '', type: 'thumb' },
						{ path: '', type: 'thumb' },
						{ path: '', type: 'thumb' },
					],
					description: 'girls!',
					twitter: 'https://twitter.com/cartoongrlszine',
					link:
						'https://alliezines.storenvy.com/products/31623445-millennium-girls',
				},
				{
					id: 2,
					name: '90s Girls',
					images: [
						{ path: '', type: 'cover' },
						{ path: '', type: 'thumb' },
						{ path: '', type: 'thumb' },
						{ path: '', type: 'thumb' },
						{ path: '', type: 'thumb' },
					],
					description: 'girls frmo the 90s!',
					twitter: 'https://twitter.com/cartoongrlszine',
					link:
						'https://alliezines.storenvy.com/products/31623457-90s-babes-zine',
				},
			],
		}
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
