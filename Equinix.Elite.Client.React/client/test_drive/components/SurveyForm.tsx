import * as React from 'react';
import { TestDrive, IState, Question } from '../model';
import '../../lib/select2.min.js'
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import ui from 'redux-ui';

interface SurveyFormProps {
    question: Question,
    deleteQuestion: (id: number) => any;
    saveQuestion: (question: Question) => any;
    editQuestion: (question: Question) => any;
    onChange: (event: any, question: Question) => any;
    updateUI: (any) => any;
    ui: any;
};

@ui({
    state: {
        questionOptions: [],
        questionType: 'Objective'
    }
})

class SurveyForm extends React.Component<SurveyFormProps> {
    constructor(props, context) {
        super(props, context);
        this.onChange = this.onChange.bind(this);
    }

    onChange = (e) => {
        this.props.onChange(e, this.props.onChange(e, this.props.question));
    }

    multiSelectChange = (value) => {
        this.props.updateUI({questionOptions: value});
    }

    render() {
        const { question, editQuestion, saveQuestion, deleteQuestion, ui } = this.props;
        question.isInEditMode = question.isInEditMode === undefined ? false : question.isInEditMode;
        const checkBoxStyle = {
            color: "green"
        }
        return (
            <div className="card">
                <div className="card-header" data-role="tab" id="headingOne">
                    <h5 className="mb-0">
                        <a data-toggle="collapse"
                            href={"#collapse" + question.id}
                            role="button"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                            className="pull-left"
                            onClick={() => editQuestion(question)}>
                            {question.title}

                        </a>

                        <div className="pull-right">
                            <a href="#"><i className="material-icons"
                                onClick={() => deleteQuestion(question.id)}>delete</i></a>
                            {!question.isInEditMode &&
                                <a href="#"><i className="material-icons"
                                    onClick={() => editQuestion(question)}>mode_edit</i></a>
                            }
                            {question.isInEditMode &&
                                <a href="#" className="check_ico"
                                    onClick={() => saveQuestion(question)}>
                                    <i className="material-icons" style={checkBoxStyle}>check</i>
                                </a>}
                        </div>
                    </h5>
                </div>
                <div id={"collapse" + question.id}
                    data-role="tabpanel"
                    className={question.isInEditMode ? "collapse in" : "collapse"}
                    aria-labelledby="headingOne" data-parent="#accordion">
                    <div className="card-body">
                        Anim pariatur cliche reprehenderit, enim eiusmod high
                        life accusamus terry richardson ad squid. 3 wolf moon
                        officia aute, non cupidatat skateboard dolor brunch.

                        <form>
                            <div className="col-md-12 register_input">

                                <input className="inputMaterial" type="text"
                                    onChange={this.onChange} name="title"
                                    value={question.title || ""}
                                    required />
                                <span className="highlight"></span>
                                <span className="bar"></span>
                                <label>Test drive title</label>
                            </div>

                            <div className="col-md-4 register_input">
                                <select className="inputMaterial" 
                                    value={ui.questionType}
                                    onChange={(value) => {this.props.updateUI({
                                        questionType: value
                                    })}}>
                                    <option value="maximum points">Question Type</option>
                                    <option value="maximum points">Objective</option>
                                    <option value="maximum points">Descriptive</option>
                                </select>
                            </div>

                            {/*<Select.Creatable multi={true}
                                value={ui.questionOptions}
                                onChange={this.multiSelectChange}
                                valueKey="Options"
                                labelKey="options"
                                type="select-multiple"
                                backspaceRemoves={true}
                            />*/}
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default SurveyForm;
