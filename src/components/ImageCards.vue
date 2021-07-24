<template>
	<div class="flex">
		<slot></slot>
	</div>
</template>

<style scoped>
.flex {
	display: flex;
	flex-flow: row wrap;
	justify-content: space-around;
	width: 85%;
	margin: auto;
	padding: 10px;
	align-items: center;
}
</style>
