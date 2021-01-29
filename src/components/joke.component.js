export default function Joke({ data }) {
    return (
        <article className='Joke'>
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
                <li className='info__item'>
                    <strong>Categorías</strong>
                    <span>{data.categories.join(',') || 'N/A'}</span>
                </li>
            </ul>
        </article>
    )
}
