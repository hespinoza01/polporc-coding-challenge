import { useState } from 'react'

// Import store
import { actions } from 'store'

// Import hooks
import { useAppContext, useInput, useLoader } from 'hooks'

// Import services
import { GetRandomJoke, GetJokeSearchResult } from 'services'

// import components
import { SelectField, SearchField, Joke } from 'components'

export default function Home() {
    const [loader] = useLoader()
    const [state, dispatch] = useAppContext()

    const [category] = useInput(-1)
    const [jokes, setJokes] = useState([])

    /**
     * Search a joke list
     * @param {String} query - keyword search
     */
    const onSearch = async query => {
        loader.show()
        const data = await GetJokeSearchResult(query)

        setJokes(data)
        loader.hide()
    }

    /**
     * Fetch random joke from API
     */
    const onRandom = async _ => {
        loader.show()
        const data = await GetRandomJoke()

        setJokes([data])
        dispatch(actions.HISTORY_APPEND, data)
        loader.hide()
    }

    return (
        <section className='Home'>
            <div className='search'>
                <SelectField
                    label='Seleccionar categoría'
                    data={state.categories}
                    {...category}
                />
                <SearchField placeholder='Buscar...' onSearch={onSearch} />
            </div>

            <div className='joke-container'>
                <button className='generate-joke' onClick={onRandom}>
                    Generar Chiste
                </button>

                {jokes.map(item => (
                    <Joke data={item} />
                ))}
            </div>
        </section>
    )
}
