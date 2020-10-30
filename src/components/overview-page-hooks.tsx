import React, {useState} from 'react';
import { useDispatch, useSelector } from "react-redux";

import {getOverview, IStoreState, removeRow} from '../redux';

export interface IOverviewPage { }

export const ValidStocks = ['AAPL', 'ADBE', 'AMZN', 'FB', 'IBM', 'MSFT', 'NFLX', 'ORCL', 'INTC', 'VZ']
export const OverviewPage: React.FC<IOverviewPage> = (props) => {
  const stocks = useSelector((state: IStoreState) => state.sampleReducer.stocks);
  const dispatch = useDispatch();
  const [searchTerm,setSearchTerm] = useState('');

  const handleGetOverview = (ticker: string) => {
    dispatch(getOverview(ticker));
  }

  const handleRemoveRow = (symbol: string) => {
    dispatch(removeRow(symbol))
  }

  return (
    <div>
      <h2>Overview Page (Hooks-Based Component)</h2>

      <input type="text" value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)}/>
      {ValidStocks.filter(stock=>stock.toLowerCase().includes(searchTerm.toLowerCase())).map(stock=>{
        return (
            <>
              <button onClick={() => handleGetOverview(stock)}>{stock}</button>
            </>
        )
      })}

        <table>
          <tr>
            <th/>
            <th>Symbol</th>
            <th>AssetType</th>
            <th>Name</th>
            <th>Exchange</th>
          </tr>
          {stocks.map(({Symbol,AssetType,Name,Exchange})=>{
              return(
                <tr key={Symbol}>
                <td><button onClick={()=>handleRemoveRow(Symbol)}>Remove This Row</button></td>
                <td>{Symbol}</td>
                <td>{AssetType}</td>
                <td>{Name}</td>
                <td>{Exchange}</td>
                </tr>
              )
          })}
        </table>
      
    </div>
  );
}
