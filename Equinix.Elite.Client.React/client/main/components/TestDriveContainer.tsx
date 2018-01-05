import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import * as React from 'react';
import Loader from 'react-loader-advanced';

import {
    TestDrives,
    model,
    editTestDrive,
    deleteTestDrive
} from '../../test_drive';

interface AppProps {
  testDriveState: model.IState;
  dispatch: Dispatch<{}>;
}

class TestDriveContainer extends React.Component<AppProps> {
  render() {
    const { testDriveState, dispatch } = this.props;
    return (
      <div className="testDrives container">
      <Loader show={testDriveState.loading} message={'loading'}>
        <TestDrives 
          testDrives={testDriveState.testDrives} 
          editTestDrive={(t: model.TestDrive) => dispatch(editTestDrive(t))}
          deleteTestDrive={(id: number) => dispatch(deleteTestDrive(id))}
        />
      </Loader>
      </div>
    );
  }
}

const mapStateToProps = state => {
  state.testDriveState.loading = state.testDriveState.loading || 
    state.asyncInitialState.loading;
  return {
      testDriveState: state.testDriveState 
  }
};

export default connect(mapStateToProps)(TestDriveContainer);
