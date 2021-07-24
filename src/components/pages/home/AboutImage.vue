<template>
	<div class="container">
		<img class="image" src="@/assets/selfport.png" alt="portrait of allie" />
	</div>
</template>

<script>
export default {
	name: 'aboutimage',
}
</script>

<style scoped>
.container {
	max-width: 25%;
	padding: 40px;
	min-width: 200px;
}

.image {
	width: 100%;
	border-radius: 50%;
}
</style>
