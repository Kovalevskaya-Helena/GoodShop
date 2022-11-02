import { LOAD_STATUSES } from "../../constants";
import { rootStore } from "../store";
import { PopularCategoriesState } from './slicePopularCategories'


export const getPopularCategoriesSlice = (state: rootStore): PopularCategoriesState => state.popularCategories;
export const getLoadStatusSlice = (state: rootStore): LOAD_STATUSES =>
  getPopularCategoriesSlice(state).loadStatus;
  export const getPopularCategories = (state: rootStore) => getPopularCategoriesSlice(state).popularCategories;

  export const getIsLoading = (state:rootStore):boolean =>  {
    return getLoadStatusSlice(state) === LOAD_STATUSES.LOADING;
  }
   export const getIsLoaded = (state:rootStore):boolean =>  {
    return getLoadStatusSlice(state) === LOAD_STATUSES.LOADED;
  }
  export const getIsError = (state:rootStore):boolean =>  {
    return getLoadStatusSlice(state) === LOAD_STATUSES.ERROR;
  }