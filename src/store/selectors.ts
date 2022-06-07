import { LOAD_STATUSES } from "../constants";
import { rootStore } from "./store";
import { Good } from "api/api";
import { State } from "./slice";

export const getGoodSlice = (state: rootStore): State => state.good;
export const getLoadStatusSlice = (state: rootStore): LOAD_STATUSES =>
  getGoodSlice(state).loadStatus;
  export const getGood = (state: rootStore) => getGoodSlice(state).goods;