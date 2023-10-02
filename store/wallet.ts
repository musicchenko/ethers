import { ethers } from 'ethers'

const addresses = ref<string[]>([])
const provider = ref<ethers.Eip1193Provider>()
const web3 = ref<ethers.BrowserProvider>()

// Хранилище кошельков
export function useWallet () {
    const isWalletConnected = computed(() => addresses.value.length)

    return {
        provider,
        web3,
        addresses,

        isWalletConnected
    }
}