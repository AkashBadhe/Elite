import * as React from 'react';
import { TestDrive, IState, TestCase } from '../model';
import TestCaseForm from './TestCaseForm';
import { Button } from 'react-bootstrap';

import {
    model,
    saveTestCase,
    editTestCase,
    deleteTestCase,
    updateTestCase
} from '../../test_drive';

interface TestCasesProps {
    testCases: TestCase[];
    newTestCase: TestCase;
    deleteTestCase: (id: number) => any;
    saveTestCase: (testCase: TestCase) => any;
    editTestCase: (TestCase: TestCase) => any;
    onChange: (event: any, TestCase: TestCase) => any;
};

class TestCases extends React.Component<TestCasesProps> {
    constructor(props, context) {
        super(props, context);
        //  this.handleEdit = this.handleEdit.bind(this);
    }

    render() {
        const { testCases, saveTestCase, editTestCase, onChange, newTestCase, deleteTestCase} = this.props;
        return (
            <div className="test-cases-container" >
                {
                    testCases && testCases.map(testCase => {
                        return <TestCaseForm
                            testCase={(testCase && testCase.isInEditMode) ? { ...newTestCase, isInEditMode: true } : testCase}
                            saveTestCase={saveTestCase}
                            editTestCase={editTestCase}
                            deleteTestCase={deleteTestCase}
                            onChange={onChange}
                            key={testCase.id}
                        />
                    })
                }
            </div>
        );
    }
}

export default TestCases;
