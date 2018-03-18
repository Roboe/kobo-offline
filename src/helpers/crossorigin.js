export const crossoriginMe =
  (url) => `https://crossorigin.me/${ url }`

export const corsAnywhere =
  (url) => `https://cors-anywhere.herokuapp.com/${ url }`

export const galvanizeCorsProxy =
  (url) => `https://galvanize-cors-proxy.herokuapp.com/${ url }`

export const corsProxy =
  (url) => `http://cors-proxy.htmldriven.com/?url=${ url }`


export const getCorsProxy = (proxyFunction = corsAnywhere) =>
  (url, ...rest) => fetch(proxyFunction(url), ...rest)


export const corsFetch = getCorsProxy()

export default corsFetch
