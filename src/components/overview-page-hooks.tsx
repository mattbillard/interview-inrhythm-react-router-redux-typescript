import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";

import { getOverview, IStoreState, removeStock } from '../redux';

export interface IOverviewPage { }

export const OverviewPage: React.FC<IOverviewPage> = (props) => {
  const stocks = useSelector((state: IStoreState) => state.sampleReducer.stocks);
  const dispatch = useDispatch();
  const [ticker, setTicker] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setTicker(value);
  }

  const handleRemove = (symbol: string) => {
    dispatch(removeStock(symbol));
  }

  const handleGetOverview = (event) => {
    event.preventDefault();
    dispatch(getOverview(ticker));
  }

  return (
    <div>
      <h2>Overview Page (Hooks-Based Component)</h2>
      <form className="searchForm" onSubmit={handleGetOverview}>

      <input type="text" onChange={handleChange}/>
      {/* <button onClick={() => handleGetOverview('MSFT')}>Click me</button> */}
      <button className="searchBtn">Click me</button>
      </form>
      
      <table>
        <thead>
          <tr>
            <td></td>
            <td>Name</td>
            <td>Symbol</td>
            <td>EBITDA</td>
            <td>Exchange</td>
          </tr>
        </thead>
        <tbody>
          {stocks && stocks.map(stock => (
            <tr key={stock.Symbol}>
              <td><button onClick={() => handleRemove(stock.Symbol)}>Remove</button></td>
              <td>{stock.Name}</td>
              <td>{stock.Symbol}</td>
              <td>{stock.EBITDA}</td>
              <td>{stock.Exchange}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <pre>{JSON.stringify(stocks, null, '  ')}</pre>
    </div>
  );
}
