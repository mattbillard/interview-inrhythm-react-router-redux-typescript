import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";

import { deleteStock, getOverview, IStoreState } from '../redux';

export interface IOverviewPage { }

export const OverviewPage: React.FC<IOverviewPage> = (props) => {
  const stocks = useSelector((state: IStoreState) => state.sampleReducer.stocks);
  const dispatch = useDispatch();
  const [search, setSearch] = useState<string>('MSFT');

  const handleChange = (event) => {
    setSearch(event.target.value);
  }

  const handleDeleteStock = (ticker) => {
    dispatch(deleteStock(ticker))
  }

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(getOverview(search))
  }

  return (
    <div>
      <h2>Sample Page 1 (Hooks Component)</h2>

      <form onSubmit={onSubmit}>
        <input type="text" defaultValue={search} onChange={handleChange}/>
        <button type="submit">Submit</button>
      </form>

      {stocks.length > 0 && <table>
        <thead>
          <tr>
            {Object.keys(stocks[0]).map(key => {
              if (key === 'Description') {
                return null;
              }
              return (
                <th key={key}>{key}</th>
              )
            })}
          </tr>
        </thead>
        <tbody>
          {Object.values(stocks).map((stock: any, idx: number) => {
            const ticker = stock.Symbol;

            return (
              <tr key={idx}>
                <td>
                  <button onClick={() => handleDeleteStock(ticker)}>X</button>
                </td>
                {Object.entries(stock).map((entry: any) => {
                  const key: string = entry[0];
                  const value: string = entry[1];
                  if (key === 'Description') {
                    return null;
                  }
                  return (
                    <td key={key}>{value}</td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </table>}
      {/* <pre>{JSON.stringify(stocks, null, '  ')}</pre> */}
    </div>
  );
}
