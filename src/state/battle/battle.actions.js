export const BATTLE = {
  SET_HANDLE_RESET: 'BATTLE.SET_HANDLE_RESET',
  GET_PLAYER_LOADING: 'BATTLE.GET_PLAYER_LOADING',
  GET_PLAYER_SUCCESS: 'BATTLE.GET_PLAYER_SUCCESS',
  GET_PLAYER_FAILURE: 'BATTLE.GET_PLAYER_FAILURE',
  GET_BATTLE_LOADING: 'BATTLE.GET_BATTLE_LOADING',
  GET_BATTLE_SUCCESS: 'BATTLE.GET_BATTLE_SUCCESS',
  GET_BATTLE_FAILURE: 'BATTLE.GET_BATTLE_FAILURE',
};

export const setHandleRestAction = (payload) => ({
  type: BATTLE.SET_HANDLE_RESET,
  payload,
});

export const getPlayerLoadingAction = (payload) => ({
  type: BATTLE.GET_PLAYER_LOADING,
  payload,
});

export const getPlayerSuccessAction = (payload) => ({
  type: BATTLE.GET_PLAYER_SUCCESS,
  payload,
});

export const getPlayerFailureAction = (payload) => ({
  type: BATTLE.GET_PLAYER_FAILURE,
  payload,
});

export const getBattleLoadingAction = () => ({
  type: BATTLE.GET_BATTLE_LOADING,
});

export const getBattleSuccessAction = (payload) => ({
  type: BATTLE.GET_BATTLE_SUCCESS,
  payload,
});

export const getBattleFailureAction = (payload) => ({
  type: BATTLE.GET_BATTLE_FAILURE,
  payload,
});
