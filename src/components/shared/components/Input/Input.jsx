import styles from './input.module.css';
import PropTypes from 'prop-types';

const Input = ({
  type = 'text',
  name = '',
  pattern = '',
  title = '',
  required = true,
  label = '',
  onChange = null,
}) => {
  return (
    <label className={styles['label-wrapper']}>
      <span>{label}</span>
      <input
        type={type}
        name={name}
        pattern={pattern}
        title={title}
        required={required}
        className={styles.input}
        onChange={e => {
          onChange(e.target.value, name);
        }}
      />
    </label>
  );
};

export default Input;

Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  pattern: PropTypes.string,
  title: PropTypes.string,
  required: PropTypes.bool,
  label: PropTypes.string,
};
