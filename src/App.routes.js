import { Switch, Route } from 'react-router-dom'

// Import components
import { History, Home } from 'pages/'

export default function AppRoutes() {
    return (
        <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/history' component={History} />
        </Switch>
    )
}
