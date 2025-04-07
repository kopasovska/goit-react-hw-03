import css from './Contact.module.css';
import { FaUser, FaPhone } from 'react-icons/fa';

const Contact = ({ id, name, phone, onDelete }) => {
  return (
    <li className={css.contactItem} key="id">
      <span className={css.contactData}>
        <p className={css.contactText}>
          <FaUser className={css.icon} />
          {name}
        </p>
        <p className={css.contactText}>
          <FaPhone className={css.icon} />
          {phone}
        </p>
      </span>
      <button
        type="button"
        onClick={() => onDelete(id)}
        className={css.deleteBtn}
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;
