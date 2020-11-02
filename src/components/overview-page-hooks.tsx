import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getOverview, deleteItem, IStoreState } from "../redux";

export interface IOverviewPage {}

const columnHeadings = ["Symbol", "AssetType", "Name", "Exchange", "Currency"];

export const OverviewPage: React.FC<IOverviewPage> = (props) => {
  const stocks = useSelector(
    (state: IStoreState) => state.sampleReducer.stocks
  );
  const errorText = useSelector(
    (state: IStoreState) => state.sampleReducer.error
  );
  const dispatch = useDispatch();
  const [searchTxt, setSearchTxt] = useState("");

  const handleGetOverview = (ticker: string) => {
    dispatch(getOverview(ticker));
  };

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTxt(event.target.value);
  };

  const handleDeleteItem = (symbol: string) => {
    dispatch(deleteItem(symbol));
  };

  return (
    <div>
      <h2>Overview Page (Hooks-Based Component)</h2>
      <input onChange={handleOnChange}></input>

      <button onClick={() => handleGetOverview(searchTxt)}>Click me</button>
      {errorText && <h3>{errorText}</h3>}

      {/* <pre>{JSON.stringify(stocks, null, "  ")}</pre> */}
      <table>
        <thead>
          <tr>
            {columnHeadings.map((col, colIndex) => (
              <th key={`col-${colIndex}`}>{col}</th>
            ))}
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {stocks.map((stock, stockIndex) => (
            <tr key={`stock-${stockIndex}`}>
              {columnHeadings.map((col, itemIndex) => (
                <td key={`item-${stockIndex}-${itemIndex}`}>{stock[col]}</td>
              ))}
              <td>
                <button onClick={() => handleDeleteItem(stock.Symbol)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
