import * as skillsJson from '../../public/api/sample-data.json'; 

export type ISampleData = typeof skillsJson;

export interface ISampleReducerState {
  sampleData?: ISampleData;
}
