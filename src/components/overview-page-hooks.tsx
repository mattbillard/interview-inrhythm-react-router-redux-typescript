import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";

import { deleteStock, getOverview, IStoreState } from '../redux';

export interface IOverviewPage { }

export const OverviewPage: React.FC<IOverviewPage> = (props) => {
  const stocks = useSelector((state: IStoreState) => state.sampleReducer.stocks);
  const dispatch = useDispatch();
  const [search, setSearch] = useState<string>('MSFT');

  const handleChange = (event) => {
    const val = event.target.value.toUpperCase();
    setSearch(val);
  }

  const handleDeleteStock = (ticker) => {
    dispatch(deleteStock(ticker))
  }

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(getOverview(search));
    setSearch('');
  }

  return (
    <div>
      <h2>Sample Page 1 (Hooks Component)</h2>

      <form onSubmit={onSubmit}>
      <div className="input-group mb-3">
        <input className="form-control" type="search" value={search} onChange={handleChange}/>
        <div className="input-group-append">
          <button className="btn btn-primary" type="submit">Submit</button>
        </div>
      </div>
      </form>

      {stocks.length > 0 && 
      <table className="table table-sm table-striped table-bordered">
        <thead>
          <tr>
            <th>&nbsp;</th>
            {Object.keys(stocks[0]).map(key => {
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
                  <button className="btn btn-link" onClick={() => handleDeleteStock(ticker)}>
                    <i className="fa fa-times" />
                  </button>
                </td>
                {Object.entries(stock).map(([key, value]) => {
                  return (
                    // @ts-ignore
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
