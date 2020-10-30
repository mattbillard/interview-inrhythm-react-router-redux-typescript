import React, {useState} from 'react';
import { useDispatch, useSelector } from "react-redux";

import { getOverview, IStoreState } from '../redux';

export interface IOverviewPage { }

export const OverviewPage: React.FC<IOverviewPage> = (props) => {
  const stocks = useSelector((state: IStoreState) => state.sampleReducer.stocks);
  const dispatch = useDispatch();
  const [searchTerm,setSearchTerm] = useState('');

  const handleGetOverview = (ticker: string) => {
    dispatch(getOverview(ticker));
  }

  return (
    <div>
      <h2>Overview Page (Hooks-Based Component)</h2>

      <input type="text" value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)}/>

      <button onClick={() => handleGetOverview(searchTerm)}>Click me</button>
        {stocks.map(({Symbol,AssetType,Name,Exchange})=>{
            return(
                <tr key={Symbol}>
                    <td>{Symbol}</td>
                    <td>{AssetType}</td>
                    <td>{Name}</td>
                    <td>{Exchange}</td>
                </tr>
            )
        })}
      
    </div>
  );
}
