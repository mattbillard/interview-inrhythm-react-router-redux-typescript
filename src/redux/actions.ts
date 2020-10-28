import axios from 'axios';

export const DELETE_STOCK =  'DELETE_STOCK';
export const OVERVIEW_RECEIVED =  'OVERVIEW_RECEIVED';

declare const window: any;

export const deleteStock = (ticker: string) => {
  return { type: DELETE_STOCK, ticker };
}

export const getOverview = (ticker: string) => async (dispatch) => {
  try {
    const url = `/api/overview/${ticker}.json`;
    const response = await axios.get(url);
    dispatch({ type: OVERVIEW_RECEIVED, data: response.data});

    // @ts-ignore
  } catch (error: Error) {
    window.toastr.error(`ERROR: could not fetch overview for ${ticker}`)
  }
}
