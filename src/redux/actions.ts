import axios from "axios";

export const OVERVIEW_RECEIVED = "OVERVIEW_RECEIVED";
export const DELETE_ITEM = "DELETE_ITEM";
export const SET_ERROR = "SET_ERROR";

export const getOverview = (ticker: string) => async (dispatch) => {
  const url = `/api/overview/${ticker}.json`;
  try {
    const response = await axios.get(url);
    dispatch({ type: OVERVIEW_RECEIVED, data: response.data });
  } catch (error) {
    console.log(error.response.status);
    switch (error.response.status) {
      case 404:
        dispatch({ type: SET_ERROR, data: "Company Not Found" });
        break;
      default:
        break;
    }
  }
};

export const deleteItem = (symbol: string) => (dispatch) => {
  dispatch({ type: DELETE_ITEM, data: symbol });
};

export const setError = (errorText: string) => (dispatch) => {
  dispatch({ type: SET_ERROR, data: errorText });
};
