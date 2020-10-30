import { Reducer } from 'redux';
import {
  DELETE_ROW,
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
    case OVERVIEW_RECEIVED:
      const newStocks = [action.data];

      return { 
        ...state,
        stocks: state.stocks.concat(newStocks),
      };
    case DELETE_ROW:
        const deletedSymbol = action.data
        return {
          ...state,
          stocks: state.stocks.filter(({Symbol})=>Symbol!==deletedSymbol)
        }

    default:
      return state;
  }
}
