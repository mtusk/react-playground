import React from 'react';
import PropTypes from 'prop-types';
import {
  List,
  ListItem,
  Subheader,
  Avatar,
} from 'react-md';

const Widgets = ({ widgets }) => (
  <section id="widgets">
    <div className="md-paper md-paper--1">
      <List>
        <Subheader primaryText="Widgets" />
        {widgets.map(widget => (
          <ListItem
            key={widget.id}
            rightAvatar={<Avatar suffix={widget.color.toLowerCase()} />}
            primaryText={widget.name}
            active={widget.id === 2}
            secondaryText="This is the one you want"
          />
        ))}
      </List>
    </div>
  </section>
);

Widgets.propTypes = {
  widgets: PropTypes.array.isRequired,
};

export default Widgets;
