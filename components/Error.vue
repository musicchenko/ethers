<template>
    <div class="error">
        {{ error }}
    </div>
</template>

<script setup lang="ts">
import { useError } from '@/store/error'

const { error } = useError()
</script>

<style scoped lang="scss">
@import '@/assets/scss/variables.scss';

.error {
    font-size: 1.25rem;
    color: $color-white;
    background-color: $color-red;
    padding: 1rem 1.25rem;
    border-radius: .75rem;
    position: fixed;
    top: 2rem;
}
</style>