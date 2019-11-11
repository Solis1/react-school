import React from 'react';
import { withRouter } from 'react-router-dom';
import Loading from './loading';

class Week4 extends React.Component {

  constructor(props) {
    super(props);

    this.handleGoHome = this.handleGoHome.bind(this);
  }

  componentDidMount() {
    console.log(this.props);
  }

  handleGoHome() {
    this.props.history.push('/');
  }

  render() {
    return <>
      <h1>This is Week 4</h1>
      <Loading render={props => {
        return <div style={{ backgroundColor: 'pink', padding: '50px 100px'}}>
          mouse on: X {props.mouseX} Y: {props.mouseY}
        </div>;
      }} />
      <button onClick={this.handleGoHome}>Go Home</button>
    </>;
  }
}

export default withRouter(Week4);
