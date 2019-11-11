import React, { Component } from 'react';
import { getEvent, createAttendee } from '../../../services/events';

class EventForm extends Component {
  constructor(props) {
    super(props);

    console.log(props, props.match.params.id);
    let attendee = {name: '', email: '', sizeShirt: '', company: ''};
    this.state = {
      event: {},
      attendee: attendee
    };

    this.handleCreateAttendee = this.handleCreateAttendee.bind(this);

  }

  componentDidMount() {
    getEvent(this.props.match.params.id).then((response) => {
      this.setState({
        event: {...response.data.data}
      });
    });
  }

  handleChange(evt) {
    const {name, value} = evt.target;
    const {attendee} = this.state;

    this.setState({
      attendee: {...attendee, [name]: value}
    });
  }

  handleCreateAttendee() {
    let {attendee} = this.state;
    createAttendee(attendee, this.props.match.params.id).then((response) => {
      console.log(response);
    });
  }

  render() {
    const {event, attendee} = this.state;
    const {name, email, sizeShirt, company} = attendee;

    return (
      <div>
        <h2>{event.name}</h2>
        <p>{event.description}</p>
        <label htmlFor="name">Nombre</label>
        <input type="text" value={name} name="name" onChange={(evt) => this.handleChange(evt)}/>
        <label htmlFor="email">Correo electrónico</label>
        <input type="email" value={email} name="email" onChange={(evt) => this.handleChange(evt)}/>
        <label htmlFor="sizeShirt">Talla de playera</label>
        <input type="text" value={sizeShirt} name="sizeShirt" onChange={(evt) => this.handleChange(evt)}/>
        <label htmlFor="company">Empresa</label>
        <input type="text" value={company} name="company" onChange={(evt) => this.handleChange(evt)}/>
        <button type="button" onClick={this.handleCreateAttendee}>Crear asistente</button>
      </div>
    );
  }

}

export default EventForm;
