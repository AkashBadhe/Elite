import { handleActions, Action } from 'redux-actions';

import { TestDrive, TestCase, Question, IState } from './model';
import {
    ADD_TestDrive,
    DELETE_TestDrive,
    EDIT_TestDrive,
    UPDATE_TestDrive,
    SAVE_TestDrive,
    SUBMIT_TestDrive,
    SAVE_TestDrive_PENDING,
    SAVE_TestDrive_FULFILLED,
    SUBMIT_TestDrive_PENDING,
    SUBMIT_TestDrive_FULFILLED,
    ADD_TestCase,
    DELETE_TestCase,
    EDIT_TestCase,
    SAVE_TestCase,
    UPDATE_TestCase,
    ADDQuestion,
    DELETEQuestion,
    EDITQuestion,
    SAVEQuestion,
    SUBMITQuestion

} from './constants/ActionTypes';
import { access, stat } from 'fs';
import TestDrives from './components/TestDrives';

const initialState: IState = {
    testDrive: {
        id: -1,
        title: "",
        description: "",
        maxPoints: 0,
        startDate: "",
        endDate: "",
        expectedBusinessValue: "",
        functon: ["Management", "Development"],
        location: ["India", "USA"],
        requiredDevices: ["Device1"],
        requiredOs: ["OS1", "OS2"],
        maxTestDrivers: 5000,
        testCases: [],
        questions: [],
        status: 'Draft'
    },
    testCase: {
        id: -1,
        title: "",
        description: "",
        expectedOutcome: "",
        isInEditMode: false,
        testCaseType: "",
    },
    testDrives: [],
    loading: true
};

export default handleActions<IState, TestDrive>({
    [UPDATE_TestDrive]: (state: IState, action: Action<TestDrive>): IState => {
        return {
            ...state,
            testDrive: {...state.testDrive, 
                title: action.payload.title,
                id: action.payload.id
            },
            loading: false,
        }
    },

    [EDIT_TestDrive]: (state: IState, action: Action<TestDrive>): IState => {
        return {
            ...state,
            testDrive: action.payload,
            loading: false
        }
    },


    [SAVE_TestDrive_PENDING]: (state: IState, action: Action<TestDrive>): IState => {
        return {
            ...state,
            loading: true
        }
    },

    [SAVE_TestDrive_FULFILLED]: (state: IState, action: Action<any>): IState => {
        return {
            ...state,
            testDrives: state.testDrives.map(testDrive =>
                testDrive.id === action.payload.testDrive.id ? action.payload.testDrive : testDrive),
            loading: false
        }
    },

    [SUBMIT_TestDrive_PENDING]: (state: IState, action: Action<TestDrive>): IState => {
        return {
            ...state,
            loading: true
        }
    },

    [SUBMIT_TestDrive_FULFILLED]: (state: IState, action: Action<any>): IState => {
        return {
            ...state,
            testDrives: state.testDrives.map(testDrive =>
                testDrive.id === action.payload.testDrive.id ? action.payload.testDrive : testDrive),
            loading: false
        }
    },

    

    [EDIT_TestCase]: (state: IState, action: Action<TestCase>): IState => {
        const testDrive = state.testDrive;
        return {
            ...state,
            testDrive: {
                ...testDrive, testCases: testDrive.testCases.map(testCase => {
                    return testCase.id === action.payload.id ?
                        { ...action.payload, isInEditMode: true } : testCase
                })
            }
        }
    },

    [UPDATE_TestCase]: (state: IState, action: Action<TestCase>): IState => {
        return {
            ...state,
            testCase: action.payload
        }
    },

    [SAVE_TestCase]: (state: IState, action: Action<TestCase>): IState => {
        const testDrive = state.testDrive;
        return {
            ...state,
            testDrive: {
                ...testDrive, testCases: testDrive.testCases.map(testCase => {
                    return testCase.id === action.payload.id ? action.payload : testCase;
                })
            }
        }
    }

}, initialState);
