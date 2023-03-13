import styles from './filter.module.css';
import PropTypes from 'prop-types';
import { useState, memo } from 'react';

const Filter = ({ onFilter }) => {
  const [value, setValue] = useState('');

  const handleChange = ({ target: { value } }) => {
    setValue(value);
    onFilter(value);
  };

  return (
    <label className={styles['label-wrapper']}>
      <span>Find by name</span>
      <input
        type="text"
        name="filter"
        title="filter"
        required
        className={styles.input}
        onChange={handleChange}
        value={value}
      />
    </label>
  );
};

export default memo(Filter);

Filter.propTypes = {
  onFilter: PropTypes.func,
};
