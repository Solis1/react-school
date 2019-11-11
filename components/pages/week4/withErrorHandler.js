import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {hasError: false};
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
    console.group('componentDidCatch');
    console.error(error);
    console.info(info);
    console.groupEnd('componentDidCatch');
  }

  render() {
    console.log(this.state);
    console.log(this.props);
    if (this.state.hasError) {
      return <h1>{this.props.customText}</h1>;
    }
    return  this.props.children;
  }

}

export default (Component, customText) => props => (
  <ErrorBoundary customText={customText}>
    <Component {...props} />
  </ErrorBoundary>
);
