import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Tabs, Tab } from 'react-bootstrap';
import TestDriveForm from './TestDriveForm';
import TestCases from './TestCases';
import Loader from 'react-loader-advanced';
import TabCar from './TabCar';
import ui from 'redux-ui';
import {
    model,
    saveTestDrive,
    submitTestDrive,
    updateTestDrive,
    saveTestCase,
    editTestCase,
    deleteTestCase,
    updateTestCase,
    switchTab,
    updateMultiSelect,
    updateDate,
    addTestCase
} from '../../test_drive';

interface AppProps {
    testDrive: model.TestDrive;
    testDrives: model.IState;
    testCase: model.TestCase;
    loading: boolean;
    activeTab: string;
    updateUI: (any) => any;
    ui: any;
    dispatch: Dispatch<{}>;
};

@ui({
    state: {
        activeTab: '1',
    }
})
class ManageTestDrive extends React.Component<AppProps> {
    constructor(props, context) {
        super(props, context);
        this.getTabClass.bind(this);
    }

    getTabClass(key) {
        return this.props.activeTab === key ? "show-tab" : "hide-tab";
    }
    render() {
        const { testDrive, dispatch, loading, activeTab, testCase, ui, updateUI} = this.props;
        return (
            <div className="container">
                <h2>REGISTER A TEST DRIVE</h2>
                <div className="col-md-12">
                    <div className="wrapper">
                        <Loader show={loading} message={'Loading...'}>
                            <TabCar switchTab={(key) => dispatch(switchTab(key))} />
                            <div className={"row setup-content " + this.getTabClass('step-1')} id="step-1" >
                                <div className="col-xs-12 form_box tab-container">
                                    <TestDriveForm
                                        testDrive={testDrive}
                                        saveTestDrive={(t) => dispatch(saveTestDrive(t))}
                                        submitTestDrive={(t) => dispatch(submitTestDrive(t))}
                                        onChange={(e, testDrive) => dispatch(updateTestDrive(e, testDrive))}
                                        updateMultiSelect={(value, testDrive) => dispatch(updateMultiSelect(value, testDrive))}
                                        updateDates={(dates) => dispatch(updateDate(dates))}
                                        updateUI={updateUI}
                                        ui={ui}
                                    />
                                </div>
                            </div>
                            <div className={"row setup-content " + this.getTabClass('step-2')} id="step-2">
                                <div className="col-xs-12 form_box tab-container">
                                    <TestCases testCases={testDrive.testCases}
                                        newTestCase={testCase}
                                        saveTestCase={(t) => dispatch(saveTestCase(t))}
                                        editTestCase={(t) => dispatch(editTestCase(t))}
                                        deleteTestCase={(id) => dispatch(deleteTestCase(id))}
                                        onChange={(e, testCase) => dispatch(updateTestCase(e, testCase))}
                                        addTestCase ={() => dispatch(addTestCase())}
                                    />
                                </div>
                            </div>
                            <div className={"row setup-content " + this.getTabClass('step-3')} id="step-3">
                                <div className="col-xs-12 form_box tab-container">
                                    Questions
                                </div>
                            </div>

                            {/*<Tabs activeKey={activeTab} onSelect={(key) => dispatch(switchTab(key))}
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
                            </Tabs>*/}

                        </Loader>
                    </div>
                </div>
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
        activeTab: state.testDriveState.activeTab || "step-1",
        testCase: state.testDriveState.testCase
    }
};

export default connect(mapStateToProps)(ManageTestDrive);