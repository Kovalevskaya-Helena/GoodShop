import { LOAD_STATUSES } from "../../constants";
import { rootStore } from "../store";
import { Good } from "api/api";
import { State } from "./sliceCategory";

export const getCategorySlice = (state: rootStore): State => state.category;
export const getLoadStatusSlice = (state: rootStore): LOAD_STATUSES =>
  getCategorySlice(state).loadStatus;
  export const getCategory = (state: rootStore) => getCategorySlice(state).category;