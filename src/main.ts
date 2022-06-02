// import { createApp } from 'vue'
import App from './App.vue'
import { createApp } from './renderer/index'
import { game } from './game'

// createApp(App).mount('#app')

createApp(App).mount(game.stage)
