import * as React from 'react';
import { TestDrive, IState } from '../model';
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

interface TestDriveFormProps {
    testDrive: TestDrive,
    saveTestDrive: (testDrive: TestDrive) => any;
    submitTestDrive: (testDrive: TestDrive) => any;
    onChange: (event: any, testDrive: TestDrive) => any;
};
interface TestDriveFormState {
    testDrive
};

class TestDriveForm extends React.Component<TestDriveFormProps, TestDriveFormState> {
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
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onChange = (e) => {
        this.props.onChange(e, this.props.testDrive);
    }

    handleSave = (e) => {
        this.props.saveTestDrive(this.props.testDrive);
    }

    handleSubmit = (e) => {
        this.props.submitTestDrive(this.props.testDrive);
    }


    render() {
        const { testDrive } = this.props;
        return (
            <div className="container" style={this.formStyle}>
                    <form>
                        <FormGroup controlId="testDriveTitle" >
                            <ControlLabel>Title</ControlLabel>
                            <FormControl type="text" onChange={this.onChange} name="title"
                                value={testDrive.title || ""} />
                            <HelpBlock>Enter the title of test drive.</HelpBlock>
                        </FormGroup>

                        <FormGroup controlId="testDriveDescription">
                            <ControlLabel>Description</ControlLabel>
                            <FormControl componentClass="textarea"
                                placeholder="textarea"
                                onChange={this.onChange}
                                name="description"
                                value={testDrive.description || ""} />
                            <HelpBlock>Descript the test drive.</HelpBlock>
                        </FormGroup>

                        <FormGroup controlId="testDriveStartDate" >
                            <ControlLabel>Stat Date</ControlLabel>
                            <FormControl type="date"
                                onChange={this.onChange}
                                name="startDate"
                                value={testDrive.startDate || ''}
                            />
                            <HelpBlock>Start Date</HelpBlock>
                        </FormGroup>

                        <FormGroup controlId="testDriveEndDate" >
                            <ControlLabel>End Date</ControlLabel>
                            <FormControl type="date"
                                onChange={this.onChange}
                                name="endDate"
                                value={testDrive.endDate || ''}
                            />
                            <HelpBlock>Start Date</HelpBlock>
                        </FormGroup>

                        <FormGroup controlId="testDriveSMaxPoints" >
                            <ControlLabel>Max Points</ControlLabel>
                            <FormControl type="number"
                                onChange={this.onChange}
                                name="maxPoints"
                                value={testDrive.maxPoints || 0} />
                            <HelpBlock>Start Date</HelpBlock>
                        </FormGroup>

                        <FormGroup controlId="testDriveExpectedBusinessValue">
                            <ControlLabel>Expected Business Value</ControlLabel>
                            <FormControl componentClass="textarea"
                                placeholder="textarea"
                                onChange={this.onChange}
                                name="expectedBusinessValue" 
                                value={testDrive.expectedBusinessValue || ""}/>
                            <HelpBlock>Descript the test drive.</HelpBlock>
                        </FormGroup>

                        <FormGroup controlId="testDriveEligibleDriverFunction">
                            <ControlLabel>Eligible Driver Function</ControlLabel>
                            <FormControl componentClass="select" multiple
                                onChange={this.onChange}
                                name="functon"
                                value={testDrive.functon || []}>
                                <option value="HR">HR</option>
                                <option value="Management">Management</option>
                                <option value="Development">Development</option>
                            </FormControl>
                        </FormGroup>

                        <FormGroup controlId="testDriveEligibleDriverLocation">
                            <ControlLabel>Eligible Driver Location</ControlLabel>
                            <FormControl componentClass="select" multiple
                                onChange={this.onChange}
                                name="location"
                                value={testDrive.location || []}>
                                <option value="India">India</option>
                                <option value="USA">USA</option>
                                <option value="France">France</option>
                            </FormControl>
                        </FormGroup>

                        <FormGroup controlId="testDriveRequiredDevices">
                            <ControlLabel>Required Devices</ControlLabel>
                            <FormControl componentClass="select" multiple
                                onChange={this.onChange}
                                name="requiredDevices"
                                value={testDrive.requiredDevices || []}>
                                <option value="Device1">Device1</option>
                                <option value="Device2">Device2</option>
                                <option value="Device3">Device3</option>
                            </FormControl>
                        </FormGroup>

                        <FormGroup controlId="testDriveRequiredOS">
                            <ControlLabel>Required OS</ControlLabel>
                            <FormControl componentClass="select" multiple
                                onChange={this.onChange}
                                name="requiredOs"
                                value={testDrive.requiredOs || []}>
                                <option value="OS1">OS1</option>
                                <option value="OS2">OS2</option>
                                <option value="OS3">OS3</option>
                            </FormControl>
                        </FormGroup>

                        <ButtonToolbar style={this.butttonGroup}>
                            {/* Provides extra visual weight and identifies the primary action in a set of buttons */}
                            <Button bsStyle="primary" onClick={this.handleSave} >Save</Button>

                            {/* Indicates a successful or positive action */}
                            <Button bsStyle="success" onClick={this.handleSubmit} >Submit</Button>
                        </ButtonToolbar>

                    </form>
            </div>
        );
    }
}

export default TestDriveForm;
