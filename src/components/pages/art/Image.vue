<template>
	<img
		@click="$emit('onClick', id)"
		:src="require(`@/assets/original/${file}`)"
		:alt="alt"
		:class="[selected ? red : blue]"
	/>
</template>

<script>
export default {
	name: 'image-component',
	props: {
		alt: String,
		file: String,
		id: Number,
		selected: Boolean,
	},
	emits: ['onClick'],
	data() {
		return {
			red: 'red',
			blue: 'blue',
		}
	},
}
</script>

<style scoped>
.red {
	border: 5px solid;
	border-radius: 5px;
	border-color: red;
}

.blue {
	border: 5px solid;
	border-radius: 5px;
	border-color: blue;
}
</style>
