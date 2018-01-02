import * as React from 'react';
import { TestDrive, IState, TestCase } from '../model';
import TestCaseForm from './TestCaseForm';
import { Button } from 'react-bootstrap';

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
       //  this.handleEdit = this.handleEdit.bind(this);
    }

    render() {
        const { testCases, saveTestCase, editTestCase, onChange } = this.props;
        return (
            <div className="test-cases-container" >
                {
                    testCases && testCases.map(testCase => {

                        return testCase.isInEditMode ? (<TestCaseForm testCase={testCase}
                            saveTestCase={saveTestCase}
                            editTestCase={editTestCase}
                            onChange={onChange}
                            key={testCase.title} />
                        ) : (
                                <div>
                                    {testCase.title}
                                    <Button bsStyle="success" onClick={()=> editTestCase(testCase)} >Edit</Button>
                                </div>
                            )
                    })
                }
            </div>
        );
    }
}

export default TestCases;
