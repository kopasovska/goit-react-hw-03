import css from './SearchBox.module.css';

const SearchBox = ({ value, onFilter }) => {
  return (
    <span className={css.searchBoxWrapper}>
      <p className={css.formText}>Find contacts by name:</p>
      <input
        type="text"
        name="searchInput"
        value={value}
        onChange={e => onFilter(e.target.value)}
        className={css.formInput}
      ></input>
    </span>
  );
};

export default SearchBox;
