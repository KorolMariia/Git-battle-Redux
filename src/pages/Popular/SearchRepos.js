import { useState, useCallback, memo } from 'react';import { useDispatch, useSelector } from 'react-redux';
import debounce from 'lodash/debounce';
import {
  setNameAction,
  setErrorNameAction,
} from '../../state/popular/popular.actions';
import { BiSearchAlt } from 'react-icons/bi';

const errorRequiredField = 'This field is required';
const errorOnlyEnglish = 'This field must contain only English letters';

const SearchRepos = memo(() => {
  const dispatch = useDispatch();
  const searchName = useSelector(
    ({ popularReducer }) => popularReducer.searchName,
  );
  const ErrorSearchName = useSelector(
    ({ popularReducer }) => popularReducer.ErrorSearchName,
  );
  const [searchValue, setSearchValue] = useState(searchName);

  const delayedSearch = useCallback(
    debounce((searchValue) => {
      dispatch(setNameAction(searchValue));
    }, 600),
    [],
  );

  const onChangeHandler = (event) => {
    const value = event.target.value;
    setSearchValue(value);
    if (!value) {
      dispatch(setErrorNameAction(errorRequiredField));
      delayedSearch(value);
    } else if (!/^[a-zA-Z]+$/gi.test(value)) {
      dispatch(setErrorNameAction(errorOnlyEnglish));
    } else {
      delayedSearch(value);
      dispatch(setErrorNameAction(null));
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      dispatch(setNameAction(''));
      setSearchValue('');
    }
    if (event.key === 'Enter') {
      onChangeHandler(event);
      setSearchValue('');
    }
  };

  return (
    <>
      <div className="search-wrap">
        <input
          type="text"
          onChange={onChangeHandler}
          value={searchValue}
          className="searchTerm"
          placeholder="Enter name ..."
          onKeyDown={handleKeyDown}
          aria-describedby="search-error"
        />
        {ErrorSearchName && <span id="search-error">{ErrorSearchName}</span>}
        <button className="searchButton">
          <BiSearchAlt />
        </button>
      </div>
    </>
  );
});

export default SearchRepos;
