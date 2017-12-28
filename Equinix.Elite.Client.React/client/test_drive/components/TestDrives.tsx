import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import TestDriveItem from './TestDriveItem';
import {
    model
} from '../../test_drive';

interface AppProps {
    testDrives: model.TestDrive[];
    handleEdit: (t: model.TestDrive) => void;
    handleDelete: (id: number) => any;

};

class TestDrives extends React.Component<AppProps> {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return <div>
        {
            this.props.testDrives.map(testDrive =>{
            return <TestDriveItem 
                key={testDrive.id} 
                testDrive={testDrive} 
                handleEdit={this.props.handleEdit}
                handleDelete={this.props.handleDelete}/>
        })
    }</div>
    }
}

export default TestDrives