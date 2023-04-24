import FetchError from "../types/FetchError"

const fetchErrorHandler = (error: unknown): FetchError => {

    let fetchError: FetchError = { detail: 'Unknown error occured' } // Default error message

    if (typeof error === 'string') {
      fetchError.detail = error
    }

    if (error instanceof Error) {
      fetchError.detail = error.message
    }

    console.error(fetchError)

    return fetchError
}

export default fetchErrorHandler