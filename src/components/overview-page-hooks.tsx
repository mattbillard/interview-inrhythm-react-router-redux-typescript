import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";

import { getOverview, removeTicker, IStoreState } from '../redux';


export enum TickersEnum {
  AAPL = 'AAPL',
  ADBE = 'ADBE',
  AMZN = 'AMZN',
  FB = 'FB',
  IBM = 'IBM',
  MSFT = 'MSFT',
  NFLX = 'NFLX',
  ORCL = 'ORCL',
  INTC = 'INTC',
  VZ = 'VZ',
}
export interface IOverviewPage { }

export const OverviewPage: React.FC<IOverviewPage> = (props) => {
  const stocks = useSelector((state: IStoreState) => state.sampleReducer.stocks);
  const [tickerInput, updateTickerInput] = useState<string>('');
  const [typeaheadHeight, updateTypeaheadHeight] = useState<string>('0');
  const dispatch = useDispatch();

  const handleGetOverview = (ticker: string) => {
    dispatch(getOverview(ticker));
  };

  const handleRemoveTicker = (ticker: string) => {
    dispatch(removeTicker(ticker));
  };

  const tickerSuggestions = () =>
    <>
      {
        Object.values(TickersEnum)
          .filter(ticker => ticker.toUpperCase().includes(tickerInput))
          .map(filteredTicker =>
            <div
              onClick={
                () => {
                  updateTickerInput(filteredTicker);
                  handleGetOverview(filteredTicker);
                }
              }
            >
              {filteredTicker}
            </div>
          )
      }
    </>;

  useEffect(() => {
    const typeahead = document.querySelector('.typeahead-suggestion');
    updateTypeaheadHeight((typeahead?.clientHeight || 0) + '');
    console.log(typeahead?.clientHeight);
  }, [tickerInput]);

  return (
    <div>
      <h2>Overview Page (Hooks-Based Component)</h2>
      <form
        className="form-inline"
        onSubmit={(e) => {
          e.preventDefault();
          handleGetOverview(tickerInput);
        }}
      >
        <div className="form-group">
          <input
            className="form-control"
            name="ticker"
            onChange={(e) => updateTickerInput(e.target.value.toUpperCase())}
            type="search"
            autoComplete="off"
            value={tickerInput}
          />
          <button
            className="btn btn-primary"
            type="submit"
          >
            Submit
        </button>
        </div>
        <div
          style={{
            transform: `translateY(${typeaheadHeight}px)`
          }}
          className="typeahead-suggestion">
          {
            tickerInput && tickerSuggestions()
          }
        </div>
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
