import React, {PropTypes} from 'react';

const Widget = ({widget}) => {
  return (
    <span>Widget {widget.id}</span>
  );
}

Widget.propTypes = {
  widget: PropTypes.object.isRequired
};

export default Widget;
