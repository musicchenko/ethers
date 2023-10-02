<template>
    <div class="login">
        <Loading
            v-if="isLoading"
            :message="'Проверка на наличие подключенного кошелька...'"
        />
        <template v-else>
            <button
                v-if="!isWalletConnected"
                class="login__sign-in-btn"
                @click="connectWallet()"
            >
                Войти через MetaMask
            </button>
            <div v-else>
                <div class="login__wallets-label">Подключенные кошельки</div>
                <div
                    v-for="(address) in addresses"
                    :key="'address-' + address"
                    class="login__wallet"
                >
                    {{ address }}
                </div>
            </div>
        </template>
    </div>
</template>

<script setup lang="ts">
import { useWallet } from '~/store/wallet'

const { addresses, isWalletConnected } = useWallet()

// Лоадер на время проверки на наличие подключенного кошелька
const isLoading = ref<boolean>(true)

onMounted(async () => {
    await getWallets()
    isLoading.value = false
})
</script>

<style scoped lang="scss">
@import '@/assets/scss/variables.scss';

.login {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    &__wallet {
        width: max-content;
        font-size: 1.25rem;
        color: $color-gray;
    }
    &__wallets-label {
        font-size: 1.5rem;
        background-color: $color-white;
        border-radius: 1rem;
        padding: .5rem 1rem;
        margin-bottom: 2rem;
    }
    &__sign-in-btn {
        font-size: 1rem;
        font-weight: 600;
        padding: 1rem 1.25rem;
        border: none;
        border-radius: 1rem;
        background-color: gold;
        cursor: pointer;
    }
}
</style>