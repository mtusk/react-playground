import React, { Component } from 'react';
import Widgets from './components/widgets/widgets.js';

class App extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      widgets: [{
        id: 1,
        name: "Widget One",
      }, {
        id: 2,
        name: "Widget Two",
      }]
    };
  }

  render() {
    return (
      <Widgets widgets={this.state.widgets} />
    );
  }
}

export default App;
