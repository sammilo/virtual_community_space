const BASE_URL = '/api/locations'

const getAllLocations = async () => {
  const response = await fetch(BASE_URL)
  if (!response.ok) throw new Error('Failed to fetch locations')
  return response.json()
}

const getLocationById = async (id) => {
  const allLocations = await getAllLocations()
  return allLocations.find(location => location.id === id) || null
}

export default { getAllLocations, getLocationById }