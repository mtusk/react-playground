import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export class App extends Component {
  constructor(props, context) {
    super(props, context);

    var asdf = 1234;
    asdf = asdf + 1;
  }

  render() {
    return (
      <main>
        {/* TODO navigation bar? */ }
        {this.props.children }
        {/* TODO loading indicator? */ }
        {/* TODO authorization UI? */ }
      </main>
    );
  }
}

App.propTypes = {
  children: PropTypes.element,
};

App.defaultProps = {
  children: null,
};

export default connect()(App);
