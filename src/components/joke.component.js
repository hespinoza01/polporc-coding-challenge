// Import assets
import { CopyIcon } from 'assets'

// Import utils
import { copyClipboard } from 'utils'

export default function Joke({ data }) {
    if (!data) {
        return null
    }

    return (
        <article className='Joke'>
            <CopyIcon
                className='icon copy'
                title='Copiar chiste'
                onClick={_ => copyClipboard(data.value)}
            />
            <p className='Joke-value'>{data.value}</p>
            <ul className='Joke-info'>
                <li className='info__item'>
                    <strong>Creado</strong>
                    <span>{new Date(data.created_at).toDateString()}</span>
                </li>
                <li className='info__item'>
                    <strong>Modificado</strong>
                    <span>{new Date(data.updated_at).toDateString()}</span>
                </li>
            </ul>
        </article>
    )
}
