import { LOAD_STATUSES } from "../../constants";
import { rootStore } from "../store";
import { GoodState } from './sliceProduct'


export const getGoodSlice = (state: rootStore): GoodState => state.good;
export const getLoadStatusSlice = (state: rootStore): LOAD_STATUSES =>
  getGoodSlice(state).loadStatus;
  export const getGood = (state: rootStore) => getGoodSlice(state).good

  export const getIsLoading = (state:rootStore):boolean =>  {
    return getLoadStatusSlice(state) === LOAD_STATUSES.LOADING;
  }
   export const getIsLoaded = (state:rootStore):boolean =>  {
    return getLoadStatusSlice(state) === LOAD_STATUSES.LOADED;
  }
  export const getIsError = (state:rootStore):boolean =>  {
    return getLoadStatusSlice(state) === LOAD_STATUSES.ERROR;
  }