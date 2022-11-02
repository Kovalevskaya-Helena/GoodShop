import { LOAD_STATUSES } from "../../constants";
import { rootStore } from "../store";
import { GoodsState } from './sliceAllGoods'
import { getCategories } from "store/sliceCategories/selectorsCategories";

interface transformGoods{
  categoryLabel: string;
    categoryTypeId: string;
    id: string;
    img: string;
    label: string;
    description: string;
    price: number;
}
export const getAllGoodsSlice = (state: rootStore): GoodsState => state.goods;
export const getLoadStatusSlice = (state: rootStore): LOAD_STATUSES =>
  getAllGoodsSlice(state).loadStatus;

  export const getAllGoods = (state: rootStore) => getAllGoodsSlice(state).goods

  export const getIsLoading = (state:rootStore):boolean =>  {
    return getLoadStatusSlice(state) === LOAD_STATUSES.LOADING;
  }
   export const getIsLoaded = (state:rootStore):boolean =>  {
    return getLoadStatusSlice(state) === LOAD_STATUSES.LOADED;
  }
  export const getIsError = (state:rootStore):boolean =>  {
    return getLoadStatusSlice(state) === LOAD_STATUSES.ERROR;
  }

  export const getMapGoods=(state:rootStore):transformGoods[]=>{

    const goods=getAllGoods(state);
    const mapCategories=getCategories(state);
    const {items}=goods
    const {categories}=mapCategories;

    return items.map((item)=>({...item,
      categoryLabel:
    categories.find(
      ({id})=>id===item.categoryTypeId)?.label??'Неизвестная категория'
    })
    )

  
  }
  