import { BASE_URL_SERVER } from 'utils'

/**
 * Hook for make REST petitions
 * @param {String} pathUrl
 * @param {Option} options
 * @returns {Promise}
 */
export default function Http(pathUrl, options = {}) {
    return new Promise((resolve, reject) => {
        // Join base url with path to request
        const fullURL = BASE_URL_SERVER + pathUrl

        fetch(fullURL, options)
            .then(response => {
                if (response.status !== 200) {
                    reject('Error al realizar la petición')
                }

                resolve(response.json())
            })
            .catch(error => reject(error.toString()))
    })
}
