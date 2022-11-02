import { LOAD_STATUSES } from "../../constants";
import { rootStore } from "../store";
import { CategoriesState } from "./sliceCategoryType";
import { icons } from "components/Menu";

interface transformCategory{
    icon: JSX.Element | undefined;
    type: string;
    label: string;
    id: string;
}


export const getCategoriesSlice = (state: rootStore): CategoriesState => state.categories;
export const getLoadStatusSlice = (state: rootStore): LOAD_STATUSES =>
  getCategoriesSlice(state).loadStatus;
  export const getCategories = (state: rootStore) => getCategoriesSlice(state).categories;

  export const getIsLoading = (state:rootStore):boolean =>  {
    return getLoadStatusSlice(state) === LOAD_STATUSES.LOADING;
  }
   export const getIsLoaded = (state:rootStore):boolean =>  {
    return getLoadStatusSlice(state) === LOAD_STATUSES.LOADED;
  }
  export const getIsError = (state:rootStore):boolean =>  {
    return getLoadStatusSlice(state) === LOAD_STATUSES.ERROR;
  }
  
  export const getTrancformCategory=(state:rootStore):transformCategory[]=>{

    const mapCategories=getCategories(state);
   
    const {categories}=mapCategories;

    return categories.map((item)=>({...item,
      icon:
    icons.find(
      ({idIcon})=>idIcon===item.id)?.icon
    })
    )

  
  }