import { POPULAR } from './popular.actions';

const initialState = {
  loading: false,
  repos: [],
  error: null,
  languages: ['All', 'Javascript', 'Ruby', 'Java', 'CSS', 'Python'],
  selectedLanguage: 'all',
  searchName: '',
  ErrorSearchName: null,
};

export const popularReducer = (state = initialState, action) => {
  switch (action.type) {
    case POPULAR.SET_LANGUAGE:
      return {
        ...state,
        selectedLanguage: action.payload,
      };
    case POPULAR.SET_NAME:
      return {
        ...state,
        searchName: action.payload,
      };
    case POPULAR.SET_ERROR_NAME:
      return {
        ...state,
        ErrorSearchName: action.payload,
      };
    case POPULAR.GET_REPOS_LOADING:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case POPULAR.GET_REPOS_SUCCESS:
      return {
        ...state,
        loading: false,
        repos: action.payload,
      };
    case POPULAR.GET_REPOS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
