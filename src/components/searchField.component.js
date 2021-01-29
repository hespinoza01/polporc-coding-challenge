// Import hooks
import { useInput } from 'hooks'

// Import assets
import { SearchIcon } from 'assets'

/**
 * @param {String} placeholder
 * @param {Callback} onSearch
 */
export default function SearchField({ placeholder = '', onSearch = _ => {} }) {
    const [keyword, resetKeyword] = useInput('')

    /**
     * Emit search callback
     */
    const _onSearch = _ => {
        if (keyword.value.length > 0) {
            onSearch(keyword.value)
            resetKeyword()
        }
    }

    /**
     * When key enter is pressed, dispatch search callback
     * @param {Event} e
     */
    const _onPressEnterKey = e => {
        if (e.key === 'Enter') {
            _onSearch()
        }
    }

    return (
        <fieldset className='SearchField'>
            <input
                className='SearchField-input'
                type='text'
                placeholder={placeholder}
                onKeyUp={_onPressEnterKey}
                {...keyword}
            />

            <button onClick={_onSearch} className='SearchField-button'>
                <SearchIcon className='icon' />
            </button>
        </fieldset>
    )
}
