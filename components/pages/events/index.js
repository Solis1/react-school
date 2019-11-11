import React, {Component} from 'react';
import Event from '../event';
import { withRouter } from 'react-router-dom';
import Fetch from '../week4/fetch';

class Events extends Component {

  constructor(props) {
    super(props);
    this.state = {
      events: []
    };
  }

  // async componentDidMount() {
  //   const {data: { data }} = await getEvents();
  //   this.setState({
  //     events: data
  //   });
  // }

  render() {
    return (
      <div>
        <h1>Events</h1>
        <Fetch url="event" render={data2 => {
          const {data: {data: {data}}} = data2;
          return data.map ((event, index) => {
            return <Event key={index} event={event}/>;
          });
        }} />
      </div>
    );
  }
}

export default withRouter(Events);
