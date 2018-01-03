import * as React from 'react';
import { TestDrive, IState, TestCase } from '../model';
import {
    FieldGroup,
    Checkbox,
    Radio,
    FormGroup,
    ControlLabel,
    FormControl,
    Button,
    HelpBlock,
    ButtonToolbar,
    Form,
    Glyphicon,
    InputGroup,
    Col,

} from 'react-bootstrap';

interface TestCaseFormProps {
    testCase: TestCase,
    deleteTestCase: (id: number) => any;
    saveTestCase: (testCase: TestCase) => any;
    editTestCase: (TestCase: TestCase) => any;
    onChange: (event: any, TestCase: TestCase) => any;
};
interface TestCaseFormState {
    testCase,
    editTestCases
};

class TestCasesForm extends React.Component<TestCaseFormProps, TestCaseFormState> {
    formStyle = {
        marginTop: '20px',
        marginBottom: '50px'
    }

    butttonGroup = {
        position: "relative",
        display: "inline-block",
        verticalAlign: "middle",
        left: "900px"
    }

    constructor(props, context) {
        super(props, context);
        this.onChange = this.onChange.bind(this);
    }

    onChange = (e) => {
        this.props.onChange(e, this.props.onChange(e, this.props.testCase));
    }

    render() {
        const { testCase, editTestCase, saveTestCase, deleteTestCase } = this.props;
        testCase.isInEditMode = testCase.isInEditMode === undefined ? false : testCase.isInEditMode;
        return (
            <div className="container" style={this.formStyle}>
                <div className="panel-group" id="testCases">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <h4 className="panel-title">
                                <a className="accordion-toggle" data-toggle="collapse" data-parent="#testCases" href={"#collapse" + testCase.id}>
                                    {testCase.title}
                                    <ButtonToolbar style={this.butttonGroup}>
                                        <Button bsStyle="danger" onClick={() => deleteTestCase(testCase.id)}>Delete</Button>
                                        {!testCase.isInEditMode &&
                                            <Button bsStyle="primary" onClick={() => editTestCase(testCase)} >Edit</Button>}
                                        {testCase.isInEditMode &&
                                            <Button bsStyle="success" onClick={() => saveTestCase(testCase)} >Save</Button>}
                                    </ButtonToolbar>
                                </a>
                            </h4>
                        </div>
                        <div id={"collapse" + testCase.id} className={testCase.isInEditMode ? "panel-collapse collapse in" : "panel-collapse collapse"}>
                            <div className="panel-body">
                                <form>
                                    <FormGroup controlId="testDriveTitle" >
                                        <ControlLabel>Title</ControlLabel>
                                        <FormControl type="text" onChange={this.onChange} name="title"
                                            value={testCase.title || ""} />
                                        <HelpBlock>Enter the title of test drive.</HelpBlock>
                                    </FormGroup>

                                    <FormGroup controlId="testDriveDescription">
                                        <ControlLabel>Description</ControlLabel>
                                        <FormControl componentClass="textarea"
                                            placeholder="textarea"
                                            onChange={this.onChange}
                                            name="description"
                                            value={testCase.description || ""} />
                                        <HelpBlock>Descript the test drive.</HelpBlock>
                                    </FormGroup>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TestCasesForm;
