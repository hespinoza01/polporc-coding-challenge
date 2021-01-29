// Import utils
import { randomKey } from 'utils'

/**
 * @param {Array} data - options list to show
 * @param {String} label - content for input label
 * @param {String|Number} value - default value
 * @param {Callback} onChange - listener for value change
 */
export default function SelectField({
    data = [],
    label = '',
    value = -1,
    onChange = _ => {},
}) {
    const key = randomKey()

    return (
        <fieldset className='SelectField'>
            <label className='SelectField-label' htmlFor={key}>
                {label}
            </label>
            <select
                value={value}
                onChange={onChange}
                className='SelectField-select'
                id={key}
            >
                <option value={-1} disabled hidden>
                    Seleccione una opción
                </option>
                {data.map((item, index) => (
                    <option key={randomKey()} value={index}>
                        {item}
                    </option>
                ))}
            </select>
        </fieldset>
    )
}
