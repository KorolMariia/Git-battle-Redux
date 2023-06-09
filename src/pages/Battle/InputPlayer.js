import { useState, memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPlayer } from '../../state/battle/battle.thunk';
import Loader from '../../Components/Loader';

const InputPlayer = memo(({ id }) => {
  const dispatch = useDispatch();
  const loadingPlayer = useSelector(
    ({ battleReducer }) => battleReducer.loadingPlayer,
  );
  const errorPlayer = useSelector(
    ({ battleReducer }) => battleReducer.errorPlayer,
  );
  const [username, setUsername] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(getPlayer(id, username));
    setUsername('');
  };

  return (
    <div className="column border">
      {loadingPlayer[id] ? (
        <Loader />
      ) : (
        <form onSubmit={handleSubmit} className="column">
          <label className="header">
            Username {id}:
            <input
              className="inputPlayer"
              id={id}
              type="text"
              placeholder="GitHub username"
              autoComplete="off"
              value={username}
              onChange={({ target }) => setUsername(target.value)}
            />
          </label>
          <button className="button" disabled={!username}>
            Submit
          </button>
        </form>
      )}
      {errorPlayer[id] && <div className="error">{errorPlayer[id]}</div>}
    </div>
  );
});

export default InputPlayer;
