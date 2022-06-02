<template>
  <Container :x="enemy.x" :y="enemy.y">
    <Sprite :texture="enemyImg"></Sprite>
  </Container>
</template>

<script setup lang="ts">
import { PropType } from 'vue'
import enemyImg from '../assets/enemy.png'
import EnemyPlane from '../game/EnemyPlane/EnemyPlane'

const { enemy } = defineProps({
  enemy: {
    type: Object as PropType<EnemyPlane>,
    required: true,
  },
})
enemy.width = 60
enemy.height = 60
</script>

<style lang="scss" scoped></style>
