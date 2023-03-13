import styles from './list.module.css';
import PropTypes from 'prop-types';
import Item from './Item/Item';
import { Component } from 'react';

class List extends Component {
  render() {
    const { contacts, onDelete } = this.props;
    const items = contacts.map(({ id, name, number }) => {
      return (
        <Item
          onDelete={onDelete}
          key={id}
          dataKey={id}
          fullName={name}
          phoneNumber={number}
        />
      );
    });
    return <ul className={styles.list}>{items}</ul>;
  }
}

export default List;

List.propTypes = {
  onDelete: PropTypes.func,
  id: PropTypes.string,
};
