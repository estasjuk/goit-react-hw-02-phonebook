import PropTypes from 'prop-types';

import css from './MyContactsList.module.css';

const MyContactList = ({ removeContact, contacts }) => {
  const items = contacts.map(({ id, name, number }) => (
    <li key={id}>
      {name}: {number}
      <button onClick={() => removeContact(id)} type="button">
        Delete
      </button>
    </li>
  ));

  return <ol>{items}</ol>;
};

export default MyContactList;

MyContactList.defaultProps = {
  contacts: [],
};

MyContactList.propTypes = {
  removeContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
