class FetchError extends Error {
  constructor(detail: string, public status: number) {
    super(detail)
  }
}

export default FetchError