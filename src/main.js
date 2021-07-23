import { createApp } from 'vue'
import App from './App.vue'

import { createWebHistory, createRouter } from 'vue-router'
import Home from './components/pages/home/Home.vue'
import Art from './components/Images'

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
	{
		path: '/art',
		name: 'Art',
		component: Art,
	},
]

const router = createRouter({
	history: createWebHistory(),
	routes,
})

createApp(App)
	.use(router)
	.mount('#app')
