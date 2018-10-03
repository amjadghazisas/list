import React from 'react';
import PropTypes from 'prop-types';

import Conversation from './itemTemplates/conversation.js';

class List extends React.Component {
  render() {
    return (
      <ul>
        { this.props.items.map( (item, index) => {
            let newProps = Object.assign({ key: index }, item);
            return React.createElement(this.props.itemRenderer, newProps);
        }) }
      </ul>
    );
  }
}

List.propTypes = { itemRenderer: PropTypes.func };
List.defaultProps = { items: [], itemRenderer: Conversation };

export default List;