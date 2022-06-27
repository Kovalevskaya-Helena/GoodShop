import { LOAD_STATUSES } from "../../constants";
import { rootStore } from "../store";
import { Category } from "api/api";
import { State } from "./sliceCategoryType";
import { icon } from "components/Menu";


export const getCategoriesSlice = (state: rootStore): State => state.categories;
export const getLoadStatusSlice = (state: rootStore): LOAD_STATUSES =>
  getCategoriesSlice(state).loadStatus;
  export const getCategories = (state: rootStore) => getCategoriesSlice(state).categories;

  export const getIsLoadingSeletor = (state:rootStore) =>  {
    return getLoadStatusSlice(state) === LOAD_STATUSES.LOADING;
  }
   export const getIsLoadedSeletor = (state:rootStore) =>  {
    return getLoadStatusSlice(state) === LOAD_STATUSES.LOADED;
  }
  export const getIsErrorSeletor = (state:rootStore) =>  {
    return getLoadStatusSlice(state) === LOAD_STATUSES.ERROR;
  }
  
  export const getTrancformCategory=(state:rootStore)=>{

    const mapCategories=getCategories(state);
   
    const {categories}=mapCategories;

    return categories.map((item)=>({...item,
      Icon:
    icon.find(
      ({idIcon})=>idIcon===item.id)?.icon
    })
    )

  
  }