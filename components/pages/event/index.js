import React from 'react';
import {Link} from 'react-router-dom';

const Event = (props) => {
  const { event } = props;
  return (
    <div>
      {
        event.thumbnail_url &&
        <img src={event.thumbnail_url} />
      }
      <h2>{event.name}</h2>
      <p>{event.description}</p>
      <Link to={`/events/${event.id}`}>Inscribirse</Link>
    </div>
  );
};

export default Event;
