const BASE_URL = '/api/locations'

const getAllLocations = async () => {
  const response = await fetch(BASE_URL)
  if (!response.ok) {
    const err = await response.json().catch(() => ({}))
    throw new Error(err.error || `Failed to fetch locations (status ${response.status})`)
  }
  return response.json()
}

const getLocationById = async (id) => {
  const allLocations = await getAllLocations()
  return allLocations.find(location => location.id === id) || null
}

export default { getAllLocations, getLocationById }