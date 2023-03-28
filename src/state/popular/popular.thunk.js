import {
  getReposLoadingAction,
  getReposSuccessAction,
  getReposFailureAction,
} from './popular.actions';
import { fetchPopularRepos } from '../../api/api';

export const getRepos = (selectedLanguage, searchName) => {
  return async (dispatch) => {
    try {
      dispatch(getReposLoadingAction());
      const data = await fetchPopularRepos(selectedLanguage, searchName);
      dispatch(getReposSuccessAction(data));
    } catch ({ response }) {
      dispatch(getReposFailureAction(response.data.message));
    }
  };
};
