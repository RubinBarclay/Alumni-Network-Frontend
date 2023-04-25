/**
 * Generic request function using the fetch API
 * @param url API endpoint to call
 * @param config Request configuration
 * @returns Promise with the response data
 */
const request = async <TResponse>(url: string, config: RequestInit = {}): Promise<TResponse> => {
  const response = await fetch(url, config);

  if (!response.ok) {
    const error = await response.text();
    throw new Error(error);
  }

  return await response.json();
}

const api = {
  get: <TResponse>(url: string) => request<TResponse>(url),
  post: <TResponse>(url: string, config: RequestInit ) => {
    return request<TResponse>(url, { ...config, method: 'POST' })
  },
  // // Using `extends` to set a type constraint:
  // post: <TBody extends BodyInit, TResponse>(url: string, body: TBody) => (
  //   request<TResponse>(url, { method: 'POST', body })
  // ),
}

export default api