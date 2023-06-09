import { useEffect, memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getBattle } from '../../state/battle/battle.thunk';
import { setHandleRestAction } from '../../state/battle/battle.actions';
import PreviewPlayer from './PreviewPlayer';
import Loader from '../../Components/Loader';
import { MdThumbDown } from 'react-icons/md';
import { GiTargetPrize } from 'react-icons/gi';

const ButtleResults = memo(() => {
  const dispatch = useDispatch();
  const loadingBattle = useSelector(
    ({ battleReducer }) => battleReducer.loadingBattle,
  );
  const resultsBattle = useSelector(
    ({ battleReducer }) => battleReducer.resultsBattle,
  );
  const errorBattle = useSelector(
    ({ battleReducer }) => battleReducer.errorBattle,
  );
  const queryParams = new URLSearchParams(window.location.search);
  const playerOne = queryParams.get('playerOne');
  const playerTwo = queryParams.get('playerTwo');

  useEffect(() => {
    dispatch(getBattle([playerOne, playerTwo]));
  }, [playerOne, playerTwo, dispatch]);

  if (loadingBattle) {
    return <Loader />;
  }

  if (errorBattle) {
    return <p className="error">Failed to load battle results.</p>;
  }

  const showPlayers = () => {
    const renderPlayer = ({ player, score }, index) => (
      <PreviewPlayer
        key={player.id}
        name={player.login}
        avatar={player.avatar_url}
      >
        <p className="playerStatus">
          {index ? (
            <>
              <MdThumbDown />
              Loser
            </>
          ) : (
            <>
              <GiTargetPrize />
              Winner
            </>
          )}
        </p>
        <p className="playerStatus">Score: {score}</p>
        <ul className="space-list-items">
          {player.location ? (
            <li>
              <span className="descPlayer">Location:</span> {player.location}
            </li>
          ) : null}
          {player.company ? (
            <li>
              <span className="descPlayer">Company:</span> {player.company}
            </li>
          ) : null}
          {player.followers ? (
            <li>
              <span className="descPlayer">Followers:</span> {player.followers}
            </li>
          ) : null}
          {player.following ? (
            <li>
              <span className="descPlayer">Following:</span> {player.following}
            </li>
          ) : null}
          {player.public_repos ? (
            <li>
              <span className="descPlayer">Public Repos: </span>
              {player.public_repos}
            </li>
          ) : null}
          <li>
            <a href={player.blog}>{player.blog}</a>
          </li>
        </ul>
      </PreviewPlayer>
    );

    return resultsBattle.map(renderPlayer);
  };

  return (
    <>
      <section className="row">{showPlayers()}</section>
      <Link
        to="/battle"
        className="button"
        onClick={() => {
          dispatch(setHandleRestAction(1));
          dispatch(setHandleRestAction(2));
        }}
      >
        Go back
      </Link>
    </>
  );
});

export default ButtleResults;
