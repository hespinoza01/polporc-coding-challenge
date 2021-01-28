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
