import { Reducer } from 'redux';
import {
  SAMPLE_DATA_RECEIVED, 
} from './actions';
import { ISampleReducerState } from '../types';

const initialState: ISampleReducerState = {
  sampleData: undefined,
};

export const sampleReducer: Reducer<ISampleReducerState> = (state = initialState, action) => {
  switch (action.type) {
    case SAMPLE_DATA_RECEIVED:
      return { 
        ...state,
        sampleData: action.data 
      };
  
    default:
      return state;
  }
}
