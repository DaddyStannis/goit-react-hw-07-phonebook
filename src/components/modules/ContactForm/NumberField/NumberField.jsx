import styles from './number-field.module.css';
import PropTypes from 'prop-types';
import { memo } from 'react';

const NumberField = ({ onChange, value }) => {
  return (
    <label className={styles['label-wrapper']}>
      <span>Number</span>
      <input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
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

export default memo(NumberField);

NumberField.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
};
