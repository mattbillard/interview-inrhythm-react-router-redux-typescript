import { Reducer } from 'redux';
import {
  OVERVIEW_RECEIVED, REMOVE_TICKER
} from './actions';

export interface ISampleReducerState {
  stocks: any;
}

const initialState: ISampleReducerState = {
  stocks: [],
};

export const sampleReducer: Reducer<ISampleReducerState> = (state = initialState, action) => {
  switch (action.type) {
    case OVERVIEW_RECEIVED:
      const newStocks = action.data;

      return {
        ...state,
        stocks: [...state.stocks, newStocks]
      };

    case REMOVE_TICKER:
      const stockToRemove = action.data;

      return {
        ...state,
        stocks: state.stocks.filter(stock => stock.Symbol !== stockToRemove)
      };

    default:
      return state;
  }
};
