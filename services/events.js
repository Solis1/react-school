import Axios from 'axios';

export const client = Axios.create({
  baseURL: 'http://localhost:4000/api/'
});

export function getEvents() {
  return client.get('event');
}

export function getEvent(id) {
  return client.get(`event/${id}`);
}

export function createAttendee(attendee, event_id) {
  return client.post(`event/${event_id}/attend`, attendee);
}
