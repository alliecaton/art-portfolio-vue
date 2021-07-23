<template>
	<div class="nav-container">
		<div class="parent-container">
			<router-link to="/" class="nav-link">home</router-link>
			<router-link to="/art" class="nav-link">art</router-link>
		</div>
	</div>
</template>

<script></script>

<style scoped>
.nav-container {
	margin: auto;
	background-color: rgb(255, 238, 212);
	border-radius: 5px;
	text-align: center;
	width: 70%;
}

.parent-container {
	display: inline-block;
	padding: 10px;
}

.nav-link {
	margin: 3px;
	padding: 0 10px 0 10px;
}
</style>
