import React from 'react';
import { connect } from 'react-redux';

import { getOverview, IStoreState } from '../redux';

export interface IOverviewPageView extends StateProps, DispatchProps { }

export class OverviewPageView extends React.Component<IOverviewPageView, {}> {
  handleGetOverview = (ticker: string) => {
    this.props.getOverview(ticker);
  }

  render() {
    const { stocks } = this.props;

    return (
      <div>
        <h2>Overview Page (Class-Based Component)</h2>

        <button onClick={() => this.handleGetOverview('MSFT')}>Click me</button>
        
        <pre>{JSON.stringify(stocks, null, '  ')}</pre>
      </div>
    );
  }
}

const mapStateToProps = (state: IStoreState) => ({
  stocks: state.sampleReducer.stocks
});

const mapDispatchToProps = {
  getOverview: getOverview
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export const OverviewPage = connect(mapStateToProps, mapDispatchToProps)(OverviewPageView);
