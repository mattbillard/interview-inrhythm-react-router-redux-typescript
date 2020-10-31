import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";

import { getOverview, removeTicker, IStoreState } from '../redux';


export enum TickersEnum {
  AAPL,
  ADBE,
  AMZN,
  FB,
  IBM,
  MSFT,
  NFLX,
  ORCL,
  INTC,
  VZ,
}
export interface IOverviewPage { }

export const OverviewPage: React.FC<IOverviewPage> = (props) => {
  const stocks = useSelector((state: IStoreState) => state.sampleReducer.stocks);
  const [tickerInput, updateTickerInput] = useState<string>('');
  const dispatch = useDispatch();

  const handleGetOverview = (ticker: string) => {
    dispatch(getOverview(ticker));
  };

  const handleRemoveTicker = (ticker: string) => {
    dispatch(removeTicker(ticker));
  };

  return (
    <div>
      <h2>Overview Page (Hooks-Based Component)</h2>
      <form onSubmit={(e) => {
        e.preventDefault();
        console.log('form submitted');
      }}
      >
        <input
          name="ticker"
          onChange={(e) => updateTickerInput(e.target.value)}
          type="search"
          value={tickerInput}
        />
        <button type="submit" onClick={() => handleGetOverview(tickerInput)}>Submit</button>
      </form>

      <table>
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Name</th>
            <th>EPS</th>
            <th>Exchange</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            stocks.map(stock => (
              <tr key={stock.Symbol}>
                <td>{stock.Symbol}</td>
                <td>{stock.Name}</td>
                <td>{stock.EPS}</td>
                <td>{stock.Exchange}</td>
                <td><button onClick={() => handleRemoveTicker(stock.Symbol)}>🗑</button></td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
};
