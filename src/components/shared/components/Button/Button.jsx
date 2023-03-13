import styles from './button.module.css';
import PropTypes from 'prop-types';

const Button = ({ callback, text = '', type = 'button' }) => {
  return (
    <button onClick={callback} className={styles.button} type={type}>
      {text}
    </button>
  );
};

export default Button;

Button.propTypes = {
  callback: PropTypes.func,
  text: PropTypes.string,
  type: PropTypes.string,
};
