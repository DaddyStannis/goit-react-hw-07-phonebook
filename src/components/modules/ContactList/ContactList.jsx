import styles from './contact-list.module.css';
import List from './List/List';
import Filter from './Filter/Filter';
import PropTypes from 'prop-types';

const ContactList = ({ contacts, onDelete, onFilter }) => {
  return (
    <div className={styles.wrapper}>
      <Filter onFilter={onFilter} />
      <List onDelete={onDelete} contacts={contacts} />
    </div>
  );
};

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
  onDelete: PropTypes.func,
  onFilter: PropTypes.func,
};
