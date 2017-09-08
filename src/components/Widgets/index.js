import React from 'react';
import PropTypes from 'prop-types';

const Widgets = ({ widgets }) => (
  <div>
    {widgets.map(widget => (
      <li key={widget.id}>
        {widget.name}
      </li>
    ))}
  </div>
);

Widgets.propTypes = {
  widgets: PropTypes.array.isRequired,
};

export default Widgets;
