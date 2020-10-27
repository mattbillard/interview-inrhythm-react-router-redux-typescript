import { Reducer } from 'redux';
import {
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
        stocks: newStocks,
      };
  
    default:
      return state;
  }
}
