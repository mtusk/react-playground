import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { getWidgets } from './actions';
import { selectWidgets } from './selectors';
import Widgets from '../../components/Widgets';

export class WidgetsContainer extends Component {
  componentWillMount() {
    this.props.actions.getWidgets();
  }

  render() {
    return (
      <Widgets {...this.props} />
    );
  }
}

WidgetsContainer.propTypes = {
  actions: PropTypes.object.isRequired,
  widgets: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  widgets: selectWidgets(state),
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ getWidgets }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(WidgetsContainer);
