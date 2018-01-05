import * as React from 'react';
import { TestDrive, IState, TestCase } from '../model';
import 'bootstrap-datepicker';
import '../../lib/select2.min.js'
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
        const checkBoxStyle = {
            color: "green"
        }
        return (
            <div className="card">
                <div className="card-header" data-role="tab" id="headingOne">
                    <h5 className="mb-0">
                        <a data-toggle="collapse"
                            href={"#collapse" + testCase.id}
                            role="button"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                            className="pull-left"
                            onClick={() => editTestCase(testCase)}>
                            {testCase.title}

                        </a>

                        <div className="pull-right">
                            <a href="#"><i className="material-icons"
                                onClick={() => deleteTestCase(testCase.id)}>delete</i></a>
                            {!testCase.isInEditMode &&
                                <a href="#"><i className="material-icons"
                                    onClick={() => editTestCase(testCase)}>mode_edit</i></a>
                            }
                            {testCase.isInEditMode &&
                                <a href="#" className="check_ico"
                                    onClick={() => saveTestCase(testCase)}>
                                    <i className="material-icons" style={checkBoxStyle}>check</i>
                                </a>}
                        </div>
                    </h5>
                </div>
                <div id={"collapse" + testCase.id}
                    data-role="tabpanel"
                    className={testCase.isInEditMode ? "collapse in" : "collapse"}
                    aria-labelledby="headingOne" data-parent="#accordion">
                    <div className="card-body">
                        Anim pariatur cliche reprehenderit, enim eiusmod high
                        life accusamus terry richardson ad squid. 3 wolf moon
                        officia aute, non cupidatat skateboard dolor brunch.

                        <form>
                            <div className="col-md-12 register_input">

                                <input className="inputMaterial" type="text"
                                    onChange={this.onChange} name="title"
                                    value={testCase.title || ""}
                                    required />
                                <span className="highlight"></span>
                                <span className="bar"></span>
                                <label>Test drive title</label>
                            </div>
                            <div className="col-md-12 register_input">
                                <textarea className="inputMaterial"
                                    onChange={this.onChange}
                                    name="description"
                                    value={testCase.description || ""}
                                    required />
                                <span className="highlight"></span>
                                <span className="bar"></span>
                                <label className="disc_lable">Description</label>
                            </div>

                            <div className="col-md-4 register_input">
                                <select className="inputMaterial">
                                    <option value="maximum points">Test Case Type</option>
                                    <option value="maximum points">Positive</option>
                                    <option value="maximum points">Negative</option>
                                    <option value="maximum points">False Positive</option>
                                </select>
                            </div>


                        </form>
                    </div>
                </div>
            </div>
        );
        {/*<div className="container" style={this.formStyle}>
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
            </div>*/}
    }
}

export default TestCasesForm;
