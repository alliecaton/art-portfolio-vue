<template>
	<img
		@click="$emit('onClick', id)"
		:src="require(`@/assets/${file}`)"
		:alt="alt"
	/>
</template>

<script>
export default {
	name: 'image-component',
	props: {
		alt: String,
		file: String,
		id: Number,
	},
	emits: ['onClick'],
}
</script>
