<template>
	<div class="home-flex-container">
		<about-image></about-image>
		<about-description></about-description>
	</div>
</template>

<script>
import AboutImage from './AboutImage'
import AboutDescription from './AboutDescription'

export default {
	name: 'homepage',
	components: {
		AboutDescription,
		AboutImage,
	},
}
</script>

<style scoped>
.home-flex-container {
	margin: 40px;
	/* width: 70%; */
	display: flex;
	flex-flow: row wrap;
	justify-content: center;
	align-items: center;
}
</style>
