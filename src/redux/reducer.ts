import { Reducer } from 'redux';
import {
  DELETE_STOCK,
  OVERVIEW_RECEIVED, 
} from './actions';

export interface ISampleReducerState {
  stocks: any;
}

const initialState: ISampleReducerState = {
  stocks: [],
};

export const sampleReducer: Reducer<ISampleReducerState> = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_STOCK: {
      const ticker = action.ticker;
      const newStocks = state.stocks.filter(stock => stock.Symbol !== ticker);

      return {
        ...state,
        stocks: newStocks,
      }
    };

    case OVERVIEW_RECEIVED:
      const newStock = action.data;
      const newStocks = [...state.stocks, newStock];

      return { 
        ...state,
        stocks: newStocks,
      };
  
    default:
      return state;
  }
}
