import axios from 'axios';

export const OVERVIEW_RECEIVED =  'OVERVIEW_RECEIVED';
export const REMOVE_STOCK = 'REMOVE_STOCK';

export const getOverview = (ticker: string) => async (dispatch) => {
  const url = `/api/overview/${ticker}.json`;
  const response = await axios.get(url);
  dispatch({ type: OVERVIEW_RECEIVED, data: response.data});
}

export const deleteStock = (ticker: string) => {
 return {
   type: REMOVE_STOCK,
   data: ticker
 }
}

