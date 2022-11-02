import { LOAD_STATUSES } from "../../constants";
import { rootStore } from "../store";

export const getCartSlice = (state: rootStore)=> state.cart;

export const getLoadStatusSlice = (state: rootStore): LOAD_STATUSES => getCartSlice(state).loadStatus;
export const getCart = (state: rootStore) => getCartSlice(state).cart;



export const getIsLoading = (state:rootStore):boolean =>  { 
    return getLoadStatusSlice(state) === LOAD_STATUSES.LOADING || getLoadStatusSlice(state) === LOAD_STATUSES.UNKNOWN; 
  }

/*export const getIsLoading = (state:rootStore): boolean => {

  return getLoadStatusSlice(state) === LOAD_STATUSES.LOADING; 
}*/

  export const getIsLoaded = (state:rootStore ):boolean =>  {
  return getLoadStatusSlice(state) === LOAD_STATUSES.LOADED; 
  }
  export const getIsError = (state:rootStore ):boolean =>  {
  return getLoadStatusSlice(state) === LOAD_STATUSES.ERROR;  }

  export const getGoodById = (cartId:string) => (state:rootStore) =>
  {
  return getCart(state).find( ({ id}) => cartId === id) };