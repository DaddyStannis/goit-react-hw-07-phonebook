import styles from './item.module.css';
import PropTypes from 'prop-types';

const Item = ({ onDelete, fullName = '', phoneNumber = '', dataKey = '' }) => {
  return (
    <li className={styles.item}>
      <span className={styles.name}>{fullName}:</span>
      <span className={styles.number}>{phoneNumber}</span>
      <button
        onClick={e => {
          onDelete(dataKey);
        }}
        className={styles['delete-button']}
        type="button"
      >
        delete
      </button>
    </li>
  );
};

export default Item;

Item.propTypes = {
  onDelete: PropTypes.func,
  fullName: PropTypes.string,
  phoneNumber: PropTypes.string,
  dataKey: PropTypes.string,
};
