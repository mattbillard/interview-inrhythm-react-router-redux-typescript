import React from 'react';
import { connect } from 'react-redux';

import { getOverview, deleteStock, IStoreState } from '../redux';
const TickerList = [
  'AAPL',
  'ADBE',
  'AMZN',
  'FB',
  'IBM',
  'MSFT',
  'NFLX',
  'ORCL',
  'INTC',
  'VZ'
];
export interface IOverviewPageView extends StateProps, DispatchProps { }
export interface IOverViewPageState {
  stockTickerInput: string; // eventually make this enum
}

export class OverviewPageView extends React.Component<IOverviewPageView, {}> {
  state = {
    stockTickerInput: ''
  };

  handleGetOverview = (ticker: string) => {
    this.props.getOverview(ticker);
  };

  render() {
    const { stocks } = this.props;

    return (
      <div>
        <h2>Overview Page (Class-Based Component)</h2>

        <input
          // todo: figure out the event type
          onChange={(event: any) => {
            this.setState({ stockTickerInput: event.target.value });
          }}
          value={this.state.stockTickerInput} />

        <div className="ticker-suggestions">
          {
            this.state.stockTickerInput && TickerList
              .filter(ticker => ticker.toUpperCase().includes(this.state.stockTickerInput.toUpperCase()))
              .map(ticker => 
                <div 
                  onClick={
                    () => this.setState(
                      { stockTickerInput: ticker }, 
                      () => this.handleGetOverview(ticker))
                  }>
                      {ticker}
                </div>)
          }
        </div>

        <button onClick={() => this.handleGetOverview(this.state.stockTickerInput)}>Click me</button>
        <table>
          <thead>
            <tr>
              <th>Symbol</th>
              <th>EPS</th>
              <th>Exchange</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
              stocks.map(stock =>
                <tr key={stock.Symbol}>
                  <td>{stock.Symbol}</td>
                  <td>{stock.EPS}</td>
                  <td>{stock.Exchange}</td>
                  <td>
                    <button onClick={() => this.props.deleteStock(stock.Symbol)} >🗑</button>
                  </td>
                </tr>
              )
            }
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state: IStoreState) => ({
  stocks: state.sampleReducer.stocks
});

const mapDispatchToProps = {
  getOverview: getOverview,
  deleteStock: deleteStock
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export const OverviewPage = connect(mapStateToProps, mapDispatchToProps)(OverviewPageView);
