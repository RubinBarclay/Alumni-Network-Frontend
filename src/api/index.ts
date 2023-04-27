/**
 * Generic request function using the fetch API
 * @param url API endpoint to call
 * @param config Request configuration
 * @returns Promise with the response data
 */
const request = (url: string, config: RequestInit = {}): Promise<Response> => {
  return fetch(url, config);

  // if (!response.ok) {
  //   const error = await response.text();
  //   throw new Error(error);
  // }

  // return await response.json();
}

// const request = async <TResponse>(url: string, config: RequestInit = {}): Promise<TResponse> => {
//   const response = await fetch(url, config);

//   // if (!response.ok) {
//   //   const error = await response.text();
//   //   throw new Error(error);
//   // }

//   return await response.json();
// }

const api = {
  get: (url: string) => request(url),
  post: (url: string, config: RequestInit ) => request(url, { ...config, method: 'POST' })
  // get: <TResponse>(url: string) => request<TResponse>(url),
  // post: <TResponse>(url: string, config: RequestInit ) => {
  //   return request<TResponse>(url, { ...config, method: 'POST' })
  // },
}

export default api