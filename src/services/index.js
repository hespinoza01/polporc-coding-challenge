import { ErrorAlert, Http } from 'utils'

/**
 * Fetch categories list from API
 */
export const GetCategoriesData = _ =>
    new Promise(async (resolve, _) => {
        try {
            const data = await Http('/categories')

            resolve(data)
        } catch (error) {
            console.error(error)
            ErrorAlert(error)

            resolve([])
        }
    })
/**
 * Fetch random joke
 * @param {Number} category
 */
export const GetRandomJoke = (category = -1) =>
    new Promise(async (resolve, _) => {
        try {
            // If a category was select, get joke by category
            const _category = category !== -1 ? `?category=${category}` : ''

            const data = await Http(`/random${_category}`)

            resolve(data)
        } catch (error) {
            console.error(error)
            ErrorAlert(error)

            resolve(null)
        }
    })

/**
 * Make free text search to API
 * @param {String} query - content of search
 */
export const GetJokeSearchResult = query =>
    new Promise(async (resolve, _) => {
        try {
            const data = await Http(`/search?query=${query}`)

            // Extract result list
            const { result } = data

            if (result.length > 10) {
                resolve(result.splice(0, 10))
            } else {
                resolve(result)
            }
        } catch (error) {
            console.error(error)
            ErrorAlert(error)

            resolve([])
        }
    })
