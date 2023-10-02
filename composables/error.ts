import { useError } from '@/store/error'

// Показкать попап с ошибкой
export function showError (message: string, time: number) {
    const { error, isErrorShown, errorTimeout } = useError()
    clearTimeout(errorTimeout.value)
    error.value = message
    isErrorShown.value = true
    errorTimeout.value = setTimeout(() => {
        hideError()
    }, time)
}

// Скрыть попап с ошибкой
export function hideError () {
    const { error, isErrorShown, errorTimeout } = useError()
    isErrorShown.value = false
    error.value = ''
    clearTimeout(errorTimeout.value)
}