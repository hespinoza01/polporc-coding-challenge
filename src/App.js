import { useEffect } from 'react'

// Import provider store
import { actions } from 'store/main.store'

// Import services
import { GetCategoriesData } from 'services/main.service'

// Import hooks
import { useAppContext } from 'hooks/main.hook'

// Import styles
import 'styles/index.scss'

export default function App() {
    const [, dispatch] = useAppContext()

    /**
     * Load basic data to configure category list
     */
    const configureComponent = async _ => {
        const categories = await GetCategoriesData()

        dispatch(actions.CATEGORIES_SET, categories)
    }

    useEffect(_ => {
        configureComponent()
    }, [])

    return <main></main>
}
