import React from 'react';
import { useDispatch, useSelector } from "react-redux";

import { getOverview, IStoreState } from '../redux';

export interface IOverviewPage { }

export const OverviewPage: React.FC<IOverviewPage> = (props) => {
  const stocks = useSelector((state: IStoreState) => state.sampleReducer.stocks);
  const dispatch = useDispatch();

  const handleGetOverview = (ticker: string) => {
    dispatch(getOverview(ticker));
  }

  return (
    <div>
      <h2>Overview Page (Hooks-Based Component)</h2>

      <button onClick={() => handleGetOverview('MSFT')}>Click me</button>
      
      <pre>{JSON.stringify(stocks, null, '  ')}</pre>
    </div>
  );
}
