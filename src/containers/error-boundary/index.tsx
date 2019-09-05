import React from 'react';

type State = {
  error: null | string;
};

export class ErrorBoundary extends React.Component<{}, State> {
  state: State = {
    error: null,
  };

  componentDidCatch(error: Error) {
    this.setState({ error: error.message });
  }

  render() {
    const { error } = this.state;

    if (error) {
      return <div>Uh oh! Error caught: {error}</div>;
    }

    return this.props.children;
  }
}
