import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { Tabs, Tab } from 'react-bootstrap-tabs';
import TestDriveForm from './TestDriveForm';
import TestCases from './TestCases';
import Loader from 'react-loader-advanced';

import {
    model,
    saveTestDrive,
    submitTestDrive,
    updateTestDrive,
    saveTestCase,
    editTestCase,
    deleteestCase,
    updateTestCase
} from '../../test_drive';

interface AppProps {
    testDrive: model.TestDrive;
    testDrives: model.IState;
    loading: boolean;
    dispatch: Dispatch<{}>;
};

class ManageTestDrive extends React.Component<AppProps> {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        const { testDrive, dispatch, loading } = this.props;
        return (
            <div>
                <Loader show={loading} message={'Loading...'}>
                    <Tabs>
                        <Tab label="Test Drive Details">

                            <TestDriveForm
                                testDrive={testDrive}
                                saveTestDrive={(t) => dispatch(saveTestDrive(t))}
                                submitTestDrive={(t) => dispatch(submitTestDrive(t))}
                                onChange={(e, testDrive) => dispatch(updateTestDrive(e, testDrive))}
                            />
                        </Tab>
                        <Tab label="Add Test Cases">
                            <h1>Test Cases</h1>
                            <TestCases testCases={testDrive.testCases}
                                saveTestCase={(t) => dispatch(saveTestCase(t))}
                                editTestCase={(t) => dispatch(editTestCase(t))}
                                onChange={(e, testCase) => dispatch(updateTestCase(e, testCase))}
                            />
                        </Tab>
                        <Tab label="Add Survey">Add Survey</Tab>
                    </Tabs>
                </Loader>
            </div>
        );
    }
}
function getCourseById(testDrives, testDriveId) {
    const testDrive = testDrives.filter(testDrive => testDrive.id == testDriveId);
    if (testDrive) return testDrive[0]; //since filter returns an array, have to grab the first.
    return null;
}

const mapStateToProps = (state, ownProps) => {
    let testDriveId = ownProps.match.params.id;
    let testDrives = state.testDriveState.testDrives
    let testDrive;
    if (state.asyncInitialState.loaded && state.testDriveState.testDrives) {
        testDrive = getCourseById(state.testDriveState.testDrives, testDriveId);
    } else {
        testDrive = {}
    }
    return {
        testDrive: testDrive,
        testDrives: testDrives,
        loading: state.testDriveState.loading || state.asyncInitialState.loading
    }
};

export default connect(mapStateToProps)(ManageTestDrive);