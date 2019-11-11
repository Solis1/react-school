import React from 'react';
import { client } from '../../../services/events';

class Fetch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstCall: null,
      endCall: null
    };
  }

  componentDidMount() {
    this.setState({firstCall: new Date()});
    console.log(this.props.url);
    setTimeout(async () => {
      const data = await client.get(this.props.url);
      this.setState({data, endCall: new Date()});
    }, 2000);
  }

  render() {
    return this.state.data ? <>
    {this.props.render && this.props.render(this.state)}
    Information loaded in: {((this.state.endCall - this.state.firstCall) / 1000).toFixed(2)}
    </> : <p>Loading...</p>;
  }

}

export default Fetch;
