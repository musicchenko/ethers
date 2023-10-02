import { ethers } from 'ethers'
import { useWallet } from '@/store/wallet'
import { WALLET_ERROR_TIMEOUT } from '@/constants/error'

// Запрос на подключение кошелька
export async function connectWallet () {
    const { provider, web3, addresses } = useWallet()

    if (window.ethereum) {
        provider.value = window.ethereum

        try {
            const addressesList = await window.ethereum.request({ method: 'eth_requestAccounts' })
            addresses.value.push(...addressesList)
        }
        catch (e: any) {
            showError(`Ошибка подключения кошелька: ${e.message} | код: ${e.code}`, WALLET_ERROR_TIMEOUT)
            console.error(e)
        }
    }
    else {
        showError('У Вас отсутствует MetaMask', WALLET_ERROR_TIMEOUT)
    }

    if (provider.value) {
        web3.value = new ethers.BrowserProvider(provider.value)
    }
}

// Проверка подключен ли хотя бы один кошелек
export async function getWallets () {
    if (!window.ethereum) {
        return
    }

    try {
        const { addresses } = useWallet()
        const addressesList = await window.ethereum.request({ method: 'eth_accounts' })
        addresses.value.push(...addressesList)
    }
    catch (e: any) {
        showError(`Ошибка проверки кошелька: ${e.message} | код: ${e.code}`, WALLET_ERROR_TIMEOUT)
    }
}