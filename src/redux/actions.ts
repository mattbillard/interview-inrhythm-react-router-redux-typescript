import axios from 'axios';

export const SAMPLE_DATA_RECEIVED =  'SAMPLE_DATA_RECEIVED';

export const getSampleData = () => async (dispatch) => {
  const response = await axios.get('/api/sample-data.json');
  dispatch({ type: SAMPLE_DATA_RECEIVED, data: response.data});
}
