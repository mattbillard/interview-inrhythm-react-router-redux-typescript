import { Reducer } from "redux";
import { OVERVIEW_RECEIVED, DELETE_ITEM, SET_ERROR } from "./actions";

export interface ISampleReducerState {
  stocks: any;
  error: string;
}

const initialState: ISampleReducerState = {
  stocks: [],
  error: "",
};

export const sampleReducer: Reducer<ISampleReducerState> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case OVERVIEW_RECEIVED: {
      const { stocks } = state;
      const newStocks = [...stocks, action.data];

      return {
        ...state,
        stocks: newStocks,
      };
    }
    case DELETE_ITEM: {
      const symbol = action.data;
      const { stocks } = state;
      const newStocks = stocks.filter((stock) => stock.Symbol !== symbol);
      return {
        ...state,
        stocks: newStocks,
      };
    }
    case SET_ERROR: {
      return {
        ...state,
        error: action.data,
      };
    }
    default:
      return state;
  }
};
