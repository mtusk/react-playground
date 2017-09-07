import React, {PropTypes} from 'react';
import Widget from './widget.js';

const Widgets = ({widgets}) => {
  return (
    <div>
      <p>Widgets:</p>

      {widgets.map(widget =>
        <div key={widget.id}>
          <Widget  widget={widget} />
        </div>
      )}
    </div>
  );
};

Widgets.propTypes = {
  widgets: PropTypes.array.isRequired
};

export default Widgets;