<template>
    <div class="loading">
        {{ message }}
    </div>
</template>

<script setup lang="ts">
interface IProps {
    message: string
}

defineProps<IProps>()
</script>

<style scoped lang="scss">
@import '@/assets/scss/variables.scss';

.loading {
    font-size: 1.5rem;
    color: $color-white;
}
</style>