import PropTypes from 'prop-types';
import styles from './contact-form.module.css';
import NumberField from './NumberField/NumberField';
import NameField from './NameField/NameField';
import Button from 'components/shared/components/Button/Button';
import { useState, useCallback } from 'react';

const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const reset = useCallback(() => {
    setName('');
    setNumber('');
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(name, number);
    reset();
  };

  return (
    <form onSubmit={handleSubmit} className={styles.wrapper}>
      <div className={styles['input-wrapper']}>
        <NameField onChange={setName} value={name} />
        <NumberField onChange={setNumber} value={number} />
      </div>

      <Button text="Add" type="submit" />
    </form>
  );
};

export default ContactForm;

ContactForm.propTypes = {
  onSubmit: PropTypes.func,
};
