import styles from './notification.module.css';
import PropTypes from 'prop-types';

const Notification = ({ message = '' }) => {
  return (
    <div>
      <p>{message}</p>
    </div>
  );
};

export default Notification;

Notification.propTypes = {
  message: PropTypes.string,
};
