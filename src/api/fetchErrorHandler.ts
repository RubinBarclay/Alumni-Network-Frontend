import FetchError from "../types/FetchError"

const fetchErrorHandler = (error: unknown): FetchError => {

    let fetchError: FetchError = { status: 500, detail: 'Unknown error occured' } // Default error message

    if (typeof error === 'string') {
      fetchError.detail = error
    }

    if (error instanceof Error) {
      fetchError.status = error.name === "Conflict" ? 409 : 500
      fetchError.detail = error.message
    }

    console.error(fetchError)

    return fetchError
}

export default fetchErrorHandler