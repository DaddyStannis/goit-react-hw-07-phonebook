import styles from './name-field.module.css';
import PropTypes from 'prop-types';
import { memo } from 'react';

const NameField = ({ onChange, value }) => {
  return (
    <label className={styles['label-wrapper']}>
      <span>Name</span>
      <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        className={styles.input}
        onChange={e => {
          onChange(e.target.value);
        }}
        value={value}
      />
    </label>
  );
};

export default memo(NameField);

NameField.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
};
