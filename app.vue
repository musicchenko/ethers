<template>
    <NuxtPage />
    <Error v-if="isErrorShown" />
</template>

<script setup lang="ts">
import { useError } from '@/store/error'

const { isErrorShown } = useError()
</script>

<style lang="scss">
@import '@/assets/scss/main.scss';
@import '@/assets/scss/variables.scss';

body {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 10px;
    background-color: $color-dark-gray;
}
</style>