import {
  getPlayerLoadingAction,
  getPlayerSuccessAction,
  getPlayerFailureAction,
  getBattleLoadingAction,
  getBattleSuccessAction,
  getBattleFailureAction,
} from './battle.actions';
import { fetchPlayer, fetchBattle } from '../../api/api';

export const getPlayer = (id, username) => {
  return async (dispatch) => {
    try {
      dispatch(getPlayerLoadingAction(id));
      const data = await fetchPlayer(username);
      dispatch(getPlayerSuccessAction({ id, data }));
    } catch ({ response }) {
      const error = response.data.message;
      dispatch(getPlayerFailureAction({ id, error }));
    }
  };
};

export const getBattle = (players) => {
  return async (dispatch) => {
    try {
      dispatch(getBattleLoadingAction());
      const data = await fetchBattle(players);
      dispatch(getBattleSuccessAction(data));
    } catch ({ response }) {
      dispatch(getBattleFailureAction(response.data.message));
    }
  };
};
