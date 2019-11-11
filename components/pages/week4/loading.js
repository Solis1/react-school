import React from 'react';
import withErrorHandler from './withErrorHandler';
import {ReactSchoolContext} from '../../index';

class Loading extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      mouseX: 0,
      mouseY: 0
    };
  }

  componentDidMount() {
    throw new Error('Error');
  }

  render() {
    return <ReactSchoolContext.Consumer>
    {value =>(
      <div onMouseMove={evt => this.setState({ mouseX: evt.pageX, mouseY: evt.pageY})}>
        {this.props.render(this.state)}
        Is the user logged in? {value ? 'yes' : 'no'}
      </div>
    )}
    </ReactSchoolContext.Consumer>;
  }

}

export default withErrorHandler(Loading, 'Ocurrio un error 😓');
