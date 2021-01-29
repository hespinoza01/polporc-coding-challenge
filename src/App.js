import { useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

// Import components
import { Navbar, AppLoader } from 'components'

// Import provider store
import { actions } from 'store'

// Import services
import { GetCategoriesData } from 'services'

// Import hooks
import { useAppContext, useLoader } from 'hooks'

import AppRoutes from 'App.routes'

// Import styles
import 'styles/index.scss'

export default function App() {
    const [, dispatch] = useAppContext()
    const [loader, enableLoader] = useLoader()

    /**
     * Load basic data to configure category list
     */
    const configureComponent = async _ => {
        const categories = await GetCategoriesData()

        dispatch(actions.CATEGORIES_SET, categories)
        enableLoader()
    }

    useEffect(_ => {
        configureComponent()
    }, [])

    return (
        <main>
            <Router>
                <Navbar />
                <AppRoutes />
                {loader.isShowing && <AppLoader />}
            </Router>
        </main>
    )
}
