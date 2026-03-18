const BASE_URL = '/api/allevents'

const getAllEvents = async () => {
  const response = await fetch(BASE_URL)
  if (!response.ok) throw new Error('Failed to fetch events')
  return response.json()
}

const getEventsById = async (id) => {
  const allEvents = await getAllEvents()
  return allEvents.find(event => event.id === id) || null
}

const getEventsByLocationId = async (locationId) => {
  const allEvents = await getAllEvents()
  return allEvents.filter(event => event.location_id === locationId)
}

export default { getAllEvents, getEventsById, getEventsByLocationId }