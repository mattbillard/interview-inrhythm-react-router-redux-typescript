import { Reducer } from 'redux';
import {
  OVERVIEW_RECEIVED, REMOVE_STOCK, 
} from './actions';

export interface ISampleReducerState {
  stocks: any;
}

const initialState: ISampleReducerState = {
  stocks: [],
};

export const sampleReducer: Reducer<ISampleReducerState> = (state = initialState, action) => {
  switch (action.type) {
    case OVERVIEW_RECEIVED: {
      const {stocks} = state;
      const newStocks = [...stocks, action.data];
      
      return { 
        ...state,
        stocks: newStocks,
      };
    }
  
    case REMOVE_STOCK: {
      const {data} = action;
      const stocks = state.stocks.filter(stock => stock.Symbol !== data);
      return {
        ...state,
        stocks
      }
    }
    default:
      return state;
  }
}
