// Import hooks
import { useAppContext } from 'hooks'

// Import components
import { Joke } from 'components'

export default function History() {
    const [state] = useAppContext()

    return (
        <section className='History'>
            {state.history.length === 0 && (
                <p className='empty-history'>Sin historial para mostrar</p>
            )}

            {state.history.reverse().map(item => (
                <Joke data={item} />
            ))}
        </section>
    )
}
