import { handleActions, Action } from 'redux-actions';

import { TestDrive, TestCase, Question, IState } from './model';
import {
    ADD_TestDrive,
    DELETE_TestDrive,
    EDIT_TestDrive,
    SAVE_TestDrive,
    SUBMIT_TestDrive,
    ADD_TestCase,
    DELETE_TestCase,
    EDIT_TestCase,
    SAVE_TestCase,
    SUBMIT_TestCase,
    ADDQuestion,
    DELETEQuestion,
    EDITQuestion,
    SAVEQuestion,
    SUBMITQuestion
} from './constants/ActionTypes';
import { access, stat } from 'fs';
import TestDrives from './components/TestDrives';

const initialState: IState = {
    testDrives: [],
    loading: true
};

export default handleActions<IState, TestDrive>({
    // ["GET_TODOS_PENDING"]: (state: IState, action: Action<Todo>): IState => {
    //     return {
    //       todos: state.todos,
    //       loading: true
    //     }
    //   },

    //   ["GET_TODOS_FULFILLED"]: (state: IState, action: Action<any>): IState => {
    //     return {
    //       todos: action.payload.data,
    //       loading: false
    //     }
    //   },

    // [DELETE_TestDrive]: (state: IState, action: Action<TestDrive>): IState => {
    //     return state.filter(TestDrive =>
    //         TestDrive.id !== action.payload.id
    //     );
    // },

    [EDIT_TestDrive]: (state: IState, action: Action<TestDrive>): IState => {
        return <IState>{
            testDrives: state.testDrives.map(testDrive => {
                if (testDrive.id === action.payload.id) {
                    return action.payload;
                } else {
                    return testDrive;
                }
            }),
            loading: false
        }
    },

    ["SAVETestDrive_PENDING"]: (state: IState, action: Action<TestDrive>): IState => {
        return {
            ...state,
            loading: true
        }
    },

    ["SAVETestDrive_FULFILLED"]: (state: IState, action: Action<any>): IState => {
        return {
            ...state,
            testDrives: state.testDrives.map(testDrive => 
                testDrive.id === action.payload.testDrive.id ? action.payload.testDrive : testDrive), 
            loading: false
        }
    },

    ["SUBMITTestDrive_PENDING"]: (state: IState, action: Action<TestDrive>): IState => {
        return {
            ...state,
            loading: true
        }
    },

    ["SUBMITTestDrive_FULFILLED"]: (state: IState, action: Action<any>): IState => {
        return {
            ...state,
            testDrives: state.testDrives.map(testDrive => 
                testDrive.id === action.payload.testDrive.id ? action.payload.testDrive : testDrive), 
            loading: false
        }
    },

    [EDIT_TestDrive]: (state: IState, action: Action<TestDrive>): IState => {
        return {
            ...state,
            testDrives: state.testDrives.map(testDrive => 
                testDrive.id === action.payload.id ? action.payload : testDrive), 
            loading: false
        }
    },



    // [COMPLETE_TestDrive]: (state: IState, action: Action<TestDrive>): IState => {
    //     return <IState>state.map(TestDrive =>
    //         TestDrive.id === action.payload.id ?
    //             { ...TestDrive, completed: !TestDrive.completed } :
    //             TestDrive
    //     );
    // },

    // [COMPLETE_ALL]: (state: IState, action: Action<TestDrive>): IState => {
    //     const areAllMarked = state.every(TestDrive => TestDrive.completed);
    //     return <IState>state.map(TestDrive => ({
    //         ...TestDrive,
    //         completed: !areAllMarked
    //     }));
    // },

    // [CLEAR_COMPLETED]: (state: IState, action: Action<TestDrive>): IState => {
    //     return state.filter(TestDrive => TestDrive.completed === false);
    // }
}, initialState);
