const error = ref<string>('')
const errorTimeout = ref<NodeJS.Timeout>()
const isErrorShown = ref<boolean>(false)

// Хранилище попапа ошибок
export function useError () {
    return {
        error,
        isErrorShown,
        errorTimeout
    }
}