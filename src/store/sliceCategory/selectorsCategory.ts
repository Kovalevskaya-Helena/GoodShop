import { LOAD_STATUSES } from "../../constants";
import { rootStore } from "../store";
import { CategoryState } from "./sliceCategory";
import { getCategories } from "store/sliceCategories/selectorsCategories";



interface transformCategory{
  categoryLabel: string;
  categoryTypeId: string,
  id:string,
  img:string,
  label:string,
  description:string,
  price:number,
}

export const getCategorySlice = (state: rootStore): CategoryState => state.category;
export const getLoadStatusSlice = (state: rootStore): LOAD_STATUSES =>
  getCategorySlice(state).loadStatus;
  
  export const getCategory = (state: rootStore) => getCategorySlice(state).category;
  export const getIsLoading = (state:rootStore):boolean =>  {
    return getLoadStatusSlice(state) === LOAD_STATUSES.LOADING;
  }
   export const getIsLoaded = (state:rootStore):boolean =>  {
    return getLoadStatusSlice(state) === LOAD_STATUSES.LOADED;
  }
  export const getIsError = (state:rootStore):boolean =>  {
    return getLoadStatusSlice(state) === LOAD_STATUSES.ERROR;
  }

   export const getTransformCategory=(state:rootStore):transformCategory[]=>{

    const category=getCategory(state);
    const mapCategories=getCategories(state);
    const {items}=category
    const {categories}=mapCategories;

    return items.map((item)=>({...item,
      categoryLabel:
    categories.find(
      ({id})=>id===item.categoryTypeId)?.label??'Неизвестная категория'
    })
    )

  
  }

  