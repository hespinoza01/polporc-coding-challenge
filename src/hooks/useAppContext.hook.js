import { useContext } from 'react'
import { Store } from 'store/main.store'

/**
 * Hook for extract app context state and reducer
 */
export default function useAppContext() {
    const [state, dispatch] = useContext(Store)

    return [state, dispatch]
}
