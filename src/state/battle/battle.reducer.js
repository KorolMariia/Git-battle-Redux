import { BATTLE } from './battle.actions';

const initialState = {
  loadingPlayer: { 1: false, 2: false },
  errorPlayer: { 1: null, 2: null },
  playersIds: ['1', '2'],
  initialStatePlayers: {
    1: { username: '', avatar: null },
    2: { username: '', avatar: null },
  },
  loadingBattle: false,
  errorBattle: null,
  resultsBattle: [],
};

export const battleReducer = (state = initialState, action) => {
  switch (action.type) {
    case BATTLE.SET_HANDLE_RESET:
      return {
        ...state,
        initialStatePlayers: {
          ...state.initialStatePlayers,
          [action.payload]: {
            username: '',
            avatar: null,
          },
        },
        errorPlayer: { ...state.errorPlayer, [action.payload]: null },
      };
    case BATTLE.GET_PLAYER_LOADING:
      return {
        ...state,
        loadingPlayer: { ...state.loadingPlayer, [action.payload]: true },
        errorPlayer: { ...state.errorPlayer, [action.payload]: null },
      };
    case BATTLE.GET_PLAYER_SUCCESS:
      return {
        ...state,
        loadingPlayer: { ...state.loadingPlayer, [action.payload.id]: false },
        initialStatePlayers: {
          ...state.initialStatePlayers,
          [action.payload.id]: {
            username: action.payload.data.login,
            avatar: action.payload.data.avatar_url,
          },
        },
      };
    case BATTLE.GET_PLAYER_FAILURE:
      return {
        ...state,
        loadingPlayer: {
          ...state.loadingPlayer,
          [action.payload.id]: false,
        },
        errorPlayer: {
          ...state.errorPlayer,
          [action.payload.id]: action.payload.error,
        },
      };
    case BATTLE.GET_BATTLE_LOADING:
      return {
        ...state,
        loadingBattle: true,
      };
    case BATTLE.GET_BATTLE_SUCCESS:
      return {
        ...state,
        loadingBattle: false,
        resultsBattle: action.payload,
      };
    case BATTLE.GET_BATTLE_FAILURE:
      return {
        ...state,
        loadingBattle: false,
        errorBattle: action.payload,
      };
    default:
      return state;
  }
};
