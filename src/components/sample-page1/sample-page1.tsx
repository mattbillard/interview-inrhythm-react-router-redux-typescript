import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";

import { getSampleData, IStoreState } from '../../redux';

export interface ISkills { }

export const SamplePage1: React.FC<ISkills> = (props) => {
  const sampleData = useSelector((state: IStoreState) => state.sampleReducer.sampleData);
  const dispatch = useDispatch();

  useEffect(() => {
    !sampleData && dispatch(getSampleData());
  });

  if (!sampleData) {
    return null;
  }

  return (
    <div>
      <h2>Sample Page 1 (Hooks Component)</h2>
      <pre>{JSON.stringify(sampleData, null, '  ')}</pre>
    </div>
  );
}
