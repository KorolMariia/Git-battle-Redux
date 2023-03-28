export const POPULAR = {
  SET_LANGUAGE: 'POPULAR.SET_LANGUAGE',
  SET_NAME: 'POPULAR.SET_NAME',
  SET_ERROR_NAME: 'POPULAR.SET_ERROR_NAME',
  GET_REPOS_LOADING: 'POPULAR.GET_REPOS_LOADING',
  GET_REPOS_SUCCESS: 'POPULAR.GET_REPOS_SUCCESS',
  GET_REPOS_FAILURE: 'POPULAR.GET_REPOS_FAILURE',
};

export const setLanguageAction = (payload) => ({
  type: POPULAR.SET_LANGUAGE,
  payload,
});

export const setNameAction = (payload) => ({
  type: POPULAR.SET_NAME,
  payload,
});

export const setErrorNameAction = (payload) => ({
  type: POPULAR.SET_ERROR_NAME,
  payload,
});

export const getReposLoadingAction = () => ({
  type: POPULAR.GET_REPOS_LOADING,
});

export const getReposSuccessAction = (payload) => ({
  type: POPULAR.GET_REPOS_SUCCESS,
  payload,
});

export const getReposFailureAction = (payload) => ({
  type: POPULAR.GET_REPOS_FAILURE,
  payload,
});
