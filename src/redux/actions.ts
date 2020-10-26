import axios from 'axios';

export const SAMPLE_DATA_RECEIVED =  'SAMPLE_DATA_RECEIVED';

export const getSampleData = () => async (dispatch) => {
  const url = '/api/sample-data.json';
  const response = await axios.get(url);
  dispatch({ type: SAMPLE_DATA_RECEIVED, data: response.data});
}
