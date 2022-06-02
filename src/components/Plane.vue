<template>
  <Container :x="plane.x" :y="plane.y">
    <Sprite :texture="planeImg"></Sprite>
  </Container>
</template>

<script lang="ts" setup>
import { PropType } from 'vue'
import planeImg from '../assets/Plane.png'
import { Plane } from '../game/Plane/Plane'

const { plane } = defineProps({
  plane: {
    type: Object as PropType<Plane>,
    required: true,
  },
})

window.addEventListener('keydown', (e) => {
  switch (e.code) {
    case 'ArrowLeft':
      plane.moveLeft()
      break
    case 'ArrowRight':
      plane.moveRight()
      break
    case 'ArrowUp':
      plane.moveUp()
      break
    case 'ArrowDown':
      plane.moveDown()
      break
    case 'Space':
      plane.attack()
      break
  }
})
</script>

<style></style>
