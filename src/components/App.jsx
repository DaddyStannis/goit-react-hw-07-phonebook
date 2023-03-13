import Section from './shared/components/Section/Section';
import ContactForm from './modules/ContactForm/ContactForm';
import ContactList from './modules/ContactList/ContactList';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getError, getLoadingFlag } from 'redux/selectors';
import { fetchContacts, removeContact, addContact } from 'redux/operations';

function isDublicate(name, contacts) {
  const normalizedName = name.toLowerCase();

  const dublicate = contacts.find(
    ({ name }) => normalizedName === name.toLowerCase()
  );

  return Boolean(dublicate);
}

const App = () => {
  const dispatch = useDispatch();
  const [filter, setFilter] = useState('');
  const contacts = useSelector(getContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const getFilteredContacts = useCallback(() => {
    if (!filter.length) {
      return contacts;
    } else {
      return contacts.filter(({ name }) => name.toLowerCase().includes(filter));
    }
  }, [contacts, filter]);

  const handleSubmit = useCallback(
    (name, number) => {
      if (isDublicate(name, contacts)) {
        alert('This contact already exist');
        return;
      }
      dispatch(addContact({ name, number }));
    },
    [contacts]
  );

  const handleDelete = useCallback(
    id => {
      dispatch(removeContact(id));
    },
    [contacts]
  );

  const handleFilter = useCallback(
    str => {
      setFilter(str.toLowerCase());
    },
    [filter]
  );

  const filteredContacts = useMemo(
    () => getFilteredContacts(),
    [filter, contacts]
  );

  return (
    <div className="container">
      <Section title="Phonebook">
        <ContactForm onSubmit={handleSubmit} />
      </Section>
      <Section title="Contacts">
        <ContactList
          onFilter={handleFilter}
          onDelete={handleDelete}
          contacts={filteredContacts}
        />
      </Section>
    </div>
  );
};

export default App;
