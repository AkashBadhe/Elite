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
    saveTestCase: (testCase: TestCase) => any;
    editTestCase: (TestCase: TestCase) => any;
    onChange: (event: any, TestCase: TestCase) => any;
};
interface TestCaseFormState {
    testCase
};

class TestCasesForm extends React.Component<TestCaseFormProps, TestCaseFormState> {
    formStyle = {
        marginTop: '20px',
        marginBottom: '50px'
    }

    butttonGroup = {
        float: 'right'
    }

    constructor(props, context) {
        super(props, context);
        this.handleSave = this.handleSave.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onChange = (e) => {
        this.props.onChange(e, this.props.onChange(e, this.props.testCase));
    }

    handleSave = (e) => {
        this.props.saveTestCase(this.props.testCase);
    }

    handleEdit = (e) => {
        this.props.editTestCase(this.props.testCase);
    }


    render() {
        const { testCase } = this.props;
        return (
            <div className="container" style={this.formStyle}>
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

                        {/*<FormGroup controlId="testCaseType">
                            <ControlLabel>Test Case Type</ControlLabel>
                            <FormControl componentClass="select"
                                onChange={this.onChange}
                                name="testCaseType"
                                value={testCase. || []}>
                                <option value="OS1">OS1</option>
                                <option value="OS2">OS2</option>
                                <option value="OS3">OS3</option>
                            </FormControl>
                        </FormGroup>*/}

                        <ButtonToolbar style={this.butttonGroup}>
                            {/* Provides extra visual weight and identifies the primary action in a set of buttons */}
                            <Button bsStyle="primary" onClick={this.handleSave} >Save</Button>

                            {/* Indicates a successful or positive action */}
                            
                        </ButtonToolbar>

                    </form>
            </div>
        );
    }
}

export default TestCasesForm;
