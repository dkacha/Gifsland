let requestController = null
const abortPreviousRequest = () => requestController?.abort()
const getAbortController = () => requestController = new AbortController()

class FetchWrap {
  url
  method
  params

  constructor (method, url, params) {
    this.url = url;
    this.method = method;
    params && (this.params = params)
  }

  static headers = new Headers({
    'Content-Type': 'application/json',
  });

  getUrlWithParams() {
    const params = new window.URLSearchParams(this.params,).toString()
    return `${this.url}${params ? '?' + params : ''}`
  }

  async fetch () {
    abortPreviousRequest()

    const response = await window.fetch(this.getUrlWithParams(), {
      method: this.method,
      headers: this.headers,
      signal: getAbortController().signal
    });

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const dataText = await response.text();
    const dataJson = dataText.trim() === '' ? {} : JSON.parse(dataText)

    return dataJson;
  }
}

export const fetchGet = (url, params) => {
  return new FetchWrap('GET', url, params)
}
