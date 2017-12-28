import * as React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {
    model
} from '../../test_drive';
import {
    ButtonToolbar,
    Button
} from 'react-bootstrap';
import { TestDrive } from '../model';

interface AppProps {
    testDrive: model.TestDrive;
    handleDelete: (id: number) => any;
    handleEdit: (id: TestDrive) => any;
};

class TestDriveItem extends React.Component<AppProps> {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (
            <div className="testDriveItem">
                {/* <li></li> */}
                <li><Link to={'/testdrive/' + this.props.testDrive.id}>{this.props.testDrive.title}</Link></li>
                <ButtonToolbar>
                    <Link to={'/testdrive/' + this.props.testDrive.id}>
                        <Button bsStyle="primary">
                            Edit
                </Button>
                    </Link>
                    <Button bsStyle="danger"
                        onClick={() => this.props.handleDelete(this.props.testDrive.id)}  >Delete</Button>
                </ButtonToolbar>
            </div>)
    }
}

export default TestDriveItem