import * as React from 'react';
import { TestDrive, IState, TestCase } from '../model';
import TestCaseForm from './TestCaseForm';

import {
    model,
    saveTestCase,
    editTestCase,
    deleteestCase,
    updateTestCase
} from '../../test_drive';

interface TestCasesProps {
    testCases: TestCase[],
    saveTestCase: (testCase: TestCase) => any;
    editTestCase: (TestCase: TestCase) => any;
    onChange: (event: any, TestCase: TestCase) => any;
};

class TestCases extends React.Component<TestCasesProps> {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        const { testCases, saveTestCase, editTestCase, onChange } = this.props;
        return (
            <div className="test-cases-container" >
                {
                    testCases.map(testCase => {
                        return <TestCaseForm testCase={testCase} 
                            saveTestCase={saveTestCase}
                            editTestCase={editTestCase}
                            onChange = {onChange}/>
                    })
                }
            </div>
        );
    }
}

export default TestCases;
