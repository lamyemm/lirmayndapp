//const API = PRODUCTION ? 'https:/something.com' : 'https://localhost:3000'
const API = 'http://localhost:3001'

export async function api(path, data = undefined) {
  const result = await fetch(`${API + path}`, {
    method: data !== undefined ? 'POST' : 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: data && JSON.stringify(data)
  })

  // Don't parse JSON for 204 No Content requests
  if (result.status === 204) {
    return
  }

  if (result.status !== 200) {
    throw { status: result.status }
  }

  return await result.json()
}
