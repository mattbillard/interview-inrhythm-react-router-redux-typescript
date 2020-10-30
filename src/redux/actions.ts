import axios from 'axios';

export const OVERVIEW_RECEIVED =  'OVERVIEW_RECEIVED';
export const DELETE_ROW =  'DELETE_ROW';

export const getOverview = (ticker: string) => async (dispatch) => {
  const url = `/api/overview/${ticker}.json`;
  const response = await axios.get(url);
  dispatch({ type: OVERVIEW_RECEIVED, data: response.data});
}

export const removeRow = (symbol: string) => ({ type: DELETE_ROW, data: symbol});

