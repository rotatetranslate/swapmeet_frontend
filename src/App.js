import React from 'react';
import { render } from 'react-dom';

class Main extends React.Component {
  render() {
    return (
      <p>Hello World</p>
    )
  }
}

render(<Main/>, document.getElementById('root'));
