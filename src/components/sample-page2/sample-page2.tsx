import React from 'react';
import { connect } from 'react-redux';

import { getSampleData, IStoreState } from '../../redux';

export interface ISamplePage2View extends StateProps, DispatchProps { }

export class SamplePage2View extends React.Component<ISamplePage2View, {}> {
  componentDidMount() {
    const { sampleData, getSampleData } = this.props;

    !sampleData && getSampleData();
  }

  render() {
    const { sampleData } = this.props;

    if (!sampleData) {
      return null;
    }

    return (
      <div>
        <h2>Sample Page 2 (Class Component)</h2>
        <pre>{JSON.stringify(sampleData, null, '  ')}</pre>
      </div>
    );
  }
}

const mapStateToProps = (state: IStoreState) => ({
  sampleData: state.sampleReducer.sampleData
});

const mapDispatchToProps = {
  getSampleData: getSampleData
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export const SamplePage2 = connect(mapStateToProps, mapDispatchToProps)(SamplePage2View);
