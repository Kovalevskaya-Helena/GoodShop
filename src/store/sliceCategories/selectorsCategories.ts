import { LOAD_STATUSES } from "../../constants";
import { rootStore } from "../store";
import { Category } from "api/api";
import { State } from "./sliceCategoryType";

export const getCategoriesSlice = (state: rootStore): State => state.categories;
export const getLoadStatusSlice = (state: rootStore): LOAD_STATUSES =>
  getCategoriesSlice(state).loadStatus;
  export const getCategories = (state: rootStore) => getCategoriesSlice(state).categories;