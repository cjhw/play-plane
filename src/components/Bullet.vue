<template>
  <Container :x="bullet.x" :y="bullet.y">
    <Sprite :texture="bulletImg"></Sprite>
  </Container>
</template>

<script setup lang="ts">
import { PropType } from 'vue'
import bulletImg from '../assets/fire.png'
import Bullet from '../game/Bullet/Bullet'

const { bullet } = defineProps({
  bullet: {
    type: Object as PropType<Bullet>,
    required: true,
  },
})
bullet.width = 70
bullet.height = 60
</script>

<style lang="scss" scoped></style>
