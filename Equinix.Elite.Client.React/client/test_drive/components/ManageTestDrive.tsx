import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Tabs, Tab } from 'react-bootstrap';
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
    deleteTestCase,
    updateTestCase,
    switchTab
} from '../../test_drive';

interface AppProps {
    testDrive: model.TestDrive;
    testDrives: model.IState;
    testCase: model.TestCase;
    loading: boolean;
    activeTab: string;
    dispatch: Dispatch<{}>;
};

class ManageTestDrive extends React.Component<AppProps> {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        const { testDrive, dispatch, loading, activeTab, testCase } = this.props;
        return (
            <div>
                <Loader show={loading} message={'Loading...'}>
                    <Tabs activeKey={activeTab} onSelect={(key) => dispatch(switchTab(key))}
                        id="controlled-tab-example">
                        <Tab eventKey={"1"} title="Test Drive">
                            <TestDriveForm
                                testDrive={testDrive}
                                saveTestDrive={(t) => dispatch(saveTestDrive(t))}
                                submitTestDrive={(t) => dispatch(submitTestDrive(t))}
                                onChange={(e, testDrive) => dispatch(updateTestDrive(e, testDrive))}
                            />
                        </Tab>
                        <Tab eventKey={"2"} title="Test Cases">
                            <TestCases testCases={testDrive.testCases}
                                newTestCase={testCase}
                                saveTestCase={(t) => dispatch(saveTestCase(t))}
                                editTestCase={(t) => dispatch(editTestCase(t))}
                                deleteTestCase={(id) => dispatch(deleteTestCase(id))}
                                onChange={(e, testCase) => dispatch(updateTestCase(e, testCase))}
                            />
                        </Tab>
                        <Tab eventKey={"3"} title="Survey">
                            Questions
                        </Tab>
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
    if (state.asyncInitialState.loaded && state.testDriveState.testDrive) {
        testDrive = state.testDriveState.testDrive;
    } else {
        testDrive = {} // Call api to get test drive to handle direct url change case.
    }
    return {
        testDrive: testDrive,
        testDrives: testDrives,
        loading: state.testDriveState.loading || state.asyncInitialState.loading,
        activeTab: state.testDriveState.activeTab || "1",
        testCase: state.testDriveState.testCase
    }
};

export default connect(mapStateToProps)(ManageTestDrive);